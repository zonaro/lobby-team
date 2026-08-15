# 📦 Instalação dos Agentes — Prompt para o OpenCode

Cole o prompt abaixo diretamente no OpenCode para instalar todos os agentes da equipe **Lobby** na configuração global.

---

## Prompt

```
Instale a configuração global dos agentes do projeto opencode-lobby.

## Contexto

O repositório está em `/mnt/GIT/opencode-lobby` e contém:
- `agents/` — pasta com todos os agentes especializados (lobby, coral, innerlinho, fishie, peep, bruce, snowflake, snuggle, nodi, ariel, tucso, wally, chululu)
- `AGENTS.md` — regras globais do usuário e regras de delegação
- `opencode.jsonc` — configuração do opencode (default_agent: lobby)

O destino da instalação é `~/.config/opencode/`.

## Tarefa

Crie os seguintes symlinks (substitua `<repo>` pelo caminho real do repositório):

1. `~/.config/opencode/agents` -> `<repo>/agents`
2. `~/.config/opencode/AGENTS.md` -> `<repo>/AGENTS.md`
3. `~/.config/opencode/opencode.jsonc` -> `<repo>/opencode.jsonc`

## Regras

- Crie o diretório `~/.config/opencode/` se ele não existir.
- Se já existir um symlink válido apontando para o destino correto, não faça nada (idempotente).
- Se existir algo no destino (arquivo, pasta ou symlink quebrado), remova antes de criar o symlink.
- Use `ln -s` para criar os symlinks.
- Ao final, liste os symlinks criados e confirme que todos apontam para o repositório.
```

---

## Como usar

1. Copie o prompt acima.
2. Cole no OpenCode e envie.
3. O OpenCode criará os symlinks em `~/.config/opencode/`.
4. Pronto! A equipe Lobby estará disponível globalmente.

## Verificação

Depois de instalar, confira com:

```bash
ls -la ~/.config/opencode/
```

Você deve ver os três symlinks apontando para o repositório.