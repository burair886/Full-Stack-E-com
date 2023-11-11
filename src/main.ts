import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

// Plugin
import quasar from "./plugins/quasar";

// Import Quasar css
import "./css/index.scss";

const myApp = createApp(App)
  .use(quasar)
  .use(router)
  .mount("#app"); // Assumes you have a <div id="app"></div> in your index.html
