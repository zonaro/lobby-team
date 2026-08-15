# 📦 Instalação dos Agentes — Prompt para o OpenCode

Cole o prompt abaixo no **OpenCode** para instalar a equipe **Lobby** na configuração global, baixando os arquivos diretamente do repositório no GitHub.

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

Detecte o SO em que você está rodando e determine o diretório de configuração do OpenCode:

| SO          | Diretório de configuração do OpenCode                                                         |
| ----------- | --------------------------------------------------------------------------------------------- |
| **Linux**   | `~/.config/opencode/` (ou `$XDG_CONFIG_HOME/opencode/` se `XDG_CONFIG_HOME` estiver definido) |
| **macOS**   | `~/.config/opencode/`                                                                         |
| **Windows** | `%USERPROFILE%\.config\opencode\`                                                             |

## Passo 2 — Baixe os arquivos

Baixe cada arquivo do repositório e coloque no diretório de configuração do OpenCode identificado no Passo 1:

1. `AGENTS.md` → `<config_dir>/AGENTS.md`
2. `opencode.jsonc` → `<config_dir>/opencode.jsonc`
3. Todos os arquivos de `agents/` → `<config_dir>/agents/`:
   - `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`

Use a ferramenta de download apropriada para o SO:
- **Linux/macOS**: `curl -fsSL <url> -o <destino>` ou `wget -q <url> -O <destino>`
- **Windows**: `Invoke-WebRequest -Uri <url> -OutFile <destino>` (PowerShell)

Crie os diretórios necessários antes de baixar:
- **Linux/macOS**: `mkdir -p <config_dir>/agents`
- **Windows**: `New-Item -ItemType Directory -Force -Path <config_dir>\agents` (PowerShell)

## Regras

- Crie o diretório de configuração se ele não existir.
- Se um arquivo já existir, sobrescreva com a versão mais recente do repositório.
- Baixe TODOS os arquivos da pasta `agents/` — não pule nenhum.
- Ao final, liste os arquivos instalados e confirme que todos foram baixados com sucesso.
```

---

## Como usar

1. Copie o prompt acima.
2. Cole no OpenCode e envie.
3. O OpenCode identificará o SO, baixará os arquivos do GitHub e os colocará no diretório de configuração correto.
4. Pronto! A equipe Lobby estará disponível globalmente.

## Verificação

Depois de instalar, confira com o comando apropriado para o seu SO:

**Linux/macOS:**

```bash
ls -la ~/.config/opencode/agents/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.config\opencode\agents"
```

Você deve ver todos os arquivos de agentes baixados do repositório.