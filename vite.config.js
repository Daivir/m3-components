import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [ vue() ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})

/* export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd())
  return {
    root: 'src',
    server: {
      port: env.PORT,
      strictPort: !!env.PORT
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/plugins/install.js'),
        name: 'm3'
      }
    },
    plugins: [ vue() ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}) */
