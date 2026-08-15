# 🎨 Prompt to update `lobby_team.png`

> **Goal**: start from the **current** image (`lobby_team.png`, 1537×1023, 3:2 landscape) and produce a new version that:
>
> 1. **Brings the shelf characters down to the floor**, alongside the rest of the team (the Flutter bird = **Peep**, and the C# bear = **Snowflake**);
> 2. **Adds the 7 new members** that aren't there yet (**Bruce, Snuggle, Nodi, Ariel, Tucso**, plus giving **InnerLinho** a screen of its own);
> 3. **Preserves** the person, the scene, the style and the plushies that already exist.

---

## 📸 What the current image actually is (read before prompting)

It's not an illustration — it's a **photorealistic home-studio photograph**:

- **Center**: a real young woman, tan skin, long wavy **lavender/purple** hair, pink heart earrings, pastel beaded bracelets, rings, wide smile. Wearing a **turquoise hoodie** with a **pink heart + white cat face** print. Holding in her lap an **orange lobster plush with round black glasses**. She is **Lobby**.
- **Foreground**: large plushies (30–50 cm) on **matte black square pedestals**, arced around her — **Chululu** (pink polka-dot octopus), **Fishie** (blue/orange/yellow mandarin fish), **Coral** (red and orange coral), **Wally** (blue whale).
- **Behind each plush**: a **small monitor/tablet with a colored bezel** (pink, white, black) showing, on a dark background, `@Name (Model)`, a smaller skills line and a **pixel/vector art of the character**.
- **Background**: light wooden bookshelf with programming books, pencil cups, monitors showing code in a dark theme, teal-painted wall on the left with a botanical art print, curtain on the right, a **string of blue/green LED fairy lights** crossing the shelves.
- **Top shelf**: **tech mascot** plushies — the **JS** cup, the **Flutter** bird, the purple **PHP** elephant, the polar bear in a green **C#** sweater, the pink **Instagram** camera, a purple kiwi, the gray **Apple** apple, the green **Android** robot.
- **Technique**: warm indoor light, shallow depth of field (blurred background), visible felt/knit texture on the plushies, glossy embroidered eyes.

**Characters missing from the current photo:** Peep and Snowflake (they only exist as plushies on the top shelf), Bruce, Snuggle, Nodi, Ariel and Tucso (they don't exist). InnerLinho is the lobster in her lap, but has no screen.

---

## 🛠 How to generate

Use a model that accepts a **reference image + editing instruction** (image-to-image), not a pure text-to-image:

| Tool                                    | Good for                                       |
| --------------------------------------- | ---------------------------------------------- |
| **Nano Banana Pro** (Gemini 3 Pro Image) | Best option: faithful editing + readable text   |
| **Flux.1 Kontext**                      | Great for incremental edits                    |
| **GPT-Image / DALL·E (edit mode)**      | Good with text, less faithful to the face      |
| **Seedream 4 / Qwen Image Edit**        | Decent free alternatives                       |

> ⚠️ **Adding 7 characters at once tends to break any model.** Use **Prompt A** if the tool is strong; if the result gets muddled, go with the **incremental mode** (3 stages) further below.

---

## 🅰️ Prompt A — editing the original image (main)

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

## 🔁 Incremental mode (recommended if Prompt A gets muddled)

Run one stage at a time, **always feeding the previous stage's result** in as the new input image.

**Stage 1 — bring down the shelf**

```
Edit this photo, keeping everything else identical. Take the round teal-blue Flutter bird plush and the white polar bear plush in the green "C#" sweater off the top shelf and place them in the foreground with the other plushies, each on its own matte black pedestal with a small screen behind it, at the same scale and in the same photorealistic style. Fill their empty spots on the shelf with a purple-and-orange Kotlin logo cushion and a small potted plant. Keep the woman, her hoodie, the lobster plush she is holding, the background and the existing plushies exactly as they are.
```

**Stage 2 — add the 5 new ones (two at a time)**

```
Edit this photo, keeping everything else identical. Add on the left side, on matte black pedestals in the same handmade plush style (felted wool and knit fabric, visible stitching, big glossy embroidered eyes): a soft translucent purple-and-pink jellyfish plush with a glowing rounded bell, dangling ribbon tentacles and a green Node.js hexagon patch; and a coiled bright green crocheted snake plush in chunky yarn with tiny round glasses and a blue-and-yellow Python logo tag. Each gets a small screen behind it with a dark background and sharp readable text. Photorealistic, same lighting, same depth of field.
```

```
Edit this photo, keeping everything else identical. Add on the right side, on matte black pedestals in the same handmade plush style: a chubby gray-blue great white shark plush with tiny black felt sunglasses holding a small green Android robot plush; a chubby black-and-white penguin plush with orange felt beak and feet and a green terminal patch on its belly reading "$ ./deploy"; and a small mermaid rag doll with turquoise yarn hair, iridescent sequin tail and a tiny felt microphone. Each gets a small screen behind it with a dark background and sharp readable text. Photorealistic, same lighting, same depth of field.
```

**Stage 3 — fix the screen texts**

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

## 🅱️ Prompt B — generating from scratch (if editing isn't possible)

```
A photorealistic cozy creator-studio photograph, 3:2 landscape. At the center, a cheerful young woman with tan skin, long wavy lavender-purple hair, pink heart earrings, pastel beaded bracelets and rings, wearing a turquoise hoodie with a pink heart and white cat face print, smiling warmly at the camera and holding an orange lobster plush with round black glasses in her arms.

Around her, arranged in a wide arc on matte black display pedestals in two staggered tiers, sit twelve large handmade plush characters — soft felted wool and knit fabric, visible stitching, chunky simple shapes, big glossy embroidered eyes: a pink polka-dot octopus; a blue-orange-yellow mandarin fish; a red-and-orange branching coral; a blue whale; a round teal-blue bird with an orange beak and a Flutter logo on its belly; a white polar bear in a green "C#" sweater; a gray-blue great white shark with tiny black felt sunglasses holding a small green Android robot; a coiled bright green crocheted snake with round glasses and a Python logo tag; a translucent purple-and-pink jellyfish with a glowing bell, ribbon tentacles and a green Node.js hexagon patch; a mermaid rag doll with turquoise yarn hair and an iridescent sequin tail holding a tiny felt microphone; a black-and-white penguin with orange felt beak and feet and a green terminal patch on its belly.

Behind each plush stands a small monitor with a colored bezel matching its colors, dark screen showing a handle and model name in crisp white text, a short skill line in gray, and a pixel-art portrait of that character.

Background: light wooden bookshelves filled with programming books, pencil cups, dark-themed code monitors, soft tech mascot plushies on the top shelf (a JS coffee cup, a purple PHP elephant, a pink Instagram camera, a gray Apple, a green Android robot), a teal-painted wall with a botanical art print on the left, a curtain on the right, and a string of small blue-green LED fairy lights crossing the shelves.

Warm indoor lighting, shallow depth of field, sharp focus on the woman and the front plushies, high detail, natural photography, 3:2 landscape.
```

---

## 🧩 Character sheet

| #   | Character      | Emoji | Plush                                                                            | Screen                                        |
| --- | -------------- | ----- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| —   | **Lobby**      | 🦞     | The real woman (not a plush) — lavender hair, turquoise hoodie                    | —                                             |
| 1   | **Coral**      | 🪸     | ✅ already exists — branching red and orange coral                                 | `@Coral (Nemotron 3 Ultra)`                        |
| 2   | **InnerLinho** | 🦞     | ✅ already exists — orange lobster with round glasses, in Lobby's lap              | `@InnerLinho (DeepSeek V4 Flash)` *(add screen)* |
| 3   | **Fishie**     | 🐠     | ✅ already exists — blue/orange/yellow mandarin fish                               | `@Fishie (DeepSeek V4 Flash)`                        |
| 4   | **Peep**       | 🐦     | ⬇️ **bring down from the shelf** — round blue bird, orange beak, Flutter logo      | `@Peep (DeepSeek V4 Flash)`                         |
| 5   | **Bruce**      | 🦈     | ➕ **new** — gray-blue shark, felt sunglasses, Android robot under its arm         | `@Bruce (DeepSeek V4 Flash)`                        |
| 6   | **Snowflake**  | 🐻‍❄️    | ⬇️ **bring down from the shelf** — white polar bear in a green `C#` sweater        | `@Snowflake (DeepSeek V4 Flash)`                    |
| 7   | **Snuggle**    | 🐍     | ➕ **new** — coiled green crocheted snake, round glasses, Python tag               | `@Snuggle (DeepSeek V4 Flash)`                      |
| 8   | **Nodi**       | 🪼     | ➕ **new** — translucent purple/pink jellyfish, glowing bell, Node.js hexagon      | `@Nodi (DeepSeek V4 Flash)`                         |
| 9   | **Ariel**      | 🧜‍♀️     | ➕ **new** — mermaid doll, turquoise yarn hair, sequin tail, microphone            | `@Ariel (Laguna S 2.1)`                         |
| 10  | **Tucso**      | 🐧     | ➕ **new** — chubby penguin, orange beak, `$ ./deploy` terminal patch              | `@Tucso (DeepSeek V4 Flash)`                        |
| 11  | **Wally**      | 🐋     | ✅ already exists — blue whale                                                     | `@Wally (Nemotron 3.5 Lightning)`                           |
| 12  | **Chululu**    | 🐙     | ✅ already exists — pink polka-dot octopus                                         | `@Chululu (MiMo V2.5)`                        |

---

## 🚫 Negative prompt

```
anime, cartoon, 2d illustration, flat vector art, cel shading, 3d render, cgi, plastic figurines, action figures, live animals, real animals, characters on the shelf, duplicated woman, extra people, extra fingers, deformed hands, distorted face, garbled text, gibberish text, misspelled words, blurry screens, cluttered composition, overlapping characters, cropped characters, watermark, signature
```

---

## ✅ Result checklist

- [ ] Same woman, same face, same lavender hair, same turquoise hoodie with heart + kitty
- [ ] Lobster with glasses still in her lap (**InnerLinho**), now with its own screen
- [ ] **Peep** (Flutter bird) and **Snowflake** (C# bear) **off the shelf**, on the floor with the others
- [ ] Gaps on the shelf filled in (no empty space)
- [ ] **Bruce, Snuggle, Nodi, Ariel and Tucso** present, in the same handmade plush style
- [ ] **12 plushies** in total (11 on pedestals + the lobster in her lap)
- [ ] Every screen with `@name (model)` **readable and not garbled**
- [ ] No character hidden, cropped or overlapping
- [ ] **Photorealistic** style, warm light, blurred background — no anime
- [ ] **3:2 landscape** ratio (generate at 1536×1024)

---

## 📝 Notes

- The current image has garbled text on the screens (`MiMo V2-S`, `MiniMax M6`, `Nemetren`, illegible skills). The correct names come from `AGENTS.md` and the files in `agents/` — use the ones from the table above.
- If the model can't manage 12 characters in a single photo, prefer **bringing the shelf ones down first** (that's what changes the composition) and then adding the new ones little by little.
- After generating, replace `lobby_team.png` in the repository root — `README.md` already points to it.
