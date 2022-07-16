import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.js'),
      name: 'basic-ui',
      fileName: (format) => `basic-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  histoire: {
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
        // {
        //   title: 'Components',
        //   include: file => !file.title.includes('Introduction'),
        // },
      ],
    },
  }
})
