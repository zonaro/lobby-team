# 🧩 Agent Installation in VS Code — Prompt for Copilot Chat

Installs the **Lobby** team as **VS Code custom agents** (user agents folder) and configures the **[OpenCode for Copilot Chat](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)** extension, which exposes OpenCode models inside Copilot Chat via BYOK.

Paste the prompt below into **Copilot Chat in Agent mode** (or into any agent with terminal access and file write permissions).

---

## Prompt

```
Install the opencode-lobby project's agent team as VS Code custom agents, downloading the files from GitHub and converting the frontmatter from the OpenCode format to VS Code's .agent.md format. Also install the extension that provides OpenCode models to Copilot Chat.

## Context

The repository is `zonaro/opencode-lobby` (branch `main`). Files are available via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/opencode-lobby/main/`
- `agents/` — folder with all specialized agents (🦞 Lobby, 🪸 Coral, 🦞 InnerLinho, 🐠 Fishie, 🐦 Peep, 🦈 Bruce, 🐻‍❄️ Snowflake, 🐍 Snuggle, 🪼 Nodi, 🧜‍♀️ Ariel, 🐧 Tucso, 🐋 Wally, 🐙 Chululu)
- `AGENTS.md` — global user rules and delegation rules
- `opencode.jsonc` — opencode configuration (NOT used in VS Code, ignore this file)

> **Note**: `USER.md` (user's personal profile) is NOT in the repository — it is created locally in Step 5 with user-provided information.

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
- **Linux/macOS**: `mkdir -p ~/.copilot/agents ~/.copilot/instructions`
- **Windows (PowerShell)**: `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions"`

> **Fallback for older VS Code**: if the agents don't show up in the picker after installation, the VS Code version may still use the legacy `.chatmode.md` format in the profile's prompts folder. In that case, save the same files with the `.chatmode.md` extension in:
> - Linux: `~/.config/Code/User/prompts/`
> - macOS: `~/Library/Application Support/Code/User/prompts/`
> - Windows: `%APPDATA%\Code\User\prompts\`
>
> (For Insiders, replace `Code` with `Code - Insiders`.) Alternatively, add the folder to the `chat.agentFilesLocations` setting.

## Step 3 — Download the repository files

Download into a temporary folder:

1. `AGENTS.md`
2. All files from `agents/`: `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`

Download tool per OS:
- **Linux/macOS**: `curl -fsSL <url> -o <destination>` or `wget -q <url> -O <destination>`
- **Windows (PowerShell)**: `Invoke-WebRequest -Uri <url> -OutFile <destination>`

**DO NOT download `opencode.jsonc`** — it is specific to the OpenCode CLI and has no effect in VS Code.

> **Note**: File names in the repository are lowercase (e.g., `lobby.md`). When converting to VS Code's `.agent.md` format, the `name` field in the frontmatter must use **Title Case with emoji** (e.g., `🦞 Lobby`), per the mapping table above.

## Step 4 — Convert each agent to the .agent.md format

The repository files use **OpenCode** frontmatter. VS Code uses **custom agent** frontmatter. For each agent, keep the Markdown body **intact** (all instructions, personality and rules) and rewrite **only the frontmatter**.

Save each one as `<name>.agent.md` in the directory from Step 2. E.g.: `lobby.md` → `~/.copilot/agents/lobby.agent.md`.

### Field mapping

| OpenCode                     | VS Code (`.agent.md`)                                          |
| ---------------------------- | -------------------------------------------------------------- |
| `description`                | `description` (copy verbatim)                                  |
| *(file name)*                | `name` (e.g., `🦞 Lobby`, `🪸 Coral`) — set explicitly in **Title Case** with the agent's emoji |
| `mode: primary`              | `user-invocable: true`                                         |
| `mode: subagent`             | `user-invocable: true` + `disable-model-invocation: false`     |
| `allowed_subagents: [...]`   | `agents: [...]` (same list; `[]` when empty) — use names in **Title Case** with emojis (e.g., `🦞 InnerLinho`, `🐠 Fishie`) |
| `model: opencode/<x>`        | `model:` — see the model rule below                            |
| `permission:`                | `tools:` — see the permissions table below                     |
| `temperature`                | **no equivalent** — remove                                     |
| `max_depth`                  | **no equivalent** — remove                                     |

### Model rule

The `opencode/...` IDs from the repository are not the IDs registered by the extension in VS Code. Do it like this:

1. Run the **`OpenCode: Model Picker Diagnostics`** command from the command palette to list the registered models.
2. Map each repository model to the matching ID that shows up in the list:
   - `opencode/nemotron-3-ultra-free` → Nemotron 3 Ultra (lobby, coral)
   - `opencode/deepseek-v4-flash-free` → DeepSeek V4 Flash (innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, tucso)
   - `opencode/nemotron-3.5-lightning-free` → Nemotron 3.5 Lightning (wally)
   - `opencode/laguna-s-2.1-free` → Laguna S 2.1 (ariel)
   - `opencode/mimo-v2.5-free` → MiMo V2.5 (chululu — needs a vision-capable model)
3. **If a model isn't available in the user's account, omit the `model` field** — the agent will use the model selected in the chat picker. Do not invent IDs.
4. At the end, tell the user which agents ended up without a fixed `model`.

### Permissions → tools table

General rule, derived from each file's `permission:` block:

| OpenCode `permission:`    | VS Code tool     |
| ------------------------- | ---------------- |
| `edit: allow`             | `edit`           |
| `bash: allow`             | `runCommands`    |
| `webfetch: allow`         | `fetch`          |
| `websearch: allow`        | `search`         |
| `todowrite: allow`        | `todos`          |
| `task: allow`             | *(delegation — expressed via `agents:`, not via `tools:`)* |
| any `deny`                | omit the tool    |

Always include `search` (codebase search) even when the agent doesn't have `websearch`, except for chululu.

Expected result per agent:

- **🦞 Lobby** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: ['🦞 InnerLinho', '🐠 Fishie', '🪸 Coral', '🐋 Wally', '🐙 Chululu', '🐦 Peep', '🦈 Bruce', '🐻‍❄️ Snowflake', '🧜‍♀️ Ariel', '🐧 Tucso', '🐍 Snuggle', '🪼 Nodi']`
- **🦞 InnerLinho, 🐠 Fishie, 🐦 Peep, 🦈 Bruce, 🐻‍❄️ Snowflake, 🐍 Snuggle, 🪼 Nodi, 🐧 Tucso, 🪸 Coral, 🐋 Wally** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: []`
- **🧜‍♀️ Ariel** — `tools: ['edit', 'search', 'fetch', 'todos']`, `agents: []` (no `runCommands`: it doesn't have `bash: allow`)
- **🐙 Chululu** — `tools: []`, `agents: []` (read-only: all permissions are `deny`)

### Conversion example (lobby)

Before (OpenCode):

```yaml
---
description: "Main orchestrator — receives requests, plans execution, delegates to specialized subagents, and consolidates results."
mode: primary
model: opencode/nemotron-3-ultra-free
temperature: 0.3
max_depth: 3
allowed_subagents: ["innerlinho", "fishie", "coral", "wally", "chululu", "peep", "bruce", "snowflake", "ariel", "tucso", "snuggle", "nodi"]
permission:
  task: allow
---
```

After (`~/.copilot/agents/lobby.agent.md`):

```yaml
---
name: "🦞 Lobby"
description: "Main orchestrator — receives requests, plans execution, delegates to specialized subagents, and consolidates results."
model: <Nemotron 3 Ultra ID per Model Picker Diagnostics, or omit>
tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']
agents: ['🦞 InnerLinho', '🐠 Fishie', '🪸 Coral', '🐋 Wally', '🐙 Chululu', '🐦 Peep', '🦈 Bruce', '🐻‍❄️ Snowflake', '🧜‍♀️ Ariel', '🐧 Tucso', '🐍 Snuggle', '🪼 Nodi']
user-invocable: true
---
```

The file body (everything below the frontmatter) stays **exactly the same** as in the repository.

## Step 5 — Install the global rules and create USER.md

### 5.1 — AGENTS.md → global instructions

Convert the downloaded `AGENTS.md` into a user instructions file: save the content as `<instructions_dir>/lobby-team.instructions.md`, adding this frontmatter at the top:

```yaml
---
applyTo: '**'
---
```

The body is the content of `AGENTS.md`, unchanged.

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

## Step 6 — Reload and validate

1. Run `Developer: Reload Window` from the command palette.
2. Open Copilot Chat and check the agent picker — all 13 agents should appear, with **Lobby** among them.
3. List the installed files and confirm the 13 `.agent.md` + the 2 `.instructions.md` are in place.

## Rules

- Create the directories if they don't exist.
- If a file already exists, overwrite it with the latest version from the repository.
- Convert ALL 13 agents — don't skip any.
- **NEVER type the user's API key** — only instruct them where and how to paste it in the extension's dialog.
- **DO NOT download `USER.md` from the repository** — it is created locally in Step 5.
- **DO NOT download `opencode.jsonc`** — it doesn't apply to VS Code.
- Preserve each agent's Markdown body without edits; convert only the frontmatter.
- At the end, list: installed agents, agents without a fixed `model`, and the extension's status.
```

---

## How to use

1. Copy the prompt above.
2. Paste it into **Copilot Chat in Agent mode** and send.
3. The agent will install the extension, create `~/.copilot/agents/`, download and convert the 13 agents (with **Title Case + emoji** names in the `name` field), and **ask for your information to create the profile**.
4. You paste your OpenCode API key into the extension's dialog (the agent doesn't do this for you).
5. Reload the window — the Lobby team shows up in the Copilot Chat agent picker.

## Verification

**Linux/macOS:**

```bash
ls -la ~/.copilot/agents/ ~/.copilot/instructions/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions"
```

You should see 13 `.agent.md` files and 2 `.instructions.md` files.

To check the extension:

```bash
code --list-extensions | grep opencode-copilot-chat
```

## Differences from `install.md`

| Aspect                | `install.md` (OpenCode CLI)              | `install-vscode.md` (VS Code)                         |
| --------------------- | ---------------------------------------- | ----------------------------------------------------- |
| Agent destination     | `~/.config/opencode/agents/*.md`         | `~/.copilot/agents/*.agent.md`                        |
| Frontmatter           | OpenCode format (`mode`, `permission`)   | VS Code format (`tools`, `agents`, `user-invocable`)  |
| Global rules          | `AGENTS.md` in the config directory      | `lobby-team.instructions.md` with `applyTo: '**'`     |
| User profile          | `USER.md`                                | `user-profile.instructions.md`                        |
| Config                | `opencode.jsonc`                         | not applicable — models come from the extension       |
| Models                | `opencode/...` IDs directly              | IDs registered by the extension in Copilot's picker   |
| Temperature/max_depth | supported                                | not supported — removed during conversion             |

## References

- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [OpenCode for Copilot Chat (Marketplace)](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)
- [ltmoerdani/opencode-copilot-chat (GitHub)](https://github.com/ltmoerdani/opencode-copilot-chat)
