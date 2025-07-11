import { defineConfig } from 'vite'
import { resolve } from 'path'
import fg from 'fast-glob'

const htmlFiles = fg.sync('**/*.html', {
  cwd: __dirname,
  ignore: ['node_modules/**', 'dist/**'], // optional
})

// list all the *.html files
const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace(/\.html$/, '').replace(/\//g, '_')
  entries[name] = resolve(__dirname, file)
  return entries
}, {})

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      // copies all the *.html files into the dist folder
      input,
    },
  },
})