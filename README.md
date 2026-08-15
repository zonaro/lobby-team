<p align="center">
  <img src="lobby_team.png" alt="Lobby Team" width="100%">
</p>

# opencode-lobby 🦞

Global configuration for the **Lobby** agent for [opencode](https://opencode.ai) — the main orchestrator agent, with a caring personality and a team of specialized subagents.

## 📦 Contents

| Item                   | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------ |
| `agents/lobby.md`      | Main orchestrator agent — receives requests, plans, and delegates to subagents |
| `agents/innerlinho.md` | Backend specialist (DeepSeek V4) — APIs, business rules, database, refactoring |
| `agents/fishie.md`     | Frontend specialist (MiniMax M3) — HTML, CSS, Tailwind, React/Vue components   |
| `agents/coral.md`      | Architecture specialist (DeepSeek V4) — diagrams, structure, task division     |
| `agents/wally.md`      | Documentation specialist (Nemotron / MiMo) — READMEs, Swagger/PHPDoc/JSDoc     |
| `agents/chululu.md`    | Vision specialist (MiMo V2.5) — image and screenshot analysis, OCR             |
| `AGENTS.md`            | Global user rules and image analysis delegation                                |
| `opencode.jsonc`       | opencode configuration (default agent: `lobby`)                                |
| `install.sh`           | Installation script that creates the symlinks in `~/.config/opencode/`         |

## 🚀 Installation

The files are maintained in this repository and linked into the global opencode configuration via symlinks.

```bash
# 1. Clone the repository
git clone https://github.com/zonaro/opencode-lobby.git /mnt/GIT/opencode-lobby

# 2. Run the installer (creates the symlinks in ~/.config/opencode/)
/mnt/GIT/opencode-lobby/install.sh

# Optional: see what would be done without changing anything
/mnt/GIT/opencode-lobby/install.sh --dry
```

The script is **idempotent** — you can run it as many times as you want; it only ensures the symlinks exist and point to the right place.

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
| 🦞 **@InnerLinho** | DeepSeek V4     | Backend, APIs, business rules, database, complex logic, refactoring                                   |
| 🐠 **@Fishie**     | MiniMax M3      | Frontend, HTML, CSS, Tailwind, React/Vue/Web components, layouts, visual styling                      |
| 🪸 **@Coral**      | DeepSeek V4     | Software architecture, diagrams, directory structure, division of complex tasks into actionable steps |
| 🐋 **@Wally**      | Nemotron / MiMo | READMEs, code documentation (Swagger/PHPDoc/JSDoc), translation, technical texts                      |
| 🐙 **@Chululu**    | MiMo V2.5       | Visual analysis of images, screenshots, layout reading, OCR                                           |

## 📝 License

MIT