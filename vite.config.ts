import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsonServer from 'vite-plugin-simple-json-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsonServer()],
})
