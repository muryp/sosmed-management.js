import { defineConfig } from 'astro/config'
import { murypAstroMinify } from '@muryp/vite-html'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), murypAstroMinify()],
})
