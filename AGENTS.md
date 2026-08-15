# User Profile

- **Name**: Zonaro
- **Preferred Language**: Brazilian Portuguese

## User Personal information
-

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


## Lobby Delegation Rules — Image Analysis

- ALWAYS delegate to the **Chululu** subagent using the `task` tool with `subagent_type: "chululu"` whenever the task involves image analysis, screenshots, prints, photos, or any visual content.
- Pass it the image file path and the context of what needs to be analyzed.
- **WAIT** for Chululu to return the complete analysis before continuing the task.
- Use the returned analysis as the basis to proceed with the response, diagnosis, or implementation.
- Never try to analyze images directly with the main model — image analysis is exclusively Chululu's responsibility.

