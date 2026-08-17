# 📦 Agent Installation — Prompt for OpenCode

Paste the prompt below into **OpenCode** to install the **Lobby** team in the global configuration, downloading files directly from the GitHub repository.

---

## Prompt

```
Install the global agent configuration for the lobby-team project by downloading files from GitHub.

## Context

The repository is `zonaro/lobby-team` (branch `main`). Files are available via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/lobby-team/main/opencode/`
- Root: `https://raw.githubusercontent.com/zonaro/lobby-team/main/`
- `agents/` — folder with all specialized agents (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu, dolfi, puffy, calamari)
- `lobby-team.instructions.md` — global user rules and delegation rules (installed as `AGENTS.md`)
- `opencode.jsonc` — opencode configuration (default_agent: lobby)
- `skills/` (at the repo root, shared with VS Code) — optional skills (image generators, story illustrator); written to be **software-agnostic** (work on any agent) and fine-tuned in Step 4

> **Note**: `USER.md` (user's personal profile) is NOT in the repository — it is created locally in Step 3 with user-provided information.

> **Note**: 🐡 `puffy.md` and 🦑 `calamari.md` run on **OpenCode Zen free** models (`opencode/nemotron-3.5-lightning-free` and `opencode/deepseek-v4-flash-free`), just like the rest of the team — no separate API key needed.

## Step 1 — Identify the operating system

Detect the OS you're running on and determine the OpenCode configuration directory:

| OS          | OpenCode Configuration Directory                                                    |
| ----------- | ----------------------------------------------------------------------------------- |
| **Linux**   | `~/.config/opencode/` (or `$XDG_CONFIG_HOME/opencode/` if `XDG_CONFIG_HOME` is set) |
| **macOS**   | `~/.config/opencode/`                                                               |
| **Windows** | `%USERPROFILE%\.config\opencode\`                                                   |

## Step 2 — Download the files

Download each file from the repository and place it in the OpenCode configuration directory identified in Step 1:

1. `lobby-team.instructions.md` → `<config_dir>/AGENTS.md` (OpenCode reads global rules from `AGENTS.md`)
2. `opencode.jsonc` → `<config_dir>/opencode.jsonc`
3. All files from `agents/` → `<config_dir>/agents/`:
   - `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`, `dolfi.md`, `puffy.md`, `calamari.md`
4. (Optional) All folders from `skills/` (at the repo root, NOT under `opencode/`) → `<config_dir>/skills/`:
   - `level-1-image-generator/`, `level-2-image-generator/`, `level-3-image-generator/`, `story-illustrator/`
   - Use the root base URL for these: `https://raw.githubusercontent.com/zonaro/lobby-team/main/skills/<folder>/...`
   - After downloading, fine-tune them for this environment (see **Step 4**).

Use the appropriate download tool for the OS:
- **Linux/macOS**: `curl -fsSL <url> -o <destination>` or `wget -q <url> -O <destination>`
- **Windows**: `Invoke-WebRequest -Uri <url> -OutFile <destination>` (PowerShell)

Create necessary directories before downloading:
- **Linux/macOS**: `mkdir -p <config_dir>/agents <config_dir>/skills`
- **Windows**: `New-Item -ItemType Directory -Force -Path <config_dir>\agents, <config_dir>\skills` (PowerShell)

## Step 3 — Create USER.md with user information

`USER.md` contains the user's personal profile (name, preferences, family, professional info). It is **personal and must not be committed** — that's why it's created locally during installation.

Ask the user the following information (in pt-br, unless they prefer another language):

1. **What should I call you?** (nickname)
2. **Full name**
3. **Gender** (optional)
4. **Pronouns** (e.g., He/Him, She/Her)
5. **Timezone** (e.g., America/Sao_Paulo)
6. **Preferred language** (e.g., Portuguese pt-br)
7. **Location** (city, state, country)
8. **Profession / area of work**
9. **Preferred tech stack** (languages, frameworks, databases)
10. **Family information** (optional)
11. **Any other personal preferences** they want to record

Create the file `<config_dir>/USER.md` with the answers, following this format:

```markdown
# User Profile

- **Callme by**: {nickname}
- **Gender**: {gender}
- **Full Name**: {full name}
- **Alias / Handle**: {alias}
- **Pronouns**: {pronouns}
- **Timezone**: {timezone}
- **Language**: {language}
- **Location**: {location}

### Professional

- {profession / area of work}
- {tech stack}

### Preferences

- {personal preferences}
```

If the user doesn't want to answer a question, leave the field blank or omit the line.

## Step 4 — Fine-tune the installed skills for this environment

The skills in `skills/` are written to be **software-agnostic** — they run on OpenCode, VS Code, and other agents. Fine-tune them for this OpenCode install:

1. **Resolve `<skill_dir>`** — the skill files use `<skill_dir>` as a placeholder for the skill folder's absolute path (here: `<config_dir>/skills/<name>/`). Update any path references in the `SKILL.md` files and scripts so they resolve to the installed location.
2. **Check runtime dependencies** per skill:
   - `level-1-image-generator` — Python + Pillow + numpy (`pip install pillow numpy --break-system-packages`)
   - `level-2-image-generator` — Node.js + npm + xvfb (`bash <config_dir>/skills/level-2-image-generator/scripts/setup.sh`)
   - `level-3-image-generator` — Python + `requests` + `python-dotenv`
   - `story-illustrator` — Python stdlib only (no extra deps)
3. **Tell the user which skills need an API key** in a `.env` at the project root:
   - `level-3-image-generator` → `CF_ACCOUNT_ID`, `CF_API_TOKEN`
   - `story-illustrator` → `FAL_KEY`
4. **Verify discoverability** — each `<config_dir>/skills/<name>/SKILL.md` frontmatter `name` should match its folder, and the skill should load when invoked.
5. Report which skills are ready and which still need a key or a dependency.

## Rules

- Create the configuration directory if it doesn't exist.
- If a file already exists, overwrite with the latest version from the repository.
- Download ALL files from the `agents/` folder — don't skip any.
- Download ALL folders from the `skills/` folder (optional but recommended).
- After downloading, **fine-tune the skills for this environment** (Step 4): resolve `<skill_dir>` paths, check dependencies, and list which need API keys.
- **DO NOT download `USER.md` from the repository** — it's created locally in Step 3 with user information.
- At the end, list the installed files and confirm all were downloaded successfully.
```

---

## How to use

1. Copy the prompt above.
2. Paste into OpenCode and send.
3. OpenCode will identify the OS, download files from GitHub, place them in the correct configuration directory, and **ask for your information to create `USER.md`**.
4. Done! The Lobby team will be available globally.

## Verification

After installing, verify with the appropriate command for your OS:

**Linux/macOS:**

```bash
ls -la ~/.config/opencode/agents/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.config\opencode\agents"
```

You should see all agent files downloaded from the repository.