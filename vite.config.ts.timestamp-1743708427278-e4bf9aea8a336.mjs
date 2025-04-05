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
    server: {
      allowedHosts: ["cd44-185-117-148-70.ngrok-free.app"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTBcdTA0M0FcdTA0NDJcdTA0MzBcdTA0M0RcXFxcRGVza3RvcFxcXFxcdTA0MURcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDMwXFxcXHN0YXpoZXIub25saW5lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTBcdTA0M0FcdTA0NDJcdTA0MzBcdTA0M0RcXFxcRGVza3RvcFxcXFxcdTA0MURcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNGXHUwNDNBXHUwNDMwXFxcXHN0YXpoZXIub25saW5lXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8lRDAlOTAlRDAlQkElRDElODIlRDAlQjAlRDAlQkQvRGVza3RvcC8lRDAlOUQlRDAlQkUlRDAlQjIlRDAlQjAlRDElOEYlMjAlRDAlQkYlRDAlQjAlRDAlQkYlRDAlQkElRDAlQjAvc3Rhemhlci5vbmxpbmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xyXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/ICdwcm9kdWN0aW9uJyA6ICdkZXZlbG9wbWVudCdcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByZXZpZXc6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBwb3J0OiA4MFxyXG4gICAgfSwgICAgXHJcbiAgICBzZXJ2ZXI6e1xyXG4gICAgICBhbGxvd2VkSG9zdHM6IFsnY2Q0NC0xODUtMTE3LTE0OC03MC5uZ3Jvay1mcmVlLmFwcCddLFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgcGx1Z2luczogW3RhaWx3aW5kKCksIGF1dG9wcmVmaXhlcigpXVxyXG4gICAgICB9LFxyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiQC9hc3NldHMvYmFzZS92YXJpYWJsZXMuc2Nzc1wiO2BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYXNlOiAnLycsXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICB2dWVKc3goKSxcclxuICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgICAgIGluamVjdDoge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBlbnYsXHJcbiAgICAgICAgICAgIGluamVjdFNjcmlwdDpcclxuICAgICAgICAgICAgICBtb2RlID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICAgICAgICAgID8gYDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG0sZSx0LHIsaSxrLGEpe21baV09bVtpXXx8ZnVuY3Rpb24oKXsobVtpXS5hPW1baV0uYXx8W10pLnB1c2goYXJndW1lbnRzKX07XHJcbiAgICAgICAgICAgICAgICBtW2ldLmw9MSpuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb2N1bWVudC5zY3JpcHRzLmxlbmd0aDsgaisrKSB7aWYgKGRvY3VtZW50LnNjcmlwdHNbal0uc3JjID09PSByKSB7IHJldHVybjsgfX1cclxuICAgICAgICAgICAgICAgIGs9ZS5jcmVhdGVFbGVtZW50KHQpLGE9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KVswXSxrLmFzeW5jPTEsay5zcmM9cixhLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGssYSl9KVxyXG4gICAgICAgICAgICAgICAgKHdpbmRvdywgZG9jdW1lbnQsIFwic2NyaXB0XCIsIFwiaHR0cHM6Ly9tYy55YW5kZXgucnUvbWV0cmlrYS90YWcuanNcIiwgXCJ5bVwiKTtcclxuICAgICAgICAgICAgICAgIHltKDEwMDUzNzE3MSwgXCJpbml0XCIsIHtcclxuICAgICAgICAgICAgICAgICAgY2xpY2ttYXA6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgdHJhY2tMaW5rczp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBhY2N1cmF0ZVRyYWNrQm91bmNlOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHdlYnZpc29yOnRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIDwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgIDxub3NjcmlwdD48aW1nIHNyYz1cImh0dHBzOi8vbWMueWFuZGV4LnJ1L3dhdGNoLzEwMDUzNzE3MVwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5OXB4XCIgYWx0PVwiXCIgLz48L25vc2NyaXB0PmBcclxuICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIC8vIFx1MDQxM1x1MDQzNVx1MDQzRFx1MDQzNVx1MDQ0MFx1MDQzMFx1MDQ0Nlx1MDQzOFx1MDQ0RiBzb3VyY2VtYXBzIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0M0VcdTA0NDJcdTA0M0JcdTA0MzBcdTA0MzRcdTA0M0FcdTA0MzhcclxuICAgICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgICAgLy8gXHUwNDFFXHUwNDQ3XHUwNDM4XHUwNDQxXHUwNDQyXHUwNDNBXHUwNDMwIFx1MDQzMlx1MDQ0Qlx1MDQ0NVx1MDQzRVx1MDQzNFx1MDQzRFx1MDQzRVx1MDQzOSBcdTA0MzRcdTA0MzhcdTA0NDBcdTA0MzVcdTA0M0FcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0MzggXHUwNDNGXHUwNDM1XHUwNDQwXHUwNDM1XHUwNDM0IFx1MDQ0MVx1MDQzMVx1MDQzRVx1MDQ0MFx1MDQzQVx1MDQzRVx1MDQzOVxyXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgICAgLy8gXHUwNDE0XHUwNDM4XHUwNDQwXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDRGIFx1MDQ0MVx1MDQzMVx1MDQzRVx1MDQ0MFx1MDQzQVx1MDQzOFxyXG4gICAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgLy8gXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDM4IFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0NDBcdTA0MzBcdTA0MzdcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDMwXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8vIFx1MDQyMFx1MDQzMFx1MDQzN1x1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzJcdTA0MzVcdTA0M0RcdTA0MzRcdTA0M0VcdTA0NDBcdTA0M0VcdTA0MzIgXHUwNDM4IFx1MDQzRVx1MDQ0MVx1MDQzRFx1MDQzRVx1MDQzMlx1MDQzRFx1MDQzRVx1MDQzM1x1MDQzRSBcdTA0M0FcdTA0M0VcdTA0MzRcdTA0MzBcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdzcmMvY29tcG9uZW50cycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdjb21wb25lbnRzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjL2Fzc2V0cycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdhc3NldHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyBcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzAgXHUwNDM4XHUwNDNDXHUwNDM1XHUwNDNEIFx1MDQ0NFx1MDQzMFx1MDQzOVx1MDQzQlx1MDQzRVx1MDQzMlxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnanMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGFzc2V0SW5mby5uYW1lIHx8ICcnXHJcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9IGZpbGVOYW1lLnNwbGl0KCcuJykucG9wKCkgfHwgJ2pzJ1xyXG5cclxuICAgICAgICAgICAgaWYgKC9cXC4oY3NzKSQvLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGBjc3MvW25hbWVdLVtoYXNoXS4ke2V4dH1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKC9cXC4ocG5nfGpwZT9nfGdpZnxzdmd8d2VicHxpY28pJC8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYGltYWdlcy9bbmFtZV0tW2hhc2hdLiR7ZXh0fWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL1xcLih3b2ZmMj98ZW90fHR0ZnxvdGYpJC8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYGZvbnRzL1tuYW1lXS1baGFzaF0uJHtleHR9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaF0uJHtleHR9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDM4IFx1MDQzQ1x1MDQzOFx1MDQzRFx1MDQzOFx1MDQ0NFx1MDQzOFx1MDQzQVx1MDQzMFx1MDQ0Nlx1MDQzOFx1MDQzOFxyXG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFosT0FBTyxVQUFVO0FBQy9hLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsd0JBQXdCO0FBTmpDLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxTQUFTLGVBQWUsZUFBZTtBQUVuRCxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsUUFBTztBQUFBLE1BQ0wsY0FBYyxDQUFDLG9DQUFvQztBQUFBLElBQ3JEO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsUUFDUCxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUFBLE1BQ3RDO0FBQUEsTUFDQSxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxpQkFBaUI7QUFBQSxRQUNmLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQSxjQUNFLFNBQVMsZUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVJQWNBO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxNQUVMLFdBQVc7QUFBQTtBQUFBLE1BRVgsYUFBYTtBQUFBO0FBQUEsTUFFYixRQUFRO0FBQUE7QUFBQSxNQUVSLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQTtBQUFBLFVBRU4sYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTztBQUFBLFlBQ1Q7QUFDQSxnQkFBSSxHQUFHLFNBQVMsZ0JBQWdCLEdBQUc7QUFDakMscUJBQU87QUFBQSxZQUNUO0FBQ0EsZ0JBQUksR0FBRyxTQUFTLFlBQVksR0FBRztBQUM3QixxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUE7QUFBQSxVQUVBLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQixDQUFDLGNBQWM7QUFDN0Isa0JBQU0sV0FBVyxVQUFVLFFBQVE7QUFDbkMsa0JBQU0sTUFBTSxTQUFTLE1BQU0sR0FBRyxFQUFFLElBQUksS0FBSztBQUV6QyxnQkFBSSxXQUFXLEtBQUssUUFBUSxHQUFHO0FBQzdCLHFCQUFPLHFCQUFxQixHQUFHO0FBQUEsWUFDakM7QUFDQSxnQkFBSSxrQ0FBa0MsS0FBSyxRQUFRLEdBQUc7QUFDcEQscUJBQU8sd0JBQXdCLEdBQUc7QUFBQSxZQUNwQztBQUNBLGdCQUFJLDBCQUEwQixLQUFLLFFBQVEsR0FBRztBQUM1QyxxQkFBTyx1QkFBdUIsR0FBRztBQUFBLFlBQ25DO0FBQ0EsbUJBQU8sd0JBQXdCLEdBQUc7QUFBQSxVQUNwQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLGVBQWU7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
