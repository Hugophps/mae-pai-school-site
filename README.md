# Mae Pai School Fund

Site statique multi-pages, bilingue FR/EN (switch sur la page), pour la collecte de fonds en soutien a l'ecole de Mae Pai.

## Pages

- `/index.html` (Home)
- `/ecole-mae-pai.html`
- `/a-propos.html`
- `/sauver-ecole-mae-pai.html`

## Stack

- HTML/CSS/JS statique
- Traduction via `app.js` + `localStorage`

## Lancer en local

```bash
cd "/Users/hugophp/Documents/App Sans Concept/mae-pai-school-site"
python3 -m http.server 4173 --bind 127.0.0.1
```

Puis ouvrir: `http://127.0.0.1:4173`

## Deploiement Vercel

- Repo GitHub: connecte a Vercel
- Framework: `Other`
- Build command: vide
- Output directory: `.`

Le fichier `vercel.json` applique un cache long sur `/assets/*`.
