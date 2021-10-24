import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import router from "./routes/index";
import store from "./store";
import "vuestic-ui/dist/vuestic-ui.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

createApp(App)
  .use(store)
  .use(VuesticPlugin)
  .use(router)
  .mount("#app");
