<p align="center">
  <img src="lobby_team.png" alt="Lobby Team" width="100%">
</p>

# opencode-lobby 🦞

Global configuration for the **Lobby** agent for [opencode](https://opencode.ai) — the main orchestrator agent, with a caring personality and a team of specialized subagents.

## 📦 Contents

| Item                   | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `agents/lobby.md`      | Main orchestrator agent — receives requests, plans, and delegates to subagents                        |
| `agents/coral.md`      | Chief Architect (DeepSeek V4) — defines architecture, selects team, writes AGENTS.md/.agents/         |
| `agents/innerlinho.md` | Backend specialist (DeepSeek V4) — PHP + Slim Framework, MySQL/MariaDB, SQL Server                    |
| `agents/fishie.md`     | Frontend specialist (MiniMax M3) — HTML, CSS, Tailwind, jQuery, React/Vue components                  |
| `agents/peep.md`       | Flutter specialist (DeepSeek V4) — cross-platform apps, state management, widgets                     |
| `agents/bruce.md`      | Android specialist (DeepSeek V4) — Kotlin + Jetpack Compose, Material Design 3                        |
| `agents/snowflake.md`  | C#/.NET specialist (DeepSeek V4) — Desktop-first with InfiniFrame/Photino Blazor, full .NET ecosystem |
| `agents/snuggle.md`    | Python specialist (DeepSeek V4) — backend APIs, scripts, automation, data processing                  |
| `agents/nodi.md`       | Node.js specialist (DeepSeek V4) — backend APIs, TypeScript/JavaScript, real-time, CLI                |
| `agents/ariel.md`      | Content specialist (MiniMax M3) — viral/persuasive social media content, copywriting                  |
| `agents/tucso.md`      | Linux specialist (DeepSeek V4) — shell scripts, maintenance, deploy, installation, Docker             |
| `agents/wally.md`      | Documentation specialist (Nemotron / MiMo) — READMEs, Swagger/PHPDoc/JSDoc                            |
| `agents/chululu.md`    | Vision specialist (MiMo V2.5) — image and screenshot analysis, OCR                                    |
| `AGENTS.md`            | Global user rules and agent delegation rules                                                          |
| `opencode.jsonc`       | opencode configuration (default agent: `lobby`)                                                       |
| `install.md`           | Prompt to paste into OpenCode to install all agents (creates the symlinks in `~/.config/opencode/`)   |

## 🚀 Installation

The files are maintained in this repository and linked into the global opencode configuration via symlinks.

```bash
# 1. Clone the repository
git clone https://github.com/zonaro/opencode-lobby.git /mnt/GIT/opencode-lobby
```

# 2. Open `install.md` and paste the prompt into OpenCode

Open the file `install.md` in this repository, copy the prompt, and paste it directly into OpenCode. OpenCode will create the symlinks in `~/.config/opencode/` automatically.

Alternatively, you can create the symlinks manually:

```bash
mkdir -p ~/.config/opencode
ln -s /mnt/GIT/opencode-lobby/agents ~/.config/opencode/agents
ln -s /mnt/GIT/opencode-lobby/AGENTS.md ~/.config/opencode/AGENTS.md
ln -s /mnt/GIT/opencode-lobby/opencode.jsonc ~/.config/opencode/opencode.jsonc
```

The installation is **idempotent** — you can run it as many times as you want; it only ensures the symlinks exist and point to the right place.

## 🔗 Created symlinks

```
~/.config/opencode/agents        -> <repo>/agents
~/.config/opencode/AGENTS.md     -> <repo>/AGENTS.md
~/.config/opencode/opencode.jsonc -> <repo>/opencode.jsonc
```

## 🦞 About Lobby

**Lobby** is the main orchestrator agent of OpenCode. She receives the user's request, plans the execution, and delegates tasks to her team of specialized subagents, ensuring each step is processed by the most efficient model.

Her team:

| Agent             | Model           | Specialty                                                                                             |
| ----------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| � **@Coral**      | DeepSeek V4     | **Chief Architect** — defines project architecture, selects the agent team, writes AGENTS.md/.agents/ |
| 🦞 **@InnerLinho** | DeepSeek V4     | Backend, PHP + Slim Framework, APIs, business rules, MySQL/MariaDB, SQL Server                        |
| 🐠 **@Fishie**     | MiniMax M3      | Frontend, HTML, CSS, Tailwind, jQuery, React/Vue/Web components, layouts, visual styling              |
| 🐦 **@Peep**       | DeepSeek V4     | Flutter/Dart cross-platform apps, state management (Provider/Riverpod/Bloc), widgets, animations      |
| 🦈 **@Bruce**      | DeepSeek V4     | Android native (Kotlin + Jetpack Compose), Material Design 3, Gradle builds                           |
| 🐻‍❄️ **@Snowflake** | DeepSeek V4     | C#/.NET — Desktop-first with InfiniFrame/Photino Blazor, full .NET ecosystem (ASP.NET Core, EF Core)  |
| 🐍 **@Snuggle**    | DeepSeek V4     | Python — backend APIs (FastAPI/Django/Flask), scripts, automation, data processing                    |
| 🪼 **@Nodi**       | DeepSeek V4     | Node.js — backend APIs (Express/Fastify/NestJS), TypeScript/JavaScript, real-time, CLI tools          |
| 🧜‍♀️ **@Ariel**      | MiniMax M3      | Viral/persuasive content for social media, copywriting, storytelling, marketing texts                 |
| 🐧 **@Tucso**      | DeepSeek V4     | Linux shell scripts, maintenance, deploy, installation, automation, Docker                            |
| 🐋 **@Wally**      | Nemotron / MiMo | READMEs, code documentation (Swagger/PHPDoc/JSDoc), translation, technical texts                      |
| 🐙 **@Chululu**    | MiMo V2.5       | Visual analysis of images, screenshots, layout reading, OCR                                           |

## 📝 License

MIT