import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@subpages': path.resolve(__dirname, './src/subpages'),
      '@main-components': path.resolve(__dirname, './src/components/main'),
      '@admin-components': path.resolve(__dirname, './src/components/admin'),
      '@blog': path.resolve(__dirname, './src/blog'),
      '@documents': path.resolve(__dirname, './src/documents'),
      '@auth': path.resolve(__dirname, './src/authentication'),
      '@admin-panel': path.resolve(__dirname, './src/admin-panel'),
      '@admin-blog': path.resolve(__dirname, './src/admin-panel/blog'),
      '@admin-settings': path.resolve(__dirname, './src/admin-panel/settings'),
      '@admin-users': path.resolve(__dirname, './src/admin-panel/users'),
    }
  }
})
