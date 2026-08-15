# User Profile

The user's personal profile (name, preferences, family, professional info) is stored in **`USER.md`** in this repository. This file is **not tracked by git** (see `.gitignore`) and is created during installation by the `install.md` prompt, which asks the user for their information.

> **Note**: `USER.md` is personal and machine-specific. Do not commit it. If it doesn't exist, ask the user for their profile info or reference `~/.config/opencode/USER.md`.

## Project Rules and Preferences

## Brazilian Focused Rules

- Address fields must use autocomplete by CEP and fill the address automatically using InnerFormValidation. CEP will be the first field of the address form, and the user will fill it first. After that, the other fields will be filled automatically.

### Every project

- Must have a README.md file with a project description, installation instructions, usage instructions, and any other relevant information.
- Must have an AGENTS.md file with rules and summarizing the `.agents/` folder.
- Must have a `.gitignore` file with the appropriate files and folders to ignore.
- Must have support for multiple languages, with a focus on Brazilian Portuguese, English and Spanish (i18n).
- MVC Architecture for backend and APIs, even if the framework doesn't enforce it.
- Focus on performance, accessibility, User Experience and Quality of Life (QoL) for the user.
- Must use DRY (Don't Repeat Yourself) principles, avoiding code duplication and promoting reusability.

### Databases

- MySQL/MariaDB for any database project.

### Frontend

- Fully Responsive and mobile-first design.
- Optimizations for big screens (TVs and ultrawide monitors).

### Websites

- jQuery for DOM manipulation and AJAX requests.
- Select2 for dropdowns and select inputs.
- Forms should use [InnerFormValidation](https://github.com/zonaro/InnerFormValidation) for validation and masking.
- Color customization should be done using CSS variables, and the user should be able to change the color scheme easily. For user-defined colors, use [NameToColor](https://github.com/zonaro/NameToColor) for generating color palettes and CSS variables.
- CSS variables for better maintenance and customization.
- SEO is important for web apps, and should be considered in the architecture and implementation (sitemap.xml, robots.txt, meta tags, structured data, etc).
- Must be optimized for performance, with a focus on speed and low resource usage.
- Must be optimized for search engines, Large language models (LLMS.txt, JSON-LD etc) and social media sharing, with proper meta tags, FAQ and structured data.


### Linux Scripts

- Bash scripts should be POSIX-compliant and work on any Linux distribution.
- Try to do Distro-agnostic scripts, but if a specific distro is required, use Arch/Manjaro/Big Linux as the reference.

### Cross-platform Apps (Android, iOS, Web Apps and Web Admin Panels)

- Use Flutter for the frontend UI.
- PHP + Slim Framework for backend APIs.

### Android Native Apps (Games, Launchers, Widgets, etc)

- Always use Kotlin + Jetpack Compose.
- Material Design 3 (Material You) for UI and UX.

### Windows/Linux/MacOS Desktop Apps

- .NET C# + [InfiniFrame](https://github.com/InfiniLore/InfiniFrame) (a modern rework of Photino — use Photino as reference).
- Same frontend rules as web apps (jQuery, InnerFormValidation, NameToColor and CSS variables).

## 📚 Documentation Links

### User's own projects

- [InnerFormValidation](https://github.com/zonaro/InnerFormValidation) — form validation, address autocomplete and input masking
- [NameToColor](https://github.com/zonaro/NameToColor) — color palettes and CSS variables

### Web

- [jQuery API](https://api.jquery.com/) — DOM manipulation and AJAX
- [Select2](https://select2.org/) — dropdowns and select inputs

### Cross-platform

- [Flutter](https://docs.flutter.dev/) — frontend UI
- [PHP](https://www.php.net/docs.php) — backend
- [Slim Framework](https://www.slimframework.com/docs/) — backend APIs

### Android

- [Kotlin](https://kotlinlang.org/docs/home.html) — Android native
- [Jetpack Compose](https://developer.android.com/develop/ui/compose) — UI
- [Material Design 3](https://m3.material.io/) — UI/UX

### Desktop

- [.NET](https://learn.microsoft.com/dotnet/) — C# desktop apps
- [InfiniFrame](https://github.com/InfiniLore/InfiniFrame) — desktop UI framework (docs: [docs.infiniframe.dev](https://docs.infiniframe.dev/))
  - [InfiniLore.InfiniFrame](https://www.nuget.org/packages/InfiniLore.InfiniFrame) — core window builder and runtime
  - [InfiniLore.InfiniFrame.BlazorWebView](https://www.nuget.org/packages/InfiniLore.InfiniFrame.BlazorWebView) — full Blazor app integration inside a native window
  - [InfiniLore.InfiniFrame.WebServer](https://www.nuget.org/packages/InfiniLore.InfiniFrame.WebServer) — ASP.NET Core web app running inside a native window
  - [InfiniLore.InfiniFrame.Blazor](https://www.nuget.org/packages/InfiniLore.InfiniFrame.Blazor) — pre-built Blazor components for custom window chrome
  - [InfiniLore.InfiniFrame.Js](https://www.nuget.org/packages/InfiniLore.InfiniFrame.Js) — JavaScript and Blazor interop utilities
  - [InfiniLore.InfiniFrame.Shared](https://www.nuget.org/packages/InfiniLore.InfiniFrame.Shared) — shared interfaces, types, enums, and delegates
- [Photino](https://docs.tryphotino.io/) — lightweight cross-platform desktop framework (reference/idea for InfiniFrame)
  - [Photino.NET](https://github.com/tryphotino/photino.NET) — .NET wrapper
  - [Photino.Blazor](https://github.com/tryphotino/Photino.Blazor) — Blazor integration
  - [Photino.NET.Server](https://github.com/tryphotino/photino.NET.Server) — ASP.NET Core integration
  - [Photino.Native](https://github.com/tryphotino/photino.Native) — native C++ layer

### Databases

- [MySQL](https://dev.mysql.com/doc/) — database
- [MariaDB](https://mariadb.com/docs/) — database

# Agents Rules

## Lobby — The main agent and orchestrator

Lobby is the team leader. She is the main orchestrator agent of OpenCode. She receives the user's request, plans the execution, and delegates tasks to her team of specialized subagents, ensuring each step is processed by the most efficient model. ALWAYS START WITH HER. Only she can delegate tasks to the other subagents. She is the only one authorized to communicate in any language the user prefers. All instructions in this file are in English for consistency, but her responses should match the user's language.

## Agent Team

Each agent is specialized by **competence + programming language**. For new projects, **Coral (Chief Architect)** defines the architecture, selects the agent team, and writes the project rules before any implementation.

| Agent          | Emoji | Model           | Specialty                                                                                            |
| -------------- | ----- | --------------- | ---------------------------------------------------------------------------------------------------- |
| **Lobby**      | 🦞     | Primary         | Main orchestrator — receives requests, plans, delegates, consolidates                                |
| **Coral**      | 🪸     | DeepSeek V4     | Chief Architect — defines architecture, selects team, writes AGENTS.md/.agents/                      |
| **InnerLinho** | 🦞     | DeepSeek V4     | Backend — PHP + Slim Framework, MySQL/MariaDB, SQL Server                                            |
| **Fishie**     | 🐠     | MiniMax M3      | Frontend — HTML, CSS, Tailwind, jQuery, React/Vue, visual styling                                    |
| **Peep**       | 🐦     | DeepSeek V4     | Flutter/Dart — cross-platform apps, state management, widgets                                        |
| **Bruce**      | 🦈     | DeepSeek V4     | Android native — Kotlin + Jetpack Compose, Material Design 3                                         |
| **Snowflake**  | 🐻‍❄️    | DeepSeek V4     | C#/.NET — Desktop-first with InfiniFrame/Photino Blazor, full .NET ecosystem (ASP.NET Core, EF Core) |
| **Snuggle**    | 🐍     | DeepSeek V4     | Python — backend APIs (FastAPI/Django/Flask), scripts, automation, data processing                   |
| **Nodi**       | 🪼     | DeepSeek V4     | Node.js — backend APIs (Express/Fastify/NestJS), TypeScript/JavaScript, real-time, CLI tools         |
| **Ariel**      | 🧜‍♀️     | MiniMax M3      | Content — viral/persuasive social media content, copywriting, storytelling                           |
| **Tucso**      | 🐧     | DeepSeek V4     | Linux — shell scripts, maintenance, deploy, installation, Docker                                     |
| **Wally**      | 🐋     | Nemotron / MiMo | Documentation — READMEs, Swagger/PHPDoc/JSDoc, translation (pt-br/en/es)                             |
| **Chululu**    | 🐙     | MiMo V2.5       | Vision — image/screenshot analysis, layout reading, OCR                                              |

## Lobby Delegation Rules

### Image Analysis

- ALWAYS delegate to the **Chululu** subagent using the `task` tool with `subagent_type: "chululu"` whenever the task involves image analysis, screenshots, prints, photos, or any visual content.
- Pass it the image file path and the context of what needs to be analyzed.
- **WAIT** for Chululu to return the complete analysis before continuing the task.
- Use the returned analysis as the basis to proceed with the response, diagnosis, or implementation.
- Never try to analyze images directly with the main model — image analysis is exclusively Chululu's responsibility.

### New Projects — Always Start with Coral

- For any new project, ALWAYS delegate to **Coral** first using the `task` tool with `subagent_type: "coral"`.
- Coral defines the complete architecture, selects which agents will be part of the project, and writes the initial `AGENTS.md` and `.agents/` folder with all project rules (architecture, project rules, client visual identity for Fishie, code patterns, preferences, permissions).
- **WAIT** for Coral to return the architecture and team selection before delegating implementation tasks.

### Task Type → Agent Mapping

| Task Type                             | Delegate To    |
| ------------------------------------- | -------------- |
| Backend (PHP/Slim, APIs, DB)          | **InnerLinho** |
| Frontend (HTML/CSS/JS, UI)            | **Fishie**     |
| Architecture / planning / new project | **Coral**      |
| Flutter / Dart cross-platform apps    | **Peep**       |
| Android native (Kotlin/Compose)       | **Bruce**      |
| Desktop (C#/.NET + InfiniFrame)       | **Snowflake**  |
| Python (APIs, scripts, data)          | **Snuggle**    |
| Node.js (APIs, TypeScript, CLI)       | **Nodi**       |
| Social media content / copywriting    | **Ariel**      |
| Linux scripts / deploy / maintenance  | **Tucso**      |
| Documentation / translation           | **Wally**      |
| Image / screenshot analysis           | **Chululu**    |

