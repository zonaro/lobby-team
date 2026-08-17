"""
Prompt: "a minimalist logo for a coffee shop" (1:1)
Style: geometric / soft-minimal mark - a coffee cup built from flat shapes
inside a clean ring badge, warm restrained palette.
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "lib"))
from render import Design

d = Design("1:1", background=(245, 237, 225))

CREAM = (245, 237, 225)
BROWN = (74, 48, 33)
TAN = (198, 154, 112)
TERRACOTTA = (196, 93, 58)
INK = (43, 30, 22)

d.fill(CREAM)

cx, cy = 0.5, 0.47

# outer ring badge
d.ring(cx, cy, 0.30, 6, BROWN)
d.disk(cx, cy - 0.30, 0.012, TERRACOTTA)
d.disk(cx, cy + 0.30, 0.012, TERRACOTTA)

# cup body (rounded rect) + saucer + handle
d.rect(cx - 0.115, cy - 0.06, cx + 0.115, cy + 0.11, BROWN, radius=0.02)
d.rect(cx - 0.145, cy + 0.11, cx + 0.145, cy + 0.135, BROWN, radius=0.012)
d.ring(cx + 0.135, cy + 0.005, 0.05, 9, BROWN)

# steam - three simple arcs
for i, dx in enumerate([-0.045, 0.0, 0.045]):
    d.arc(cx + dx, cy - 0.155, 0.035, 200, 340, 4, TAN)

# wordmark
d.write(cx, cy + 0.375, "PORTO BREW CO.", role="grotesque", weight="bold",
        size=34, color=INK, align="center", tracking=4)
d.write(cx, cy + 0.415, "EST. EVERYDAY  ·  COFFEE HOUSE", role="mono",
        size=14, color=TAN, align="center", tracking=2)

out_path = os.path.join(os.path.dirname(__file__), "coffee-shop-logo-v2.png")
d.save(out_path, grain=2, saturation=1.03)
print("wrote", out_path)
