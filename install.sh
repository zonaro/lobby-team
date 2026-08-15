#!/usr/bin/env bash
#
# install.sh — Instala os arquivos de configuração do opencode-lobby
# criando symlinks em ~/.config/opencode/ apontando para este diretório.
#
# Uso:
#   ./install.sh          # instala (cria/atualiza os symlinks)
#   ./install.sh --dry    # mostra o que seria feito, sem alterar nada
#
set -euo pipefail

# Diretório onde o script está (origem dos arquivos) — caminho relativo ao script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Diretório de destino (configuração do opencode)
CONFIG_DIR="${HOME}/.config/opencode"

# Itens que serão linkados (pasta e arquivos)
ITEMS=("agents" "AGENTS.md" "opencode.jsonc")

DRY_RUN=false
if [[ "${1:-}" == "--dry" ]]; then
  DRY_RUN=true
fi

echo "== opencode-lobby installer =="
echo "Origem : ${SCRIPT_DIR}"
echo "Destino: ${CONFIG_DIR}"
echo

mkdir -p "${CONFIG_DIR}"

for item in "${ITEMS[@]}"; do
  src="${SCRIPT_DIR}/${item}"
  dst="${CONFIG_DIR}/${item}"

  if [[ ! -e "${src}" ]]; then
    echo "AVISO: origem não encontrada, pulando: ${src}"
    continue
  fi

  # Já é um symlink válido apontando para a origem? Nada a fazer.
  if [[ -L "${dst}" ]] && [[ "$(readlink -f "${dst}")" == "$(readlink -f "${src}")" ]]; then
    echo "OK   : ${dst} já está linkado -> ${src}"
    continue
  fi

  # Existe algo no destino (arquivo, pasta ou symlink quebrado)? Remove antes.
  if [[ -e "${dst}" || -L "${dst}" ]]; then
    if [[ "${DRY_RUN}" == true ]]; then
      echo "DRY  : removeria ${dst}"
    else
      echo "RM   : removendo ${dst}"
      rm -rf "${dst}"
    fi
  fi

  if [[ "${DRY_RUN}" == true ]]; then
    echo "DRY  : criaria symlink ${dst} -> ${src}"
  else
    ln -s "${src}" "${dst}"
    echo "LINK : ${dst} -> ${src}"
  fi
done

echo
if [[ "${DRY_RUN}" == true ]]; then
  echo "Modo dry-run — nada foi alterado."
else
  echo "Instalação concluída com sucesso!"
fi