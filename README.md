# Ütopia İzmir Transfer Landing

Next.js 16 + App Router + TypeScript + Tailwind ile geliştirilmiş çok dilli (TR/DE/EN) transfer landing projesi.

## Özellikler

- Çoklu dil: `tr`, `de`, `en`
- Locale bazlı routing ve dil yönlendirme
- SEO metadata, canonical, hreflang, sitemap, robots
- WhatsApp odaklı rezervasyon akışı
- FAQ, testimonial, rota kartları, çift galeri (Instagram + foto galeri)
- Responsive tasarım
- Tam statik çıktı (`output: "export"`)

## Geliştirme

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build sonrası statik dosyalar `build/` klasörüne yazılır.

## Cloudflare Pages

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `build`

Bu proje statik olduğu için middleware/proxy veya Node.js runtime gerektirmez.

## Local Preview

```bash
npx serve out
```
