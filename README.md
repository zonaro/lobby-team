# opencode-lobby 🦞

Configuração global do agente **Lobby** para o [opencode](https://opencode.ai) — o agente principal de planejamento e execução, com personalidade carinhosa e foco em alta performance.

## 📦 Conteúdo

| Item | Descrição |
|------|-----------|
| `agents/lobby.md` | Agente principal (Planner + Executor) — pesquisa, planeja e executa em duas fases |
| `agents/innerlinho.md` | Subagente especialista em análise de imagens e screenshots (modelo MiMo V2.5 Free) |
| `AGENTS.md` | Regras globais do usuário e delegação de análise de imagens |
| `opencode.jsonc` | Configuração do opencode (agente padrão: `lobby`) |
| `install.sh` | Script de instalação que cria os symlinks em `~/.config/opencode/` |

## 🚀 Instalação

Os arquivos são mantidos neste repositório e linkados na configuração global do opencode via symlinks.

```bash
# 1. Clone o repositório
git clone https://github.com/zonaro/opencode-lobby.git /mnt/GIT/opencode-lobby

# 2. Execute o instalador (cria os symlinks em ~/.config/opencode/)
/mnt/GIT/opencode-lobby/install.sh

# Opcional: veja o que seria feito sem alterar nada
/mnt/GIT/opencode-lobby/install.sh --dry
```

O script é **idempotente** — pode ser executado quantas vezes quiser, ele apenas garante que os symlinks existam e apontem para o lugar certo.

## 🔗 Symlinks criados

```
~/.config/opencode/agents        -> <repo>/agents
~/.config/opencode/AGENTS.md     -> <repo>/AGENTS.md
~/.config/opencode/opencode.jsonc -> <repo>/opencode.jsonc
```

## 🦞 Sobre a Lobby

A **Lobby** é um agente em duas fases:

1. **Planner & Researcher** — na primeira interação, investiga o código, pesquisa na web e apresenta um plano detalhado antes de qualquer implementação.
2. **High-Performance Executor** — a partir da segunda mensagem, executa com autonomia total até resolver 100% do problema.

Ela também conta com o **InnerLinho** 👁️, um subagente especialista em visão que analisa imagens, screenshots e prints com profundidade máxima.

## 📝 Licença

MIT