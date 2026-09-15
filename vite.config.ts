import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default base assumes this repo is deployed as a GitHub *user* page
// (e.g. a repo literally named `omar-elsayed1.github.io`), which is served
// from the domain root. If you instead deploy this as a *project* page
// (e.g. a repo named `portfolio`, served at /portfolio/), set the
// VITE_BASE_PATH env var (or edit the fallback below) to '/portfolio/'.
// The deploy workflow in .github/workflows/deploy.yml sets this
// automatically based on the repository name.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
