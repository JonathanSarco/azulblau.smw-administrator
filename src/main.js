import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import router from "./routes/index";
import store from "./store";
import "vuestic-ui/dist/vuestic-ui.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { setupAuth } from "./auth/index";
import { auth0options } from "./auth/config"
import VueUploadComponent from 'vue-upload-component'

const app = createApp(App);

function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
}

setupAuth(auth0options, callbackRedirect).then((auth) => {
  app
    .use(auth)
    .use(VuesticPlugin)
    .use(store)
    .use(router)
    .use(VueUploadComponent)
    .mount("#app");
});
