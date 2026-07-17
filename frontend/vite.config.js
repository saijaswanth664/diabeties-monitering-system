import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resolve-es-toolkit-compat-esm',
      resolveId(source) {
        if (source.startsWith('es-toolkit/compat/')) {
          const subpath = source.replace('es-toolkit/compat/', '');
          return this.resolve(`es-toolkit/dist/compat/${subpath}.mjs`, undefined, { skipSelf: true });
        }
      }
    }
  ],
})
