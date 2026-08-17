<p align="center">
  <img src="lobby_team.png" alt="Lobby Team" width="100%">
</p>

# lobby-team 👩🏽‍🎤

Global configuration for the **Lobby** agent for [opencode](https://opencode.ai) — the main orchestrator agent, with a caring personality and a team of specialized subagents.

## 📦 Contents

| Item                          | Description                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `opencode/agents/*.md`        | 16 specialized agents in OpenCode format (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu, dolfi, puffy, calamari) |
| `opencode/lobby-team.instructions.md` | Global user rules and agent delegation rules (installed as `AGENTS.md`)                                              |
| `opencode/opencode.jsonc`     | opencode configuration (default agent: `lobby`)                                                                                      |
| `opencode/install.md`         | Prompt to paste into OpenCode to install all agents                                                                                  |
| `vscode/agents/*.agent.md`    | The same 16 agents, ready-made in VS Code's `.agent.md` format (no conversion needed)                                                |
| `vscode/instructions/lobby-team.instructions.md` | Global rules in VS Code's instructions format (`applyTo: '**'`)                                        |
| `vscode/install.md`           | Prompt to paste into Copilot Chat to install the agents in VS Code                                                                   |
| `skills/*/SKILL.md`           | Optional skills shared by both platforms (image generators, story illustrator)                                                        |

## 🚀 Installation

The Lobby team can be installed in two ways:

1.  **OpenCode CLI**: For command-line use with the OpenCode CLI.
    See the detailed instructions in [`opencode/install.md`](opencode/install.md).

2.  **VS Code Custom Agents**: For use as custom agents within VS Code Copilot Chat.
    See the detailed instructions in [`vscode/install.md`](vscode/install.md).

## 👩🏽‍🎤 About Lobby

**Lobby** is the main orchestrator agent of OpenCode. She receives the user's request, plans the execution, and delegates tasks to her team of specialized subagents, ensuring each step is processed by the most efficient model.

Her team:

| Agent             | Model                  | Specialty                                                                                                        |
| ----------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 🪸 **@Coral**      | Nemotron 3 Ultra       | **Chief Architect** — defines project architecture, selects the agent team, writes AGENTS.md/.agents/            |
| 🦞 **@InnerLinho** | DeepSeek V4 Flash      | Backend, PHP + Slim Framework, APIs, business rules, MySQL/MariaDB                                               |
| 🐠 **@Fishie**     | DeepSeek V4 Flash      | Frontend, HTML, CSS, Tailwind, jQuery, React/Vue/Web components, layouts, visual styling                         |
| 🐦 **@Peep**       | DeepSeek V4 Flash      | Flutter/Dart cross-platform apps, state management (Provider/Riverpod/Bloc), widgets, animations                 |
| 🦈 **@Bruce**      | DeepSeek V4 Flash      | Android native (Kotlin + Jetpack Compose), Material Design 3, Gradle builds                                      |
| 🐻‍❄️ **@Snowflake** | DeepSeek V4 Flash      | C#/.NET — Desktop-first with InfiniFrame/Photino Blazor, full .NET ecosystem (ASP.NET Core, EF Core, SQL Server) |
| 🐍 **@Snuggle**    | DeepSeek V4 Flash      | Python — backend APIs (FastAPI/Django/Flask), scripts, automation, data processing                               |
| 🪼 **@Nodi**       | DeepSeek V4 Flash      | Node.js — backend APIs (Express/Fastify/NestJS), TypeScript/JavaScript, real-time, CLI tools                     |
| 🧜‍♀️ **@Ariel**      | Laguna S 2.1           | Viral/persuasive content for social media, copywriting, storytelling, marketing texts                            |
| 🐧 **@Tucso**      | DeepSeek V4 Flash      | Linux shell scripts, maintenance, deploy, installation, automation, Docker                                       |
| 🐋 **@Wally**      | Nemotron 3.5 Lightning | READMEs, code documentation (Swagger/PHPDoc/JSDoc), translation, technical texts                                 |
| 🐙 **@Chululu**    | MiMo V2.5              | Visual analysis of images, screenshots, layout reading, OCR                                                      |
| 🐬 **@Dolfi**      | DeepSeek V4 Flash      | SVG icon design — clean, legible, accessible icons, kept consistent with the project's icon set                  |
| 🐡 **@Puffy**      | Nemotron 3.5 Lightning | Documentation research — up-to-date docs, recent error fixes, APIs, releases, via web search                     |
| 🦑 **@Calamari**   | DeepSeek V4 Flash      | Fast fact-checking — package/version/URL/API validity, plus scientific/health/climate claim verification         |

🐡 **@Puffy** and 🦑 **@Calamari** are callable by every other specialist subagent too, not only by Lobby — any of them can delegate a research or fact-check to these two mid-task. 🐬 **@Dolfi** is additionally callable by 🐠 **@Fishie** directly during UI creation, for any SVG icon the UI needs. 🐙 **@Chululu** is the only agent that stays fully isolated (vision-only, no delegation). 🪸 **@Coral** can additionally **consult** any language specialist, plus 🐋 **@Wally**, 🧜‍♀️ **@Ariel** and 🐬 **@Dolfi**, with narrow technical questions while drafting an architecture plan — advisory only, never implementation.

## 🧠 Models — OpenCode Zen free tier

The whole team runs on [OpenCode Zen](https://opencode.ai/docs/zen/) **free** models. Exact IDs as of August 2026:

| Model ID                               | Context | Max output | Vision | Used by                                                |
| -------------------------------------- | ------- | ---------- | ------ | ------------------------------------------------------ |
| `opencode/nemotron-3-ultra-free`       | 1M      | 128K       | ❌      | Lobby, Coral — need the biggest context                |
| `opencode/deepseek-v4-flash-free`      | 200K    | 128K       | ❌      | All code specialists, Calamari                         |
| `opencode/nemotron-3.5-lightning-free` | 262K    | 262K       | ❌      | Wally, Puffy — largest output budget of any free model |
| `opencode/laguna-s-2.1-free`           | 256K    | 32K        | ❌      | Ariel — general prose, not code-tuned                  |
| `opencode/mimo-v2.5-free`              | 200K    | 32K        | ✅      | Chululu — **the only free model with vision**          |

Unused free models, available as drop-in fallbacks if you hit rate limits:
`opencode/big-pickle` (200K/32K) and `opencode/hy3-free` (190K/64K).

> ⚠️ `minimax-m3` and `deepseek-v4-flash` (without the `-free` suffix) are **paid** models. Do not drop the suffix unless you mean to be billed.

### 🐡🦑 Puffy & Calamari — OpenCode Zen free models

**Puffy** and **Calamari** run on the same **OpenCode Zen** free models as the rest of the team — no extra provider or API key needed. They use the standard `websearch`/`webfetch` tools for real-time, sourced web results.

| Model ID                               | Used by  | Why                                                       |
| -------------------------------------- | -------- | --------------------------------------------------------- |
| `opencode/nemotron-3.5-lightning-free` | Puffy    | Largest output budget — long, structured research reports |
| `opencode/deepseek-v4-flash-free`      | Calamari | Fast/cheap workhorse — single-fact verification only      |

## 📝 License

MIT