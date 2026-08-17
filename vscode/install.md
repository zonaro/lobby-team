# 🧩 Agent Installation in VS Code — Prompt for Copilot Chat

Installs the **Lobby** team as **VS Code custom agents** (user agents folder), installs the shared **skills** (image generators, story illustrator), and configures the **[OpenCode for Copilot Chat](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)** extension, which exposes OpenCode models inside Copilot Chat via BYOK.

Paste the prompt below into **Copilot Chat in Agent mode** (or into any agent with terminal access and file write permissions).

---

## Prompt

```
Install the lobby-team project's agent team as VS Code custom agents, downloading the files from GitHub and creating the .agent.md files in VS Code's format. Also install the extension that provides OpenCode models to Copilot Chat.

## Context

The repository is `zonaro/lobby-team` (branch `main`). Files are available via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/lobby-team/main/vscode/`
- Root: `https://raw.githubusercontent.com/zonaro/lobby-team/main/`
- `agents/` — folder with all 16 specialized agents, ALREADY in VS Code's `.agent.md` format (👩🏽‍🎤 Lobby, 🪸 Coral, 🦞 InnerLinho, 🐠 Fishie, 🐦 Peep, 🦈 Bruce, 🐻‍❄️ Snowflake, 🐍 Snuggle, 🪼 Nodi, 🧜‍♀️ Ariel, 🐧 Tucso, 🐋 Wally, 🐙 Chululu, 🐬 Dolfi, 🐡 Puffy, 🦑 Calamari)
- `instructions/lobby-team.instructions.md` — global user rules and delegation rules, already in VS Code's instructions format (with `applyTo: '**'` frontmatter)
- `skills/` (at the repo root, shared with OpenCode) — optional skills (image generators, story illustrator); written to be **software-agnostic** (work in VS Code too) and fine-tuned in Step 5.3

> **Note**: `USER.md` (user's personal profile) is NOT in the repository — it is created locally in Step 5 with user-provided information.

> **Note**: 🐡 `puffy.agent.md` and 🦑 `calamari.agent.md` run on **OpenCode Zen free** models (`opencode/nemotron-3.5-lightning-free` and `opencode/deepseek-v4-flash-free`), provided by the `ltmoerdani.opencode-copilot-chat` extension from Step 1 — no separate key needed.

## Step 1 — Install and configure the extension

The `ltmoerdani.opencode-copilot-chat` extension ("OpenCode for Copilot Chat") registers OpenCode models in the Copilot Chat model picker via BYOK. Without it, the agents still work, but running on Copilot's default models instead of OpenCode's models.

1. Check the VS Code version — the extension requires **1.125 or higher**. If lower, tell the user to update before continuing.
2. Install the extension from the terminal:
   - `code --install-extension ltmoerdani.opencode-copilot-chat`
   - (VS Code Insiders: `code-insiders --install-extension ltmoerdani.opencode-copilot-chat`)
   - If the `code` command isn't on the PATH, install through the UI: Extensions (`Ctrl+Shift+X`) → search for `opencode-copilot-chat` → Install.
3. **Ask the user to configure the API key manually** (do not try to type keys for them):
   - Get the key at `https://opencode.ai`
   - Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
   - Click the model picker → **Add Models…** → choose **OpenCode Go** (subscription) or **OpenCode Zen** (free + pay-as-you-go)
   - Paste the API key when prompted and check the desired models
4. Reload the window (`Developer: Reload Window`) — the extension auto-configures the necessary settings on first activation.
5. If some model doesn't show up in the chat picker, instruct: in **Chat: Manage Language Models**, hover over the model's row and click the eye icon to make it visible.

Useful extension settings (optional, adjust only if the user asks):
- `opencodego.enabled` / `opencodezen.enabled` — enables/disables each provider
- `opencodego.freeOnly` — shows only Zen's free models (default: `true`)
- `opencodego.thinking.*` — reasoning effort per family (deepseek, glm, kimi, minimax, mimo, qwen)

## Step 2 — Identify the user's custom agents directory

VS Code reads user-level custom agents from `~/.copilot/agents` (same path on all three OSes, using the user's home):

| OS          | User custom agents directory     |
| ----------- | -------------------------------- |
| **Linux**   | `~/.copilot/agents/`             |
| **macOS**   | `~/.copilot/agents/`             |
| **Windows** | `%USERPROFILE%\.copilot\agents\` |

And global instructions in:

| OS          | User instructions directory            |
| ----------- | -------------------------------------- |
| **Linux**   | `~/.copilot/instructions/`             |
| **macOS**   | `~/.copilot/instructions/`             |
| **Windows** | `%USERPROFILE%\.copilot\instructions\` |

Create the directories if they don't exist:
- **Linux/macOS**: `mkdir -p ~/.copilot/agents ~/.copilot/instructions ~/.copilot/skills`
- **Windows (PowerShell)**: `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions", "$env:USERPROFILE\.copilot\skills"`

> **Fallback for older VS Code**: if the agents don't show up in the picker after installation, the VS Code version may still use the legacy `.chatmode.md` format in the profile's prompts folder. In that case, save the same files with the `.chatmode.md` extension in:
> - Linux: `~/.config/Code/User/prompts/`
> - macOS: `~/Library/Application Support/Code/User/prompts/`
> - Windows: `%APPDATA%\Code\User\prompts\`
>
> (For Insiders, replace `Code` with `Code - Insiders`.) Alternatively, add the folder to the `chat.agentFilesLocations` setting.

## Step 3 — Download the repository files

Download into a temporary folder:

1. `instructions/lobby-team.instructions.md`
2. All files from `agents/`: `lobby.agent.md`, `coral.agent.md`, `innerlinho.agent.md`, `fishie.agent.md`, `peep.agent.md`, `bruce.agent.md`, `snowflake.agent.md`, `snuggle.agent.md`, `nodi.agent.md`, `ariel.agent.md`, `tucso.agent.md`, `wally.agent.md`, `chululu.agent.md`, `dolfi.agent.md`, `puffy.agent.md`, `calamari.agent.md`
3. (Optional) All folders from `skills/` (at the repo root, NOT under `vscode/`): `level-1-image-generator/`, `level-2-image-generator/`, `level-3-image-generator/`, `story-illustrator/`

Download tool per OS:
- **Linux/macOS**: `curl -fsSL <url> -o <destination>` or `wget -q <url> -O <destination>`
- **Windows (PowerShell)**: `Invoke-WebRequest -Uri <url> -OutFile <destination>`

> **Note**: The files in `vscode/agents/` are already in VS Code's `.agent.md` format — no conversion is needed. Just copy them as-is.

## Step 4 — Copy the agents to the user agents folder

Copy each downloaded `.agent.md` file from the temporary folder to the directory from Step 2 (`~/.copilot/agents/`). The files are already in VS Code's custom agent format, so **no conversion is needed**.

E.g.: `lobby.agent.md` → `~/.copilot/agents/lobby.agent.md`

**Linux/macOS**: `cp <temp>/agents/*.agent.md ~/.copilot/agents/`
**Windows (PowerShell)**: `Copy-Item <temp>\agents\*.agent.md "$env:USERPROFILE\.copilot\agents\"`

The `.agent.md` files already contain the correct frontmatter:
- `name` — Title Case with emoji (e.g., `👩🏽‍🎤 Lobby`)
- `description` — the agent's role
- `model` — the OpenCode model registered by the extension (or omitted)
- `tools` — allowed tools
- `agents` — allowed subagents
- `user-invocable` — visibility in the chat dropdown

> **Note**: If a `model` field references a model that isn't available in your account, remove the `model` line — the agent will use the model selected in the chat picker.

### 4.1 — Install the skills (optional)

Copy the downloaded `skills/` folders to the user skills directory `~/.copilot/skills/` (VS Code reads personal skills from `~/.copilot/skills/`).

**Linux/macOS**: `mkdir -p ~/.copilot/skills && cp -r <temp>/skills/* ~/.copilot/skills/`
**Windows (PowerShell)**: `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.copilot\skills"; Copy-Item <temp>\skills\* "$env:USERPROFILE\.copilot\skills\" -Recurse`

## Step 5 — Install the global rules and create USER.md

### 5.1 — Global instructions

Copy the downloaded `instructions/lobby-team.instructions.md` to `<instructions_dir>/lobby-team.instructions.md`. The file already has the `applyTo: '**'` frontmatter, so **no conversion is needed**.

**Linux/macOS**: `cp <temp>/instructions/lobby-team.instructions.md ~/.copilot/instructions/`
**Windows (PowerShell)**: `Copy-Item <temp>\instructions\lobby-team.instructions.md "$env:USERPROFILE\.copilot\instructions\"`

> Note: VS Code also reads an `AGENTS.md` in the **workspace root** automatically. The `.instructions.md` file above is the **global** version (applies to all projects).

### 5.2 — USER.md → personal profile

The personal profile is **personal and is not committed** — that's why it's created locally during installation.

Ask the user (in pt-br, unless they prefer another language):

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

Create `<instructions_dir>/user-profile.instructions.md` in this format:

```markdown
---
applyTo: '**'
---

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

### 5.3 — Install and fine-tune the skills

The skills in `skills/` are written to be **software-agnostic** — they run in VS Code, OpenCode, and other agents. VS Code reads personal skills from `~/.copilot/skills/<name>/`.

1. Confirm the four skill folders were downloaded into `~/.copilot/skills/` (Step 3): `level-1-image-generator/`, `level-2-image-generator/`, `level-3-image-generator/`, `story-illustrator/`.
2. **Resolve `<skill_dir>`** — the skill files use `<skill_dir>` as a placeholder for the skill folder's absolute path (here: `~/.copilot/skills/<name>/`). Update any path references in the `SKILL.md` files and scripts so they resolve to the installed location.
3. **Check runtime dependencies** per skill:
   - `level-1-image-generator` — Python + Pillow + numpy
   - `level-2-image-generator` — Node.js + npm + xvfb (`bash ~/.copilot/skills/level-2-image-generator/scripts/setup.sh`)
   - `level-3-image-generator` — Python + `requests` + `python-dotenv`
   - `story-illustrator` — Python stdlib only (no extra deps)
4. **Tell the user which skills need an API key** in a `.env` at the project root: `level-3-image-generator` → `CF_ACCOUNT_ID`/`CF_API_TOKEN`; `story-illustrator` → `FAL_KEY`.
5. Verify each `SKILL.md` frontmatter `name` matches its folder and report which skills are ready.

## Step 6 — Reload and validate

1. Run `Developer: Reload Window` from the command palette.
2. Open Copilot Chat and check the agent picker — all 16 agents should appear, with **Lobby** among them.
3. List the installed files and confirm the 16 `.agent.md` + the 2 `.instructions.md` are in place.

## Rules

- Create the directories if they don't exist.
- If a file already exists, overwrite it with the latest version from the repository.
- Copy ALL 16 `.agent.md` files — don't skip any.
- **NEVER type the user's API key** — only instruct them where and how to paste it in the extension's dialog (Step 1).
- **DO NOT download `USER.md` from the repository** — it is created locally in Step 5.
- **DO download and fine-tune the `skills/` folder** for VS Code (Step 5.3): resolve `<skill_dir>` paths, check dependencies, and list which need API keys.
- **DO NOT download `opencode.jsonc`** — it's in the `opencode/` folder and doesn't apply to VS Code.
- The `.agent.md` files are already in VS Code format — do NOT convert or modify the frontmatter.
- At the end, list: installed agents, agents without a fixed `model`, and the extension's status.
```

---

## How to use

1. Copy the prompt above.
2. Paste it into **Copilot Chat in Agent mode** and send.
3. The agent will install the extension, create `~/.copilot/agents/`, `~/.copilot/instructions/` and `~/.copilot/skills/`, download and copy the 16 ready-made `.agent.md` files and the instructions file, download the shared skills and fine-tune them for VS Code (Step 5.3), and **ask for your information to create the profile**.
4. You paste your OpenCode API key into the extension's dialog (the agent doesn't do this for you).
5. Reload the window — the Lobby team shows up in the Copilot Chat agent picker.

## Verification

**Linux/macOS:**

```bash
ls -la ~/.copilot/agents/ ~/.copilot/instructions/ ~/.copilot/skills/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions", "$env:USERPROFILE\.copilot\skills"
```

You should see 16 `.agent.md` files, 2 `.instructions.md` files, and the 4 skill folders.

To check the extension:

```bash
code --list-extensions | grep opencode-copilot-chat
```

## Differences from `install.md`

| Aspect                | `opencode/install.md` (OpenCode CLI)                     | `vscode/install.md` (VS Code)                                    |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| Agent destination     | `~/.config/opencode/agents/*.md`                         | `~/.copilot/agents/*.agent.md`                                   |
| Agent files in repo   | `opencode/agents/*.md` (OpenCode format)                 | `vscode/agents/*.agent.md` (ready-made, no conversion)           |
| Global rules          | `lobby-team.instructions.md` → `AGENTS.md` in config dir | `instructions/lobby-team.instructions.md` (with `applyTo: '**'`) |
| User profile          | `USER.md`                                                | `user-profile.instructions.md`                                   |
| Config                | `opencode.jsonc`                                         | not applicable — models come from the extension                  |
| Models                | `opencode/...` IDs directly                              | IDs registered by the extension in Copilot's picker              |
| Temperature/max_depth | supported                                                | not supported — removed from the ready-made files                |
| Skills                | `skills/` (repo root) → `~/.config/opencode/skills/`     | `skills/` (repo root) → `~/.copilot/skills/`                     |

## References

- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [OpenCode for Copilot Chat (Marketplace)](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)
- [ltmoerdani/opencode-copilot-chat (GitHub)](https://github.com/ltmoerdani/opencode-copilot-chat)
