# 🧩 Instalação dos Agentes no VS Code — Prompt para o Copilot Chat

Instala a equipe **Lobby** como **custom agents do VS Code** (pasta de agentes do usuário) e configura a extensão **[OpenCode for Copilot Chat](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)**, que expõe os modelos do OpenCode dentro do Copilot Chat via BYOK.

Cole o prompt abaixo no **Copilot Chat em modo Agent** (ou em qualquer agente com acesso a terminal e escrita de arquivos).

---

## Prompt

```
Instale a equipe de agentes do projeto opencode-lobby como custom agents do VS Code, baixando os arquivos do GitHub e convertendo o frontmatter do formato OpenCode para o formato .agent.md do VS Code. Instale também a extensão que fornece os modelos do OpenCode ao Copilot Chat.

## Contexto

O repositório é `zonaro/opencode-lobby` (branch `main`). Os arquivos estão disponíveis via raw.githubusercontent.com:

- Base: `https://raw.githubusercontent.com/zonaro/opencode-lobby/main/`
- `agents/` — pasta com todos os agentes especializados (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu)
- `AGENTS.md` — regras globais do usuário e regras de delegação
- `opencode.jsonc` — configuração do opencode (NÃO é usado no VS Code, ignore este arquivo)

> **Nota**: `USER.md` (perfil pessoal do usuário) NÃO está no repositório — ele é criado localmente no Passo 5 com as informações fornecidas pelo usuário.

## Passo 1 — Instale e configure a extensão

A extensão `ltmoerdani.opencode-copilot-chat` ("OpenCode for Copilot Chat") registra os modelos do OpenCode no seletor de modelos do Copilot Chat via BYOK. Sem ela, os agentes até funcionam, mas rodando nos modelos padrão do Copilot em vez dos modelos do OpenCode.

1. Verifique a versão do VS Code — a extensão exige **1.125 ou superior**. Se for menor, avise o usuário para atualizar antes de continuar.
2. Instale a extensão pelo terminal:
   - `code --install-extension ltmoerdani.opencode-copilot-chat`
   - (VS Code Insiders: `code-insiders --install-extension ltmoerdani.opencode-copilot-chat`)
   - Se o comando `code` não estiver no PATH, instale pela UI: Extensions (`Ctrl+Shift+X`) → busque por `opencode-copilot-chat` → Install.
3. **Peça ao usuário para configurar a API key manualmente** (não tente digitar chaves por ele):
   - Obtenha a chave em `https://opencode.ai`
   - Abra o Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I`)
   - Clique no seletor de modelos → **Add Models…** → escolha **OpenCode Go** (assinatura) ou **OpenCode Zen** (grátis + pay-as-you-go)
   - Cole a API key quando solicitado e marque os modelos desejados
4. Recarregue a janela (`Developer: Reload Window`) — a extensão auto-configura settings necessárias na primeira ativação.
5. Se algum modelo não aparecer no seletor do chat, oriente: em **Chat: Manage Language Models**, passe o mouse na linha do modelo e clique no ícone de olho para torná-lo visível.

Settings úteis da extensão (opcional, ajuste só se o usuário pedir):
- `opencodego.enabled` / `opencodezen.enabled` — liga/desliga cada provider
- `opencodego.freeOnly` — mostra apenas modelos gratuitos do Zen (padrão: `true`)
- `opencodego.thinking.*` — esforço de raciocínio por família (deepseek, glm, kimi, minimax, mimo, qwen)

## Passo 2 — Identifique o diretório de custom agents do usuário

O VS Code lê custom agents no nível de usuário em `~/.copilot/agents` (mesmo caminho nos três SOs, usando o home do usuário):

| SO          | Diretório de custom agents do usuário |
| ----------- | ------------------------------------- |
| **Linux**   | `~/.copilot/agents/`                  |
| **macOS**   | `~/.copilot/agents/`                  |
| **Windows** | `%USERPROFILE%\.copilot\agents\`      |

E as instruções globais em:

| SO          | Diretório de instructions do usuário       |
| ----------- | ------------------------------------------ |
| **Linux**   | `~/.copilot/instructions/`                 |
| **macOS**   | `~/.copilot/instructions/`                 |
| **Windows** | `%USERPROFILE%\.copilot\instructions\`     |

Crie os diretórios se não existirem:
- **Linux/macOS**: `mkdir -p ~/.copilot/agents ~/.copilot/instructions`
- **Windows (PowerShell)**: `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions"`

> **Fallback para VS Code mais antigo**: se após a instalação os agentes não aparecerem no seletor, a versão do VS Code pode ainda usar o formato legado `.chatmode.md` na pasta de prompts do perfil. Nesse caso, salve os mesmos arquivos com extensão `.chatmode.md` em:
> - Linux: `~/.config/Code/User/prompts/`
> - macOS: `~/Library/Application Support/Code/User/prompts/`
> - Windows: `%APPDATA%\Code\User\prompts\`
>
> (Para o Insiders, troque `Code` por `Code - Insiders`.) Alternativamente, adicione a pasta na setting `chat.agentFilesLocations`.

## Passo 3 — Baixe os arquivos do repositório

Baixe para uma pasta temporária:

1. `AGENTS.md`
2. Todos os arquivos de `agents/`: `lobby.md`, `coral.md`, `innerlinho.md`, `fishie.md`, `peep.md`, `bruce.md`, `snowflake.md`, `snuggle.md`, `nodi.md`, `ariel.md`, `tucso.md`, `wally.md`, `chululu.md`

Ferramenta de download por SO:
- **Linux/macOS**: `curl -fsSL <url> -o <destino>` ou `wget -q <url> -O <destino>`
- **Windows (PowerShell)**: `Invoke-WebRequest -Uri <url> -OutFile <destino>`

**NÃO baixe `opencode.jsonc`** — ele é específico do OpenCode CLI e não tem efeito no VS Code.

## Passo 4 — Converta cada agente para o formato .agent.md

Os arquivos do repositório usam frontmatter do **OpenCode**. O VS Code usa frontmatter de **custom agent**. Para cada agente, mantenha o corpo do Markdown **intacto** (todas as instruções, personalidade e regras) e reescreva **apenas o frontmatter**.

Salve cada um como `<nome>.agent.md` no diretório do Passo 2. Ex.: `lobby.md` → `~/.copilot/agents/lobby.agent.md`.

### Mapeamento de campos

| OpenCode                     | VS Code (`.agent.md`)                                          |
| ---------------------------- | -------------------------------------------------------------- |
| `description`                | `description` (copie literalmente)                             |
| *(nome do arquivo)*          | `name` (ex.: `lobby`, `coral`) — defina explicitamente         |
| `mode: primary`              | `user-invocable: true`                                         |
| `mode: subagent`             | `user-invocable: true` + `disable-model-invocation: false`     |
| `allowed_subagents: [...]`   | `agents: [...]` (mesma lista; `[]` quando vazia)               |
| `model: opencode/<x>`        | `model:` — ver regra de modelos abaixo                         |
| `permission:`                | `tools:` — ver tabela de permissões abaixo                     |
| `temperature`                | **sem equivalente** — remova                                   |
| `max_depth`                  | **sem equivalente** — remova                                   |

### Regra de modelos

Os IDs `opencode/...` do repositório não são os IDs registrados pela extensão no VS Code. Faça assim:

1. Rode o comando **`OpenCode: Model Picker Diagnostics`** na paleta de comandos para listar os modelos registrados.
2. Mapeie cada modelo do repositório para o ID correspondente que aparecer na lista:
   - `opencode/nemotron-3-ultra-free` → Nemotron 3 Ultra (lobby, coral)
   - `opencode/deepseek-v4-flash-free` → DeepSeek V4 Flash (innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, tucso)
   - `opencode/nemotron-3.5-lightning-free` → Nemotron 3.5 Lightning (wally)
   - `opencode/laguna-s-2.1-free` → Laguna S 2.1 (ariel)
   - `opencode/mimo-v2.5-free` → MiMo V2.5 (chululu — precisa de modelo com visão)
3. **Se um modelo não estiver disponível na conta do usuário, omita o campo `model`** — o agente usará o modelo selecionado no seletor do chat. Não invente IDs.
4. Informe ao usuário, ao final, quais agentes ficaram sem `model` fixo.

### Tabela de permissões → tools

Regra geral, derivada do bloco `permission:` de cada arquivo:

| `permission:` do OpenCode | tool do VS Code  |
| ------------------------- | ---------------- |
| `edit: allow`             | `edit`           |
| `bash: allow`             | `runCommands`    |
| `webfetch: allow`         | `fetch`          |
| `websearch: allow`        | `search`         |
| `todowrite: allow`        | `todos`          |
| `task: allow`             | *(delegação — expressa via `agents:`, não via `tools:`)* |
| qualquer `deny`           | omita a tool     |

Sempre inclua `search` (busca no codebase) mesmo quando o agente não tem `websearch`, exceto no chululu.

Resultado esperado por agente:

- **lobby** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: ['innerlinho', 'fishie', 'coral', 'wally', 'chululu', 'peep', 'bruce', 'snowflake', 'ariel', 'tucso', 'snuggle', 'nodi']`
- **innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, tucso, coral, wally** — `tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']`, `agents: []`
- **ariel** — `tools: ['edit', 'search', 'fetch', 'todos']`, `agents: []` (sem `runCommands`: não tem `bash: allow`)
- **chululu** — `tools: []`, `agents: []` (read-only: todas as permissões são `deny`)

### Exemplo de conversão (lobby)

Antes (OpenCode):

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

Depois (`~/.copilot/agents/lobby.agent.md`):

```yaml
---
name: lobby
description: "Main orchestrator — receives requests, plans execution, delegates to specialized subagents, and consolidates results."
model: <ID do Nemotron 3 Ultra conforme o Model Picker Diagnostics, ou omita>
tools: ['edit', 'search', 'runCommands', 'fetch', 'todos']
agents: ['innerlinho', 'fishie', 'coral', 'wally', 'chululu', 'peep', 'bruce', 'snowflake', 'ariel', 'tucso', 'snuggle', 'nodi']
user-invocable: true
---
```

O corpo do arquivo (tudo abaixo do frontmatter) permanece **exatamente igual** ao do repositório.

## Passo 5 — Instale as regras globais e crie o USER.md

### 5.1 — AGENTS.md → instruções globais

Converta o `AGENTS.md` baixado em um arquivo de instruções de usuário: salve o conteúdo como `<instructions_dir>/lobby-team.instructions.md`, adicionando este frontmatter no topo:

```yaml
---
applyTo: '**'
---
```

O corpo é o conteúdo do `AGENTS.md`, sem alterações.

> Observação: o VS Code também lê um `AGENTS.md` na **raiz do workspace** automaticamente. O arquivo `.instructions.md` acima é a versão **global** (vale em todos os projetos).

### 5.2 — USER.md → perfil pessoal

O perfil pessoal é **pessoal e não é commitado** — por isso é criado localmente durante a instalação.

Pergunte ao usuário (em pt-br, a menos que ele prefira outro idioma):

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

Crie `<instructions_dir>/user-profile.instructions.md` com este formato:

```markdown
---
applyTo: '**'
---

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

## Passo 6 — Recarregue e valide

1. Rode `Developer: Reload Window` na paleta de comandos.
2. Abra o Copilot Chat e confira o seletor de agentes — os 13 agentes devem aparecer, com **Lobby** entre eles.
3. Liste os arquivos instalados e confirme que os 13 `.agent.md` + os 2 `.instructions.md` estão no lugar.

## Regras

- Crie os diretórios se não existirem.
- Se um arquivo já existir, sobrescreva com a versão mais recente do repositório.
- Converta TODOS os 13 agentes — não pule nenhum.
- **NUNCA digite a API key do usuário** — apenas instrua onde e como ele deve colar no diálogo da extensão.
- **NÃO baixe `USER.md` do repositório** — ele é criado localmente no Passo 5.
- **NÃO baixe `opencode.jsonc`** — não se aplica ao VS Code.
- Preserve o corpo em Markdown de cada agente sem edições; converta somente o frontmatter.
- Ao final, liste: agentes instalados, agentes sem `model` fixo, e o status da extensão.
```

---

## Como usar

1. Copie o prompt acima.
2. Cole no **Copilot Chat em modo Agent** e envie.
3. O agente instalará a extensão, criará `~/.copilot/agents/`, baixará e converterá os 13 agentes, e **perguntará suas informações para criar o perfil**.
4. Você cola sua API key do OpenCode no diálogo da extensão (o agente não faz isso por você).
5. Recarregue a janela — a equipe Lobby aparece no seletor de agentes do Copilot Chat.

## Verificação

**Linux/macOS:**

```bash
ls -la ~/.copilot/agents/ ~/.copilot/instructions/
```

**Windows (PowerShell):**

```powershell
Get-ChildItem "$env:USERPROFILE\.copilot\agents", "$env:USERPROFILE\.copilot\instructions"
```

Você deve ver 13 arquivos `.agent.md` e 2 arquivos `.instructions.md`.

Para conferir a extensão:

```bash
code --list-extensions | grep opencode-copilot-chat
```

## Diferenças em relação ao `install.md`

| Aspecto              | `install.md` (OpenCode CLI)              | `install-vscode.md` (VS Code)                        |
| -------------------- | ---------------------------------------- | ---------------------------------------------------- |
| Destino dos agentes  | `~/.config/opencode/agents/*.md`         | `~/.copilot/agents/*.agent.md`                       |
| Frontmatter          | Formato OpenCode (`mode`, `permission`)  | Formato VS Code (`tools`, `agents`, `user-invocable`) |
| Regras globais       | `AGENTS.md` no diretório de config       | `lobby-team.instructions.md` com `applyTo: '**'`     |
| Perfil do usuário    | `USER.md`                                | `user-profile.instructions.md`                       |
| Config               | `opencode.jsonc`                         | não se aplica — modelos vêm da extensão              |
| Modelos              | IDs `opencode/...` direto                | IDs registrados pela extensão no seletor do Copilot  |
| Temperatura/max_depth| suportados                               | não suportados — removidos na conversão              |

## Referências

- [Custom agents in VS Code](https://code.visualstudio.com/docs/agent-customization/custom-agents)
- [Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [OpenCode for Copilot Chat (Marketplace)](https://marketplace.visualstudio.com/items?itemName=ltmoerdani.opencode-copilot-chat)
- [ltmoerdani/opencode-copilot-chat (GitHub)](https://github.com/ltmoerdani/opencode-copilot-chat)
