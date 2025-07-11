import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sass from 'sass'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const API_URL = isProd ? process.env.VITE_API_URL : null
  console.log(API_URL)
  return {
    plugins: [vue(), vueJsx()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/_variables.scss";
          @import "@/assets/_mixins.scss";
          @import "@/assets/_responsive.scss";
        `,
          implementation: sass,
          sassOptions: {
            quietDeps: true
          },
          silenceDeprecations: ['legacy-js-api']
        }
      },
      postcss: {
        plugins: [tailwindcss('./tailwind.config.ts'), autoprefixer]
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    optimizeDeps: {
      include: ['lodash', 'bootstrap']
    },
    server: {
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          secure: false
        }
      }
    },
    define: {
      'process.env': {
        API_URL: API_URL
      }
    }
  }
})
