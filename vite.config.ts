import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: '@sigveh/basic-ui',
      fileName: (format) => `basic-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: true
  },
})
