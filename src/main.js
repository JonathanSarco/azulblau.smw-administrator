import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import router from "./routes/index";
import store from "./store";
import "vuestic-ui/dist/vuestic-ui.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { setupAuth } from "./auth/index";

/* eslint-disable no-undef */
export const auth0options = {
  domain: "dev-1c3ws2jm.us.auth0.com",
  client_id: "wWE43uRE11GBvpnWgJuKqjn0HlL8PHSW",
  redirect_uri: "http://localhost:8080",
};

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
    .mount("#app");
});
