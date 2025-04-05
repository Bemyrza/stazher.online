// vite.config.ts
import path from "node:path";
import vue from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import autoprefixer from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///C:/Users/%D0%90%D0%BA%D1%82%D0%B0%D0%BD/Desktop/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/stazher.online/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\\u0410\u043A\u0442\u0430\u043D\\Desktop\\\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430\\stazher.online";
var vite_config_default = defineConfig(({ mode }) => {
  const env = mode === "production" ? "production" : "development";
  return {
    preview: {
      host: "0.0.0.0",
      port: 80
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
    base: "/",
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            env,
            injectScript: mode === "production" ? `<script type="text/javascript">
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
              <noscript><img src="https://mc.yandex.ru/watch/100537171" style="position:absolute;left:-9999px" alt="" /></noscript>` : ""
          }
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      // Генерация sourcemaps для отладки
      sourcemap: false,
      // Очистка выходной директории перед сборкой
      emptyOutDir: true,
      // Директория сборки
      outDir: "dist",
      // Настройки для разделения кода
      rollupOptions: {
        output: {
          // Разделение вендоров и основного кода
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
            if (id.includes("src/components")) {
              return "components";
            }
            if (id.includes("src/assets")) {
              return "assets";
            }
          },
          // Настройка имен файлов
          entryFileNames: "js/[name]-[hash].js",
          chunkFileNames: "js/[name]-[hash].js",
          assetFileNames: (assetInfo) => {
            const fileName = assetInfo.name || "";
            const ext = fileName.split(".").pop() || "js";
            if (/\.(css)$/.test(fileName)) {
              return `css/[name]-[hash].${ext}`;
            }
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(fileName)) {
              return `images/[name]-[hash].${ext}`;
            }
            if (/\.(woff2?|eot|ttf|otf)$/.test(fileName)) {
              return `fonts/[name]-[hash].${ext}`;
            }
            return `assets/[name]-[hash].${ext}`;
          }
        }
      },
      // Настройки минификации
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTBcdTA0M0FcdTA0NDJcdTA0MzBcdTA0M0RcXFxcRGVza3RvcFxcXFxcdTA0MURcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDMwXFxcXHN0YXpoZXIub25saW5lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTBcdTA0M0FcdTA0NDJcdTA0MzBcdTA0M0RcXFxcRGVza3RvcFxcXFxcdTA0MURcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDMwXFxcXHN0YXpoZXIub25saW5lXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8lRDAlOTAlRDAlQkElRDElODIlRDAlQjAlRDAlQkQvRGVza3RvcC8lRDAlOUQlRDAlQkUlRDAlQjIlRDAlQjAlRDElOEYlMjAlRDAlQkYlRDAlQjAlRDAlQkYlRDAlQkElRDAlQjAvc3Rhemhlci5vbmxpbmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xyXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/ICdwcm9kdWN0aW9uJyA6ICdkZXZlbG9wbWVudCdcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByZXZpZXc6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBwb3J0OiA4MFxyXG4gICAgfSwgICAgXHJcbiAgICBjc3M6IHtcclxuICAgICAgcG9zdGNzczoge1xyXG4gICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV1cclxuICAgICAgfSxcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIkAvYXNzZXRzL2Jhc2UvdmFyaWFibGVzLnNjc3NcIjtgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgICAgICBpbmplY3Q6IHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZW52LFxyXG4gICAgICAgICAgICBpbmplY3RTY3JpcHQ6XHJcbiAgICAgICAgICAgICAgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgICAgICAgICA/IGA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbihtLGUsdCxyLGksayxhKXttW2ldPW1baV18fGZ1bmN0aW9uKCl7KG1baV0uYT1tW2ldLmF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9O1xyXG4gICAgICAgICAgICAgICAgbVtpXS5sPTEqbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9jdW1lbnQuc2NyaXB0cy5sZW5ndGg7IGorKykge2lmIChkb2N1bWVudC5zY3JpcHRzW2pdLnNyYyA9PT0gcikgeyByZXR1cm47IH19XHJcbiAgICAgICAgICAgICAgICBrPWUuY3JlYXRlRWxlbWVudCh0KSxhPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodClbMF0say5hc3luYz0xLGsuc3JjPXIsYS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShrLGEpfSlcclxuICAgICAgICAgICAgICAgICh3aW5kb3csIGRvY3VtZW50LCBcInNjcmlwdFwiLCBcImh0dHBzOi8vbWMueWFuZGV4LnJ1L21ldHJpa2EvdGFnLmpzXCIsIFwieW1cIik7XHJcbiAgICAgICAgICAgICAgICB5bSgxMDA1MzcxNzEsIFwiaW5pdFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrbWFwOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHRyYWNrTGlua3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgYWNjdXJhdGVUcmFja0JvdW5jZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB3ZWJ2aXNvcjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgICA8bm9zY3JpcHQ+PGltZyBzcmM9XCJodHRwczovL21jLnlhbmRleC5ydS93YXRjaC8xMDA1MzcxNzFcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OTlweFwiIGFsdD1cIlwiIC8+PC9ub3NjcmlwdD5gXHJcbiAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAvLyBcdTA0MTNcdTA0MzVcdTA0M0RcdTA0MzVcdTA0NDBcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEYgc291cmNlbWFwcyBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDNFXHUwNDQyXHUwNDNCXHUwNDMwXHUwNDM0XHUwNDNBXHUwNDM4XHJcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXHJcbiAgICAgIC8vIFx1MDQxRVx1MDQ0N1x1MDQzOFx1MDQ0MVx1MDQ0Mlx1MDQzQVx1MDQzMCBcdTA0MzJcdTA0NEJcdTA0NDVcdTA0M0VcdTA0MzRcdTA0M0RcdTA0M0VcdTA0MzkgXHUwNDM0XHUwNDM4XHUwNDQwXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDM4IFx1MDQzRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzNCBcdTA0NDFcdTA0MzFcdTA0M0VcdTA0NDBcdTA0M0FcdTA0M0VcdTA0MzlcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgIC8vIFx1MDQxNFx1MDQzOFx1MDQ0MFx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0RiBcdTA0NDFcdTA0MzFcdTA0M0VcdTA0NDBcdTA0M0FcdTA0MzhcclxuICAgICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICAgIC8vIFx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDQwXHUwNDMwXHUwNDM3XHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGIFx1MDQzQVx1MDQzRVx1MDQzNFx1MDQzMFxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBcdTA0MjBcdTA0MzBcdTA0MzdcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDMyXHUwNDM1XHUwNDNEXHUwNDM0XHUwNDNFXHUwNDQwXHUwNDNFXHUwNDMyIFx1MDQzOCBcdTA0M0VcdTA0NDFcdTA0M0RcdTA0M0VcdTA0MzJcdTA0M0RcdTA0M0VcdTA0MzNcdTA0M0UgXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDMwXHJcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2NvbXBvbmVudHMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnY29tcG9uZW50cydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3NyYy9hc3NldHMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnYXNzZXRzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDMwIFx1MDQzOFx1MDQzQ1x1MDQzNVx1MDQzRCBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0M0VcdTA0MzJcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBhc3NldEluZm8ubmFtZSB8fCAnJ1xyXG4gICAgICAgICAgICBjb25zdCBleHQgPSBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpIHx8ICdqcydcclxuXHJcbiAgICAgICAgICAgIGlmICgvXFwuKGNzcykkLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgY3NzL1tuYW1lXS1baGFzaF0uJHtleHR9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgvXFwuKHBuZ3xqcGU/Z3xnaWZ8c3ZnfHdlYnB8aWNvKSQvLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGBpbWFnZXMvW25hbWVdLVtoYXNoXS4ke2V4dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXC4od29mZjI/fGVvdHx0dGZ8b3RmKSQvLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGBmb250cy9bbmFtZV0tW2hhc2hdLiR7ZXh0fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0tW2hhc2hdLiR7ZXh0fWBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBcdTA0M0NcdTA0MzhcdTA0M0RcdTA0MzhcdTA0NDRcdTA0MzhcdTA0M0FcdTA0MzBcdTA0NDZcdTA0MzhcdTA0MzhcclxuICAgICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThaLE9B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
