<template>
  <div class="login-container">
    <div class="form-container">
      <div class="icon-container">
        <img src="../../assets/azul_blau_black.png" alt="" />
      </div>
      <div class="button-container">
        <button class="login-button" @click="onLoginCLick">sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { authPlugin } from "../../auth/index";

export default {
  name: "Login",
  components: {},
  setup() {
    const onLoginCLick = () => {
      authPlugin.loginWithRedirect();
    };

    return {
      onLoginCLick,
    };
  },
};
</script>
