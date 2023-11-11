import path from "path";
import components from "unplugin-vue-components/vite";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    components({ directoryAsNamespace: true }),
    quasar({
      autoImportComponentCase: "combined",
      sassVariables: "src/css/quasar-variables.sass",
    }),
  ],
});
