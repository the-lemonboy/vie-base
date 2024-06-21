import { fileURLToPath, URL } from 'node:url'
{{#if_eq import "demand"}}
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
{{/if_eq}}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {{#if_eq import "demand"}}
    {{#if_eq UI "element-plus"}}
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    {{/if_eq}}
    {{#if_eq UI "ant-design-vue"}}
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    {{/if_eq}}
    {{/if_eq}}
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
