# 🎨 Prompt para atualizar a `lobby_team.png`

> **Objetivo**: partir da imagem **atual** (`lobby_team.png`, 1537×1023, 3:2 paisagem) e produzir uma nova versão que:
>
> 1. **Traga os personagens da prateleira para o chão**, junto do resto do time (o pássaro do Flutter = **Peep**, e o urso do C# = **Snowflake**);
> 2. **Adicione os 7 membros novos** que ainda não aparecem (**Bruce, Snuggle, Nodi, Ariel, Tucso**, além de dar telinha para **InnerLinho**);
> 3. **Preserve** a pessoa, o cenário, o estilo e as pelúcias que já existem.

---

## 📸 O que a imagem atual realmente é (leia antes de prompar)

Não é ilustração — é uma **fotografia realista de estúdio caseiro**:

- **Centro**: mulher real, jovem, pele morena, cabelo ondulado longo **lilás/roxo**, brincos de coração rosa, pulseiras de miçangas pastel, anéis, sorriso largo. Veste **hoodie turquesa** com estampa de **coração rosa + carinha de gato branca**. Segura no colo uma **pelúcia de lagosta laranja de óculos redondos pretos**. Ela é a **Lobby**.
- **Primeiro plano**: pelúcias grandes (30–50 cm) sobre **pedestais quadrados pretos foscos**, em arco ao redor dela — **Chululu** (polvo rosa de bolinhas), **Fishie** (peixe mandarim azul/laranja/amarelo), **Coral** (coral vermelho e laranja), **Wally** (baleia azul).
- **Atrás de cada pelúcia**: um **monitor/tablet pequeno com moldura colorida** (rosa, branca, preta) exibindo, em fundo escuro, `@Nome (Modelo)`, uma linha menor de skills e uma **arte pixel/vetorial do personagem**.
- **Fundo**: estante de madeira clara com livros de programação, canecas de lápis, monitores exibindo código em tema escuro, parede azul-petróleo à esquerda com quadro botânico, cortina à direita, **cordão de luzinhas LED azuis/verdes** atravessando as prateleiras.
- **Prateleira de cima**: pelúcias de **mascotes de tecnologia** — copo do **JS**, pássaro do **Flutter**, elefante roxo do **PHP**, urso polar de suéter verde **C#**, câmera rosa do **Instagram**, kiwi roxo, maçã cinza da **Apple**, robô verde do **Android**.
- **Técnica**: luz quente de interior, profundidade de campo rasa (fundo desfocado), textura de feltro/tricô visível nas pelúcias, olhos bordados brilhantes.

**Personagens que faltam na foto atual:** Peep e Snowflake (só existem como pelúcia na prateleira de cima), Bruce, Snuggle, Nodi, Ariel e Tucso (não existem). InnerLinho é a lagosta no colo, mas está sem telinha.

---

## 🛠 Como gerar

Use um modelo que aceite **imagem de referência + instrução de edição** (image-to-image), não um text-to-image puro:

| Ferramenta                              | Serve para                                     |
| --------------------------------------- | ---------------------------------------------- |
| **Nano Banana Pro** (Gemini 3 Pro Image) | Melhor opção: edição fiel + texto legível      |
| **Flux.1 Kontext**                      | Ótimo para edições incrementais                |
| **GPT-Image / DALL·E (modo edição)**    | Bom com texto, menos fiel ao rosto             |
| **Seedream 4 / Qwen Image Edit**        | Alternativas gratuitas decentes                |

> ⚠️ **Adicionar 7 personagens de uma vez costuma quebrar qualquer modelo.** Use o **Prompt A** se a ferramenta for forte; se o resultado embolar, vá pelo **modo incremental** (3 etapas) logo abaixo.

---

## 🅰️ Prompt A — edição da imagem original (principal)

```
Edit this photograph. Keep it a photorealistic indoor photo — same camera look, same warm lighting, same shallow depth of field, same 3:2 landscape framing. Do NOT turn it into an illustration or anime.

KEEP EXACTLY AS IS:
- The same young woman at the center: same face, same tan skin, same long wavy lavender-purple hair, same pink heart earrings, same pastel beaded bracelets and rings, same warm open smile. Same turquoise hoodie with the pink heart and white cat face print. She keeps holding the same orange lobster plush with round black glasses in her arms.
- The background: light wooden bookshelves with programming books, pencil cups, dark-themed code monitors, the teal-painted wall and botanical art print on the left, the curtain on the right, and the string of small blue-green LED fairy lights crossing the shelves.
- The existing foreground plushies on their matte black pedestals: the pink polka-dot octopus (left), the blue-orange-yellow mandarin fish (left of her), the red-and-orange coral (right of her), the blue whale (right) — same size, same craft, same little display screens behind them.

CHANGE 1 — BRING THE SHELF CHARACTERS DOWN:
Remove the round teal-blue Flutter bird plush and the white polar bear plush in the green "C#" sweater from the top shelf, and place them in the foreground with the rest of the team, each standing on its own matte black pedestal with its own small screen behind it, at the same scale as the other plushies. Fill the two empty spots on the top shelf with other soft tech-mascot plushies (a purple-and-orange Kotlin logo cushion and a small potted plant), so the shelf still looks full.

CHANGE 2 — ADD 5 NEW PLUSH TEAM MEMBERS, in the exact same handmade plush style as the existing ones (soft felted wool and knit fabric, visible stitching, chunky simple shapes, big glossy embroidered eyes, cute friendly faces), each on its own matte black pedestal with a small screen behind it:
- A chubby gray-blue great white shark plush with a white belly, tiny black felt sunglasses, and a small green Android robot plush tucked under one fin.
- A coiled bright green crocheted snake plush in chunky yarn, wearing tiny round glasses, with a small blue-and-yellow Python logo tag stitched to its side.
- A soft translucent purple-and-pink jellyfish plush with a rounded glowing bell and long dangling ribbon tentacles, with a green Node.js hexagon patch on its bell.
- A small mermaid rag doll plush with turquoise yarn hair, a shell hairpin and an iridescent sequin tail, holding a tiny felt microphone.
- A chubby black-and-white penguin plush with an orange felt beak and feet, with a small green terminal-screen patch on its belly reading "$ ./deploy".

COMPOSITION:
Arrange all 11 foreground plushies in two staggered tiers forming a wide arc around the woman, so every character is visible and nothing is hidden: the four existing plushies stay in the lower front tier, the new ones sit slightly behind and higher on taller black pedestals. Keep the woman clearly the center of the photo. Do not crowd or overlap the faces.

SCREENS:
Every plush has a small monitor or tablet behind it with a colored bezel matching its own colors. Each screen has a dark background and shows, in clean sharp readable white text, the character handle and model in the top line, a short skill line in smaller gray text below it, and a pixel-art portrait of that character in the middle. All screen text must be crisp and correctly spelled English, never garbled.

Photorealistic, cozy creator-studio photo, warm indoor lighting, shallow depth of field, 3:2 landscape, high detail.
```

---

## 🔁 Modo incremental (recomendado se o Prompt A embolar)

Rode uma etapa por vez, **sempre alimentando o resultado da etapa anterior** como nova imagem de entrada.

**Etapa 1 — descer a prateleira**

```
Edit this photo, keeping everything else identical. Take the round teal-blue Flutter bird plush and the white polar bear plush in the green "C#" sweater off the top shelf and place them in the foreground with the other plushies, each on its own matte black pedestal with a small screen behind it, at the same scale and in the same photorealistic style. Fill their empty spots on the shelf with a purple-and-orange Kotlin logo cushion and a small potted plant. Keep the woman, her hoodie, the lobster plush she is holding, the background and the existing plushies exactly as they are.
```

**Etapa 2 — adicionar os 5 novos (dois de cada vez)**

```
Edit this photo, keeping everything else identical. Add on the left side, on matte black pedestals in the same handmade plush style (felted wool and knit fabric, visible stitching, big glossy embroidered eyes): a soft translucent purple-and-pink jellyfish plush with a glowing rounded bell, dangling ribbon tentacles and a green Node.js hexagon patch; and a coiled bright green crocheted snake plush in chunky yarn with tiny round glasses and a blue-and-yellow Python logo tag. Each gets a small screen behind it with a dark background and sharp readable text. Photorealistic, same lighting, same depth of field.
```

```
Edit this photo, keeping everything else identical. Add on the right side, on matte black pedestals in the same handmade plush style: a chubby gray-blue great white shark plush with tiny black felt sunglasses holding a small green Android robot plush; a chubby black-and-white penguin plush with orange felt beak and feet and a green terminal patch on its belly reading "$ ./deploy"; and a small mermaid rag doll with turquoise yarn hair, iridescent sequin tail and a tiny felt microphone. Each gets a small screen behind it with a dark background and sharp readable text. Photorealistic, same lighting, same depth of field.
```

**Etapa 3 — corrigir os textos das telas**

```
Edit this photo. Change only the text on the small screens so it is perfectly sharp and readable, correctly spelled in English, without changing anything else in the image. Use this exact text, one screen per character, matching each screen to the plush in front of it:
@Chululu (MiMo V2.5) / Vision · OCR · Screenshots
@Fishie (DeepSeek V4 Flash) / HTML · CSS · Tailwind · jQuery
@Coral (Nemotron 3 Ultra) / Architecture · Planning · Rules
@Wally (Nemotron 3.5 Lightning) / Docs · README · i18n
@InnerLinho (DeepSeek V4 Flash) / PHP · Slim · MySQL
@Peep (DeepSeek V4 Flash) / Flutter · Dart · Cross-platform
@Bruce (DeepSeek V4 Flash) / Kotlin · Compose · Material 3
@Snowflake (DeepSeek V4 Flash) / C# · .NET · InfiniFrame
@Snuggle (DeepSeek V4 Flash) / Python · FastAPI · Scripts
@Nodi (DeepSeek V4 Flash) / Node.js · TypeScript · APIs
@Ariel (Laguna S 2.1) / Content · Copy · Social
@Tucso (DeepSeek V4 Flash) / Linux · Bash · Docker
```

---

## 🅱️ Prompt B — geração do zero (se não der para editar)

```
A photorealistic cozy creator-studio photograph, 3:2 landscape. At the center, a cheerful young woman with tan skin, long wavy lavender-purple hair, pink heart earrings, pastel beaded bracelets and rings, wearing a turquoise hoodie with a pink heart and white cat face print, smiling warmly at the camera and holding an orange lobster plush with round black glasses in her arms.

Around her, arranged in a wide arc on matte black display pedestals in two staggered tiers, sit twelve large handmade plush characters — soft felted wool and knit fabric, visible stitching, chunky simple shapes, big glossy embroidered eyes: a pink polka-dot octopus; a blue-orange-yellow mandarin fish; a red-and-orange branching coral; a blue whale; a round teal-blue bird with an orange beak and a Flutter logo on its belly; a white polar bear in a green "C#" sweater; a gray-blue great white shark with tiny black felt sunglasses holding a small green Android robot; a coiled bright green crocheted snake with round glasses and a Python logo tag; a translucent purple-and-pink jellyfish with a glowing bell, ribbon tentacles and a green Node.js hexagon patch; a mermaid rag doll with turquoise yarn hair and an iridescent sequin tail holding a tiny felt microphone; a black-and-white penguin with orange felt beak and feet and a green terminal patch on its belly.

Behind each plush stands a small monitor with a colored bezel matching its colors, dark screen showing a handle and model name in crisp white text, a short skill line in gray, and a pixel-art portrait of that character.

Background: light wooden bookshelves filled with programming books, pencil cups, dark-themed code monitors, soft tech mascot plushies on the top shelf (a JS coffee cup, a purple PHP elephant, a pink Instagram camera, a gray Apple, a green Android robot), a teal-painted wall with a botanical art print on the left, a curtain on the right, and a string of small blue-green LED fairy lights crossing the shelves.

Warm indoor lighting, shallow depth of field, sharp focus on the woman and the front plushies, high detail, natural photography, 3:2 landscape.
```

---

## 🧩 Ficha dos personagens

| #   | Personagem     | Emoji | Pelúcia                                                                          | Tela                                          |
| --- | -------------- | ----- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| —   | **Lobby**      | 🦞     | A mulher real (não é pelúcia) — cabelo lilás, hoodie turquesa                     | —                                             |
| 1   | **Coral**      | 🪸     | ✅ já existe — coral vermelho e laranja ramificado                                 | `@Coral (Nemotron 3 Ultra)`                        |
| 2   | **InnerLinho** | 🦞     | ✅ já existe — lagosta laranja de óculos redondos, no colo da Lobby                | `@InnerLinho (DeepSeek V4 Flash)` *(adicionar tela)* |
| 3   | **Fishie**     | 🐠     | ✅ já existe — peixe mandarim azul/laranja/amarelo                                 | `@Fishie (DeepSeek V4 Flash)`                        |
| 4   | **Peep**       | 🐦     | ⬇️ **descer da prateleira** — pássaro azul redondo, bico laranja, logo do Flutter  | `@Peep (DeepSeek V4 Flash)`                         |
| 5   | **Bruce**      | 🦈     | ➕ **novo** — tubarão cinza-azulado, óculos escuros de feltro, robô Android no braço | `@Bruce (DeepSeek V4 Flash)`                        |
| 6   | **Snowflake**  | 🐻‍❄️    | ⬇️ **descer da prateleira** — urso polar branco de suéter verde `C#`               | `@Snowflake (DeepSeek V4 Flash)`                    |
| 7   | **Snuggle**    | 🐍     | ➕ **novo** — cobra verde de crochê enrolada, óculos redondos, tag do Python       | `@Snuggle (DeepSeek V4 Flash)`                      |
| 8   | **Nodi**       | 🪼     | ➕ **novo** — água-viva roxa/rosa translúcida, sino brilhante, hexágono Node.js    | `@Nodi (DeepSeek V4 Flash)`                         |
| 9   | **Ariel**      | 🧜‍♀️     | ➕ **novo** — boneca sereia, cabelo de lã turquesa, cauda de paetê, microfone      | `@Ariel (Laguna S 2.1)`                         |
| 10  | **Tucso**      | 🐧     | ➕ **novo** — pinguim gordinho, bico laranja, patch de terminal `$ ./deploy`       | `@Tucso (DeepSeek V4 Flash)`                        |
| 11  | **Wally**      | 🐋     | ✅ já existe — baleia azul                                                         | `@Wally (Nemotron 3.5 Lightning)`                           |
| 12  | **Chululu**    | 🐙     | ✅ já existe — polvo rosa de bolinhas                                              | `@Chululu (MiMo V2.5)`                        |

---

## 🚫 Negative prompt

```
anime, cartoon, 2d illustration, flat vector art, cel shading, 3d render, cgi, plastic figurines, action figures, live animals, real animals, characters on the shelf, duplicated woman, extra people, extra fingers, deformed hands, distorted face, garbled text, gibberish text, misspelled words, blurry screens, cluttered composition, overlapping characters, cropped characters, watermark, signature
```

---

## ✅ Checklist do resultado

- [ ] Mesma mulher, mesmo rosto, mesmo cabelo lilás, mesmo hoodie turquesa com coração + gatinho
- [ ] Lagosta de óculos ainda no colo dela (**InnerLinho**), agora com telinha própria
- [ ] **Peep** (pássaro Flutter) e **Snowflake** (urso C#) **fora da prateleira**, no chão com os outros
- [ ] Buracos da prateleira preenchidos (nada de espaço vazio)
- [ ] **Bruce, Snuggle, Nodi, Ariel e Tucso** presentes, no mesmo estilo de pelúcia artesanal
- [ ] **12 pelúcias** no total (11 nos pedestais + a lagosta no colo)
- [ ] Todas as telas com `@nome (modelo)` **legível e sem texto embolado**
- [ ] Nenhum personagem escondido, cortado ou sobreposto
- [ ] Estilo **fotorrealista**, luz quente, fundo desfocado — nada de anime
- [ ] Proporção **3:2 paisagem** (gere em 1536×1024)

---

## 📝 Notas

- A imagem atual tem texto embolado nas telas (`MiMo V2-S`, `MiniMax M6`, `Nemetren`, skills ilegíveis). Os nomes corretos vêm do `AGENTS.md` e dos arquivos em `agents/` — use os da tabela acima.
- Se o modelo não conseguir 12 personagens numa foto só, prefira **descer os da prateleira primeiro** (é o que muda a composição) e depois adicionar os novos aos poucos.
- Depois de gerar, substitua o `lobby_team.png` na raiz do repositório — o `README.md` já aponta para ele.
