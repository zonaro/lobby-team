#!/usr/bin/env bash
#
# install.sh — Installs the opencode-lobby configuration files
# by creating symlinks in ~/.config/opencode/ pointing to this directory.
#
# Usage:
#   ./install.sh          # installs (creates/updates the symlinks)
#   ./install.sh --dry    # shows what would be done, without changing anything
#
set -euo pipefail

# Directory where the script is located (source of the files) — relative to the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Destination directory (opencode configuration)
CONFIG_DIR="${HOME}/.config/opencode"

# Items that will be linked (folder and files)
ITEMS=("agents" "AGENTS.md" "opencode.jsonc")

DRY_RUN=false
if [[ "${1:-}" == "--dry" ]]; then
  DRY_RUN=true
fi

echo "== opencode-lobby installer =="
echo "Source : ${SCRIPT_DIR}"
echo "Target : ${CONFIG_DIR}"
echo

mkdir -p "${CONFIG_DIR}"

for item in "${ITEMS[@]}"; do
  src="${SCRIPT_DIR}/${item}"
  dst="${CONFIG_DIR}/${item}"

  if [[ ! -e "${src}" ]]; then
    echo "WARN: source not found, skipping: ${src}"
    continue
  fi

  # Already a valid symlink pointing to the source? Nothing to do.
  if [[ -L "${dst}" ]] && [[ "$(readlink -f "${dst}")" == "$(readlink -f "${src}")" ]]; then
    echo "OK   : ${dst} already linked -> ${src}"
    continue
  fi

  # Does something exist at the destination (file, folder, or broken symlink)? Remove it first.
  if [[ -e "${dst}" || -L "${dst}" ]]; then
    if [[ "${DRY_RUN}" == true ]]; then
      echo "DRY  : would remove ${dst}"
    else
      echo "RM   : removing ${dst}"
      rm -rf "${dst}"
    fi
  fi

  if [[ "${DRY_RUN}" == true ]]; then
    echo "DRY  : would create symlink ${dst} -> ${src}"
  else
    ln -s "${src}" "${dst}"
    echo "LINK : ${dst} -> ${src}"
  fi
done

echo
if [[ "${DRY_RUN}" == true ]]; then
  echo "Dry-run mode — nothing was changed."
else
  echo "Installation completed successfully!"
fi