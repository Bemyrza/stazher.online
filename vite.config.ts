import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = mode === 'production' ? 'production' : 'development'

  return {
    preview: {
      host: '0.0.0.0',
      port: 80
    },    
    server:{
      allowedHosts: ['cd44-185-117-148-70.ngrok-free.app'],
    },
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/base/variables.scss";`
        }
      }
    },
    base: '/',
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            env,
            injectScript:
              mode === 'production'
                ? `<script type="text/javascript">
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(100537171, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              </script>
              <noscript><img src="https://mc.yandex.ru/watch/100537171" style="position:absolute;left:-9999px" alt="" /></noscript>`
                : ''
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      // Генерация sourcemaps для отладки
      sourcemap: false,
      // Очистка выходной директории перед сборкой
      emptyOutDir: true,
      // Директория сборки
      outDir: 'dist',
      // Настройки для разделения кода
      rollupOptions: {
        output: {
          // Разделение вендоров и основного кода
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            if (id.includes('src/components')) {
              return 'components'
            }
            if (id.includes('src/assets')) {
              return 'assets'
            }
          },
          // Настройка имен файлов
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.name || ''
            const ext = fileName.split('.').pop() || 'js'

            if (/\.(css)$/.test(fileName)) {
              return `css/[name]-[hash].${ext}`
            }
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(fileName)) {
              return `images/[name]-[hash].${ext}`
            }
            if (/\.(woff2?|eot|ttf|otf)$/.test(fileName)) {
              return `fonts/[name]-[hash].${ext}`
            }
            return `assets/[name]-[hash].${ext}`
          }
        }
      },
      // Настройки минификации
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})
