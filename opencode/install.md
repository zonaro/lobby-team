# 📦 Agent Installation — Prompt for OpenCode

Paste the prompt below into **OpenCode** to install the **Lobby** team in the global configuration, downloading files directly from the GitHub repository.

---

## Prompt

```
Install the global agent configuration for the lobby-team project by downloading files from GitHub.

## Context

The repository is `zonaro/lobby-team` (branch `main`). Files are available via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/lobby-team/main/`
- `agents/` — folder with all specialized agents (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu, dolfi, puffy, calamari)
- `AGENTS.md` — global user rules and delegation rules
- `opencode.jsonc` — opencode configuration (default_agent: lobby)

> **Note**: `USER.md` (user's personal profile) is NOT in the repository — it is created locally in Step 3 with user-provided information.

> **Note**: 🐡 `puffy.md` and 🦑 `calamari.md` run on **Google Gemini** models (`google/gemini-3.7-flash` and `google/gemini-3.5-flash-lite`), not on OpenCode Zen — they need a separate Google API key, configured manually by the user in Step 4. Every other agent works without it.

## Step 1 — Identify the operating system

Detect the OS you're running on and determine the OpenCode configuration directory:

| OS          | OpenCode Configuration Directory                                                    |
| ----------- | ----------------------------------------------------------------------------------- |
| **Linux**   | `~/.config/opencode/` (or `$XDG_CONFIG_HOME/opencode/` if `XDG_CONFIG_HOME` is set) |
| **macOS**   | `~/.config/opencode/`                                                               |
| **Windows** | `%USERPROFILE%\.config\opencode\`                                                   |

## Step 2 — Download the files

Download each file from the repository and place it in the OpenCode configuration directory identified in Step 1:

1. `AGENTS.md` → `<config_dir>/AGENTS.md`
2. `opencode.jsonc` → `<config_dir>/opencode.jsonc`
3. All files from `agents/` → `<config_dir>/agents/`:
   - `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`, `dolfi.md`, `puffy.md`, `calamari.md`

Use the appropriate download tool for the OS:
- **Linux/macOS**: `curl -fsSL <url> -o <destination>` or `wget -q <url> -O <destination>`
- **Windows**: `Invoke-WebRequest -Uri <url> -OutFile <destination>` (PowerShell)

Create necessary directories before downloading:
- **Linux/macOS**: `mkdir -p <config_dir>/agents`
- **Windows**: `New-Item -ItemType Directory -Force -Path <config_dir>\agents` (PowerShell)

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

## Step 4 — Configure the Google/Gemini API key (required for 🐡 Puffy and 🦑 Calamari)

Puffy and Calamari are the only two agents on Google Gemini models instead of OpenCode Zen, because they rely on Gemini's native Google Search Grounding. This needs its own credential, separate from whatever is already configured for the rest of the team.

**Do this manually with the user — never ask for the key value or type it yourself:**

1. Tell the user to get a free API key from Google AI Studio: `https://aistudio.google.com/apikey`.
2. Ask the user to run this themselves, either:
   - Inside OpenCode's TUI: the `/connect` command → select the **Google** provider (not "Google Vertex AI" — that one needs a GCP service account, not a plain API key) → paste the key when prompted.
   - Or from the shell: `opencode auth login`, then pick **Google** and paste the key.
3. Confirm it worked by running `opencode auth list` — `google` should be listed as configured.

**Alternative (no `/connect`):** the user can instead export the environment variable `GOOGLE_GENERATIVE_AI_API_KEY` in their shell profile (`~/.bashrc`, `~/.zshrc`, or the Windows equivalent) — this is the standard variable for the Google Generative AI provider. Some OpenCode Gemini plugins also accept `GEMINI_API_KEY` as an alias; if the `GOOGLE_GENERATIVE_AI_API_KEY` route doesn't pick up, try that instead.

If the user skips this step, the rest of the team keeps working normally — only 🐡 Puffy and 🦑 Calamari will fail to start until the key is configured.

## Rules

- Create the configuration directory if it doesn't exist.
- If a file already exists, overwrite with the latest version from the repository.
- Download ALL files from the `agents/` folder — don't skip any.
- **DO NOT download `USER.md` from the repository** — it's created locally in Step 3 with user information.
- **NEVER type or ask the user to paste their Google API key into the chat** — only tell them where and how to configure it themselves (Step 4).
- At the end, list the installed files, confirm all were downloaded successfully, and remind the user to complete Step 4 if they haven't already.
```

---

## How to use

1. Copy the prompt above.
2. Paste into OpenCode and send.
3. OpenCode will identify the OS, download files from GitHub, place them in the correct configuration directory, and **ask for your information to create `USER.md`**.
4. **Configure your Google API key yourself** when OpenCode gets to Step 4 — get a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and run `/connect` (or `opencode auth login`) to add it under the **Google** provider. This is required for 🐡 Puffy and 🦑 Calamari; every other agent works without it.
5. Done! The Lobby team will be available globally.

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

To confirm the Google/Gemini key is configured (needed for 🐡 Puffy and 🦑 Calamari):

```bash
opencode auth list
```

`google` should appear in the list.