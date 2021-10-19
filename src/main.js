import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import router from "./routes/index";
import "vuestic-ui/dist/vuestic-ui.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

createApp(App)
  .use(VuesticPlugin)
  .use(router)
  .mount("#app");
