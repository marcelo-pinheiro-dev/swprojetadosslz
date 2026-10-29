# Sw Projetados SLZ — site

Landing page de geração de leads (Next.js 16 + Tailwind 4). Design System em [design-system/MASTER.md](design-system/MASTER.md).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Copie `.env.example` para `.env.local` e preencha.

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, mensagens, endereço, horários, redes, números, garantia, vídeos | `site.config.ts` |
| Cards de ambientes | `content/environments.ts` |
| Projetos do portfólio e galerias | `content/projects.ts` |
| Reels | `content/reels.ts` |
| FAQ | `content/faq.ts` |
| Artigos do blog | `content/posts.ts` |

## Fotos

Ficam em `public/images` com o padrão `<ambiente><projeto>-<foto>.jpeg` (ex.: `cozinha2-3.jpeg`, `banheiro1-1.jpeg`).
Para trocar uma foto, substitua o arquivo **mantendo o mesmo nome**. Proporção ideal: retrato 4:5.
`banheiro1-*` e `area-externa1-*` são placeholders.

## Rastreamento

Eventos enviados para `dataLayer` / GA4 / Meta Pixel: `click_whatsapp` (com `cta_location`), `form_start`, `form_submit`, `scroll_75`, `video_play`.
Scripts de rastreamento só carregam após o aceite no banner de cookies. UTMs, gclid e fbclid vão para a mensagem do WhatsApp ("Origem: …").
