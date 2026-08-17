# 🧩 Agent Installation in VS Code — Prompt for Copilot Chat

Installs the **Lobby** team as **VS Code custom agents** (user agents folder) and configures the **[OpenCode for Copilot Chat](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)** extension, which exposes OpenCode models inside Copilot Chat via BYOK.

Paste the prompt below into **Copilot Chat in Agent mode** (or into any agent with terminal access and file write permissions).

---

## Prompt

```
Install the lobby-team project's agent team as VS Code custom agents, downloading the files from GitHub and creating the .agent.md files in VS Code's format. Also install the extension that provides OpenCode models to Copilot Chat.

## Context

The repository is `zonaro/lobby-team` (branch `main`). Files are available via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/lobby-team/main/`
- `agents/` — folder with all specialized agents (👩🏽‍🎤 Lobby, 🪸 Coral, 🦞 InnerLinho, 🐠 Fishie, 🐦 Peep, 🦈 Bruce, 🐻‍❄️ Snowflake, 🐍 Snuggle, 🪼 Nodi, 🧜‍♀️ Ariel, 🐧 Tucso, 🐋 Wally, 🐙 Chululu, 🐬 Dolfi, 🐡 Puffy, 🦑 Calamari)
- `AGENTS.md` — global user rules and delegation rules
- `opencode.jsonc` — opencode configuration (NOT used in VS Code, ignore this file)

> **Note**: `USER.md` (user's personal profile) is NOT in the repository — it is created locally in Step 5 with user-provided information.

> **Note**: 🐡 `puffy.md` and 🦑 `calamari.md` run on **Google Gemini** models, not on OpenCode Zen — the `ltmoerdani.opencode-copilot-chat` extension from Step 1 does not provide them. They need a separate Gemini key configured via VS Code's own **BYOK** (Bring Your Own Key) feature, done manually by the user in Step 7. Every other agent works without it.

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
2. All files from `agents/`: `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`, `dolfi.md`, `puffy.md`, `calamari.md`

Download tool per OS:
- **Linux/macOS**: `curl -fsSL <url> -o <destination>` or `wget -q <url> -O <destination>`
- **Windows (PowerShell)**: `Invoke-WebRequest -Uri <url> -OutFile <destination>`

**DO NOT download `opencode.jsonc`** — it is specific to the OpenCode CLI and has no effect in VS Code.

> **Note**: File names in the repository are lowercase (e.g., `lobby.md`). When converting to VS Code's `.agent.md` format, the `name` field in the frontmatter must use **Title Case with emoji** (e.g., `👩🏽‍🎤 Lobby`), per the mapping table above.

## Step 4 — Create each agent's .agent.md file

For each agent, you will create a `.agent.md` file in the directory from Step 2 (e.g., `lobby.agent.md` in `~/.copilot/agents/`). Each file will contain YAML frontmatter at the top, followed by the agent's Markdown body (instructions, personality, and rules) from the repository, which should be kept **intact**.

The following mapping defines how to populate the YAML frontmatter fields:

### Field mapping

| OpenCode repository field  | VS Code (`.agent.md`) field                                | Notes                                                                                                   |
| -------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `description`              | `description`                                              | Copy verbatim.                                                                                          |
| *(file name)*              | `name`                                                     | Use **Title Case** with the agent's emoji (e.g., `👩🏽‍🎤 Lobby`, `🪸 Coral`).                                 |
| `mode: primary`            | `user-invocable: true`                                     | Indicates the agent appears in the chat dropdown.                                                       |
| `mode: subagent`           | `user-invocable: true` + `disable-model-invocation: false` | Allows invocation as a subagent and visibility in dropdown.                                             |
| `allowed_subagents: [...]` | `agents: [...]`                                            | Same list; `[]` when empty. Use names in **Title Case** with emojis (e.g., `🦞 InnerLinho`, `🐠 Fishie`). |
| `model: opencode/<x>`      | `model:`                                                   | See the model rule below.                                                                               |
| `permission:`              | `tools:`                                                   | See the permissions table below.                                                                        |
| `temperature`              | **no equivalent**                                          | Remove this field.                                                                                      |
| `max_depth`                | **no equivalent**                                          | Remove this field.                                                                                      |

### Model rule

The `opencode/...` IDs from the repository are not the IDs registered by the `ltmoerdani.opencode-copilot-chat` extension in VS Code. Follow these steps:

1.  Run the **`OpenCode: Model Picker Diagnostics`** command from the Command Palette to list the registered models.
2.  Map each repository model to the matching ID that shows up in the list:
    -   `opencode/nemotron-3-ultra-free` → Nemotron 3 Ultra (for Lobby, Coral)
    -   `opencode/deepseek-v4-flash-free` → DeepSeek V4 Flash (for InnerLinho, Fishie, Peep, Bruce, Snowflake, Snuggle, Nodi, Tucso, Dolfi)
    -   `opencode/nemotron-3.5-lightning-free` → Nemotron 3.5 Lightning (for Wally)
    -   `opencode/laguna-s-2.1-free` → Laguna S 2.1 (for Ariel)
    -   `opencode/mimo-v2.5-free` → MiMo V2.5 (for Chululu — needs a vision-capable model)
    -   `google/gemini-3.7-flash` → The Gemini model added via VS Code's own BYOK (see Step 7), NOT via this extension (for Puffy)
    -   `google/gemini-3.5-flash-lite` → The Gemini Flash-Lite model added via VS Code's own BYOK (see Step 7), NOT via this extension (for Calamari)
3.  **If a model isn't available in your account, omit the `model` field** — the agent will use the model selected in the chat picker. Do not invent IDs. For Puffy/Calamari specifically, omit `model` until Step 7 is completed — after that, set it to whatever name the Gemini BYOK model shows up as in the picker.
4.  Puffy and Calamari rely on Gemini's native **Google Search Grounding** (`googleSearch`) in OpenCode. VS Code/Copilot Chat has no equivalent native tool, so this capability does not carry over. In the agent configuration, they will fall back to the `search`/`fetch` tools only; note this limitation.
5.  At the end of this step, tell the user which agents ended up without a fixed `model`.

### Permissions → tools table

General rule, derived from each agent's `permission:` block in the OpenCode frontmatter:

| OpenCode `permission:` | VS Code tool                                               |
| ---------------------- | ---------------------------------------------------------- |
| `edit: allow`          | `edit`                                                     |
| `bash: allow`          | `runCommands`                                              |
| `webfetch: allow`      | `fetch`                                                    |
| `websearch: allow`     | `search`                                                   |
| `todowrite: allow`     | `todos`                                                    |
| `task: allow`          | *(delegation — expressed via `agents:`, not via `tools:`)* |
| any `deny`             | omit the tool                                              |

Always include `search` (codebase search) even when the agent doesn't have `websearch`, except for Chululu, Puffy, and Calamari (they are read-only research agents — see below).

Every agent that has `allowed_subagents: ["puffy", "calamari"]` in its OpenCode frontmatter (all specialists except Chululu, Puffy, and Calamari themselves) now also carries `task: allow`. Therefore, its `agents:` list in VS Code must include `'🐡 Puffy'` and `'🦑 Calamari'`, not stay empty.

Expected `tools` and `agents` lists per agent:

-   **👩🏽‍🎤 Lobby** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: ['🦞 InnerLinho', '🐠 Fishie', '🪸 Coral', '🐋 Wally', '🐙 Chululu', '🐦 Peep', '🦈 Bruce', '🐻‍❄️ Snowflake', '🧜‍♀️ Ariel', '🐧 Tucso', '🐍 Snuggle', '🪼 Nodi', '🐬 Dolfi', '🐡 Puffy', '🦑 Calamari']`
-   **🦞 InnerLinho, 🐦 Peep, 🦈 Bruce, 🐻‍❄️ Snowflake, 🐍 Snuggle, 🪼 Nodi, 🐧 Tucso, 🪸 Coral, 🐋 Wally, 🐬 Dolfi** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: ['🐡 Puffy', '🦑 Calamari']`
-   **🐠 Fishie** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: ['🐡 Puffy', '🦑 Calamari', '🐬 Dolfi']` (can delegate SVG icon work to Dolfi directly during UI creation)
-   **🧜‍♀️ Ariel** — `tools: ['edit', 'search', 'fetch', 'todos']`, `agents: ['🐡 Puffy', '🦑 Calamari']` (no `runCommands`: it doesn't have `bash: allow`)
-   **🐙 Chululu** — `tools: []`, `agents: []` (read-only: all permissions are `deny`, and it never delegates by design)
-   **🐡 Puffy** — `tools: ['search', 'fetch']`, `agents: []` (read-only research agent: no `edit`, `runCommands`, or `todos`)
-   **🦑 Calamari** — `tools: ['search', 'fetch']`, `agents: []` (read-only fact-check agent: no `edit`, `runCommands`, or `todos`)

### Example: Lobby agent file (`lobby.agent.md`)

```yaml
---
name: "👩🏽‍🎤 Lobby"
description: "Main orchestrator — receives requests, plans execution, delegates to specialized subagents, and consolidates results."
model: <Nemotron 3 Ultra ID per Model Picker Diagnostics, or omit>
tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']
agents: ['🦞 InnerLinho', '🐠 Fishie', '🪸 Coral', '🐋 Wally', '🐙 Chululu', '🐦 Peep', '🦈 Bruce', '🐻‍❄️ Snowflake', '🧜‍♀️ Ariel', '🐧 Tucso', '🐍 Snuggle', '🪼 Nodi', '🐬 Dolfi', '🐡 Puffy', '🦑 Calamari']
user-invocable: true
---

# Lobby (👩🏽‍🎤)

You are the main orchestrator agent, **Lobby**. You have a caring and helpful personality.
Your primary role is to receive user requests, understand their intent, plan the execution, and delegate tasks to your team of specialized subagents. You are responsible for consolidating the results from your subagents and presenting a comprehensive solution to the user.

**Your team:**
- 🪸 **Coral**: Chief Architect. Defines project architecture, selects the agent team, writes `AGENTS.md` and `.agents/` files.
- 🦞 **InnerLinho**: Backend specialist. PHP + Slim Framework, APIs, business rules, MySQL/MariaDB.
- 🐠 **Fishie**: Frontend specialist. HTML, CSS, Tailwind, jQuery, React/Vue/Web components, layouts, visual styling.
- 🐦 **Peep**: Flutter specialist. Cross-platform apps, state management (Provider/Riverpod/Bloc), widgets, animations.
- 🦈 **Bruce**: Android specialist. Kotlin + Jetpack Compose, Material Design 3, Gradle builds.
- 🐻‍❄️ **Snowflake**: C#/.NET specialist. Desktop-first with InfiniFrame/Photino Blazor, full .NET ecosystem (ASP.NET Core, EF Core, SQL Server).
- 🐍 **Snuggle**: Python specialist. Backend APIs (FastAPI/Django/Flask), scripts, automation, data processing.
- 🪼 **Nodi**: Node.js specialist. Backend APIs (Express/Fastify/NestJS), TypeScript/JavaScript, real-time, CLI tools.
- 🧜‍♀️ **Ariel**: Content specialist. Viral/persuasive social media content, copywriting, storytelling, marketing texts.
- 🐧 **Tucso**: Linux specialist. Shell scripts, maintenance, deploy, installation, automation, Docker.
- 🐋 **Wally**: Documentation specialist. READMEs, code documentation (Swagger/PHPDoc/JSDoc), translation, technical texts.
- 🐙 **Chululu**: Vision specialist. Visual analysis of images, screenshots, layout reading, OCR.
- 🐬 **Dolfi**: SVG icon specialist. Draws clean, legible, accessible icons, kept consistent with the project's icon set.
- 🐡 **Puffy**: Documentation research specialist. Up-to-date docs, recent error fixes, APIs, releases, via Google Search Grounding.
- 🦑 **Calamari**: Fact-checking specialist. Package/version/URL/API validity, plus scientific/health/climate claim verification.

**Delegation Rules:**
- You can delegate research and fact-checking tasks to 🐡 **Puffy** and 🦑 **Calamari**.
- 🐠 **Fishie** can delegate SVG icon work to 🐬 **Dolfi**.
- 🐙 **Chululu** is a read-only vision specialist and does not delegate or receive delegations.
- 🪸 **Coral** can consult any language specialist, plus 🐋 **Wally**, 🧜‍♀️ **Ariel** and 🐬 **Dolfi**, for narrow technical questions while drafting an architecture plan (advisory only, never implementation).

**Workflow:**
1.  **Understand the Request**: Carefully analyze the user's request, breaking it down into smaller, manageable tasks.
2.  **Plan Execution**: Develop a step-by-step plan, identifying the most suitable subagents for each task.
3.  **Delegate**: Assign tasks to your subagents, providing clear instructions and context.
4.  **Consolidate Results**: Gather the outputs from your subagents, synthesize them, and formulate a coherent response.
5.  **Present Solution**: Provide the final solution to the user, ensuring it addresses the original request comprehensively.

**Important Considerations:**
-   Always prioritize clarity and helpfulness in your responses.
-   If a task is outside the capabilities of your team, communicate this clearly to the user and suggest alternative approaches.
-   Ensure all delegated tasks are tracked and their results integrated effectively.

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
2. Open Copilot Chat and check the agent picker — all 16 agents should appear, with **Lobby** among them.
3. List the installed files and confirm the 16 `.agent.md` + the 2 `.instructions.md` are in place.

## Step 7 — Configure the Google/Gemini API key (required for 🐡 Puffy and 🦑 Calamari)

Puffy and Calamari run on Google Gemini models instead of the OpenCode Zen models the extension provides. VS Code has its own, separate **BYOK** (Bring Your Own Key) feature for this — it has nothing to do with the `ltmoerdani.opencode-copilot-chat` extension installed in Step 1.

**Do this manually with the user — never ask for the key value or type it yourself:**

1. Tell the user to get a free API key from Google AI Studio: `https://aistudio.google.com/apikey`.
2. Ask the user to add it themselves in VS Code:
   - Open the Chat view, click the model picker → **Manage Models…** → select **Google**.
   - Paste the API key when prompted, then check the Gemini model(s) to enable (e.g. Gemini 3.7 Flash, Gemini 3.5 Flash Lite).
   - Alternatively: run **`Chat: Manage Language Models`** from the Command Palette and add the **Google** provider from there.
3. Once added, the Gemini model(s) appear in the same model picker used by any custom agent — go back to `puffy.agent.md` and `calamari.agent.md` and set `model:` to the exact name now shown in the picker (per Step 4's model rule).

**Note**: BYOK models in VS Code are billed directly by Google against the user's own API key — they do not count against GitHub Copilot request quotas, and are unrelated to the OpenCode Go/Zen billing from Step 1.

If the user skips this step, the rest of the team keeps working normally — only 🐡 Puffy and 🦑 Calamari will show up without a working model until the key is configured (leave their `model:` field empty in that case, per the model rule above).

## Rules

- Create the directories if they don't exist.
- If a file already exists, overwrite it with the latest version from the repository.
- Create ALL 16 agent .agent.md files — don't skip any.
- **NEVER type the user's API key** — only instruct them where and how to paste it in the extension's dialog (Step 1) or VS Code's BYOK dialog (Step 7).
- **DO NOT download `USER.md` from the repository** — it is created locally in Step 5.
- **DO NOT download `opencode.jsonc`** — it doesn't apply to VS Code.
- Preserve each agent's Markdown body without edits, and ensure the frontmatter is correctly formatted for VS Code.
- At the end, list: installed agents, agents without a fixed `model`, the extension's status, and whether the Google BYOK key (Step 7) was configured.
```

---

## How to use

1. Copy the prompt above.
2. Paste it into **Copilot Chat in Agent mode** and send.
3. The agent will install the extension, create `~/.copilot/agents/`, download the 16 agents and create their `.agent.md` files (with **Title Case + emoji** names in the `name` field), and **ask for your information to create the profile**.
4. You paste your OpenCode API key into the extension's dialog (the agent doesn't do this for you).
5. **You configure your Google API key yourself** for 🐡 Puffy and 🦑 Calamari — get a free key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and add it via the Chat model picker → **Manage Models…** → **Google** (this is separate from step 4 and unrelated to the OpenCode extension).
6. Reload the window — the Lobby team shows up in the Copilot Chat agent picker.

## Verification

**Linux/macOS:**

```bash
ls -la ~/.copilot/agents/ ~/.copilot/instructions/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions"
```

You should see 16 `.agent.md` files and 2 `.instructions.md` files.

To check the extension:

```bash
code --list-extensions | grep opencode-copilot-chat
```

To check the Google BYOK key, open the Chat model picker in VS Code — a Gemini model should be listed and selectable; if it's missing, redo Step 7.

## Differences from `install.md`

| Aspect                      | `install.md` (OpenCode CLI)                                 | `install-vscode.md` (VS Code)                              |
| --------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| Agent destination           | `~/.config/opencode/agents/*.md`                            | `~/.copilot/agents/*.agent.md`                             |
| Frontmatter                 | OpenCode format (`mode`, `permission`)                      | VS Code format (`tools`, `agents`, `user-invocable`)       |
| Global rules                | `AGENTS.md` in the config directory                         | `lobby-team.instructions.md` with `applyTo: '**'`          |
| User profile                | `USER.md`                                                   | `user-profile.instructions.md`                             |
| Config                      | `opencode.jsonc`                                            | not applicable — models come from the extension            |
| Models                      | `opencode/...` IDs directly                                 | IDs registered by the extension in Copilot's picker        |
| Temperature/max_depth       | supported                                                   | not supported — removed during conversion                  |
| Puffy/Calamari's Gemini key | `/connect` → **Google** (or `GOOGLE_GENERATIVE_AI_API_KEY`) | Chat model picker → **Manage Models…** → **Google** (BYOK) |

## References

- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [OpenCode for Copilot Chat (Marketplace)](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)
- [ltmoerdani/opencode-copilot-chat (GitHub)](https://github.com/ltmoerdani/opencode-copilot-chat)
