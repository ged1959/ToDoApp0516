import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/ToDoApp0516/', // これ、つまりレポジトリ名を追記する。
  plugins: [vue()],
})
