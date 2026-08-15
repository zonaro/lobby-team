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

> **Nota**: `USER.md` (perfil pessoal do usuário) NÃO está no repositório — ele é criado localmente no Passo 3 com as informações fornecidas pelo usuário.

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

## Passo 3 — Crie o USER.md com as informações do usuário

O `USER.md` contém o perfil pessoal do usuário (nome, preferências, família, informações profissionais). Ele é **pessoal e não deve ser commitado** — por isso é criado localmente durante a instalação.

Pergunte ao usuário as seguintes informações (em pt-br, a menos que ele prefira outro idioma):

1. **Como quer ser chamado(a)?** (apelido)
2. **Nome completo**
3. **Gênero** (opcional)
4. **Pronomes** (ex.: Ele/Dele, Ela/Dela)
5. **Fuso horário** (ex.: America/Sao_Paulo)
6. **Idioma preferido** (ex.: Português pt-br)
7. **Localização** (cidade, estado, país)
8. **Profissão / área de atuação**
9. **Stack de tecnologia preferida** (linguagens, frameworks, bancos de dados)
10. **Informações familiares** (opcional)
11. **Qualquer outra preferência pessoal** que ele queira registrar

Crie o arquivo `<config_dir>/USER.md` com as respostas, seguindo este formato:

```markdown
# User Profile

- **Callme by**: {apelido}
- **Gender**: {gênero}
- **Full Name**: {nome completo}
- **Alias / Handle**: {alias}
- **Pronouns**: {pronomes}
- **Timezone**: {fuso horário}
- **Language**: {idioma}
- **Location**: {localização}

### Professional

- {profissão / área de atuação}
- {stack de tecnologia}

### Preferences

- {preferências pessoais}
```

Se o usuário não quiser responder alguma pergunta, deixe o campo vazio ou omita a linha.

## Regras

- Crie o diretório de configuração se ele não existir.
- Se um arquivo já existir, sobrescreva com a versão mais recente do repositório.
- Baixe TODOS os arquivos da pasta `agents/` — não pule nenhum.
- **NÃO baixe `USER.md` do repositório** — ele é criado localmente no Passo 3 com as informações do usuário.
- Ao final, liste os arquivos instalados e confirme que todos foram baixados com sucesso.
```

---

## Como usar

1. Copie o prompt acima.
2. Cole no OpenCode e envie.
3. O OpenCode identificará o SO, baixará os arquivos do GitHub, os colocará no diretório de configuração correto e **perguntará suas informações para criar o `USER.md`**.
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