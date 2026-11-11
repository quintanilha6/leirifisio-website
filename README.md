# Leirifisio website

Static site for [leirifisio.com](https://leirifisio.com), served by GitHub Pages from the `master` branch.

- `index.html`: all pages (Leirifisio, Sobre nós, Parcerias, Contacto), switched by `#hash`
- `static-site.js`: menu, tabs, sliders, page switching
- `src/assets/`, `public/assets/`: CSS, fonts and images

## Edit and preview

No build step. Edit the files, then preview locally:

```bash
python -m http.server 8080
```

Open http://localhost:8080.

## Deploy

Push to `master`. GitHub Pages publishes it about a minute later.

The old React version of the site is kept in the `react-archive` tag.
