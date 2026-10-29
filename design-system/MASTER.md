# Design System — Sw Projetados SLZ · "Noir & Ouro"

Aprovado em 12/10/2026. Base gerada com a skill UI UX Pro Max (paleta "Premium black + gold accent", estilo Minimalism, padrão "Scroll-Triggered Storytelling") e ajustada ao logo (ouro sobre preto) e às fotos reais (madeira quente, travertino, LED âmbar).

Tokens implementados em `app/globals.css` (`@theme`). Componentes nunca usam hex direto.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#141210` | fundo dominante (grafite quente) |
| `surface` | `#1F1C19` | cards, header, faixas |
| `surface-2` | `#2A2622` | hover/realce de superfície |
| `cream` | `#F4EFE6` | texto sobre escuro (≈16:1) |
| `sand` | `#E9E1D4` | fundo das seções claras (Manifesto, FAQ, Formulário) |
| `stone` | `#B8AE9F` | texto secundário sobre escuro (≈8:1) |
| `stone-dark` | `#5C544A` | texto secundário sobre areia (≈6:1) |
| `wood` | `#A9744F` | ícones, detalhes de madeira |
| `gold` | `#C9A86A` | CTA primário, itálicos dos títulos, foco |
| `gold-deep` | `#74571F` | itálico/realce sobre areia (≈5.2:1) |
| `line` | `rgba(201,168,106,.2)` | bordas finas |

CTA primário: fundo `gold`, texto `ink` (≈8.5:1). Foco visível: anel 2px `gold` com offset.

## Tipografia
- Títulos: **Cormorant Garamond** 500/600 — destaque em *itálico* `gold` (ou `gold-deep` em fundo claro).
- Texto: **Manrope** 400/500/600 — base 16–17px, line-height 1.6.
- Etiquetas `[ SEÇÃO ]`: **Cinzel** 500, 12–13px, letter-spacing .24em, caixa alta.
- Escala de títulos (mobile → desktop): H1 40→72px · H2 32→52px · H3 22→26px.

## Espaçamento, raios, sombras
- Escala 4/8; seções `py-20` (mobile) → `py-32` (desktop); container máx. 1240px, gutter 20–32px.
- Raios: 2px (botões, cards, imagens). Sem sombras pesadas — profundidade por borda `line` e contraste de superfícies.

## Fotografia
- Ambientes com luz baixa e LED âmbar aceso; madeira, pedra e metal escovado.
- Proporção padrão dos cards: 4:5 (retrato). Hero: overlay escuro 55–75%.
- Placeholders seguem o padrão `ambienteN-M.jpeg` em `public/images` — substituir mantendo o nome.

## Motion
- Entrada: fade + translateY 24px, 700ms, `cubic-bezier(.22,1,.36,1)`, escalonado 80ms.
- Hover: 200–300ms. Zoom de imagem: scale 1.04 em 700ms.
- Parallax leve só no Hero. Tudo desligado em `prefers-reduced-motion`.

## Regras de UX
- 1 ideia por seção; CTA "Quero meu projetado" ao final de toda seção, com `data-cta-location`.
- CTAs com largura total no mobile, altura mínima 52px (touch ≥ 48px).
- Ícones SVG (nunca emoji). Labels visíveis em todos os campos. Contraste AA mínimo.
