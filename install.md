# 📦 Instalação dos Agentes — Prompt Universal para Qualquer Agente de IA

Cole o prompt abaixo em qualquer agente de IA (OpenCode, Claude, Codex, Hermes, OpenClaw, GitHub Copilot, etc.) para instalar a equipe **Lobby** na configuração global, baixando os arquivos diretamente do repositório no GitHub.

---

## Prompt

```
Instale a configuração global dos agentes do projeto opencode-lobby baixando os arquivos do GitHub.

## Contexto

O repositório é `zonaro/opencode-lobby` (branch `main`). Os arquivos estão disponíveis via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/opencode-lobby/main/`
- `agents/` — pasta com todos os agentes especializados (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu)
- `AGENTS.md` — regras globais do usuário e regras de delegação
- `opencode.jsonc` — configuração do opencode (default_agent: lobby)

## Passo 1 — Identifique o sistema operacional

Detecte o SO em que você está rodando:
- **Linux** → use `~/.config/...` (ou `$XDG_CONFIG_HOME` se definido)
- **macOS** → use `~/.config/...` ou `~/Library/Application Support/...` conforme o agente
- **Windows** → use `%USERPROFILE%\.config\...` ou `%APPDATA%\...` conforme o agente

## Passo 2 — Identifique o agente e o diretório de configuração

Determine qual agente você é e use o diretório de configuração correto:

| Agente                 | Linux                                                   | macOS                                           | Windows                           |
| ---------------------- | ------------------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| **OpenCode**           | `~/.config/opencode/`                                   | `~/.config/opencode/`                           | `%USERPROFILE%\.config\opencode\` |
| **Claude Code**        | `~/.claude/`                                            | `~/.claude/`                                    | `%USERPROFILE%\.claude\`          |
| **OpenAI Codex**       | `~/.codex/`                                             | `~/.codex/`                                     | `%USERPROFILE%\.codex\`           |
| **OpenClaw**           | `~/.openclaw/`                                          | `~/.openclaw/`                                  | `%USERPROFILE%\.openclaw\`        |
| **GitHub Copilot CLI** | `~/.config/github-copilot/`                             | `~/Library/Application Support/github-copilot/` | `%APPDATA%\GitHub Copilot\`       |
| **Hermes**             | `~/.hermes/`                                            | `~/.hermes/`                                    | `%USERPROFILE%\.hermes\`          |
| **Outro agente**       | Use o diretório de configuração padrão do seu framework |                                                 |                                   |

Se você não tiver certeza, use o diretório de configuração padrão do seu próprio framework.

## Passo 3 — Baixe os arquivos

Baixe cada arquivo do repositório e coloque no diretório de configuração identificado no Passo 2:

1. `AGENTS.md` → `<config_dir>/AGENTS.md`
2. `opencode.jsonc` → `<config_dir>/opencode.jsonc`
3. Todos os arquivos de `agents/` → `<config_dir>/agents/`:
   - `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`

Use a ferramenta de download apropriada para o SO:
- **Linux/macOS**: `curl -fsSL <url> -o <destino>` ou `wget -q <url> -O <destino>`
- **Windows**: `Invoke-WebRequest -Uri <url> -OutFile <destino>` (PowerShell)

Crie os diretórios necessários antes de baixar (ex.: `mkdir -p <config_dir>/agents`).

## Regras

- Crie o diretório de configuração se ele não existir.
- Se um arquivo já existir, sobrescreva com a versão mais recente do repositório.
- Baixe TODOS os arquivos da pasta `agents/` — não pule nenhum.
- Ao final, liste os arquivos instalados e confirme que todos foram baixados com sucesso.
```

---

## Como usar

1. Copie o prompt acima.
2. Cole em qualquer agente de IA (OpenCode, Claude, Codex, Hermes, OpenClaw, GitHub Copilot, etc.) e envie.
3. O agente identificará o SO, baixará os arquivos do GitHub e os colocará no diretório de configuração correto.
4. Pronto! A equipe Lobby estará disponível globalmente.

## Verificação

Depois de instalar, confira com:

```bash
ls -la ~/.config/opencode/agents/
```

Você deve ver todos os arquivos de agentes baixados do repositório.