<template>
  <div class="login-container">
    <div class="form-container">
      <div class="title-container">
        <div class="image">
          <img src="../../assets/azul_blau_black.png" alt="" />
        </div>

        <div class="subtitle">
          <hr class="line-before-grow">
          <p class="text-before-grow">searching murals worldwide</p>
        </div>

      </div>

        <div class="button-container">
        <button class="login-button" @click="onLoginCLick">login</button>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
import { authPlugin } from '../../auth/index';
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'Login',
  components: {},
  setup() {
    const onLoginCLick = () => {
      authPlugin.loginWithRedirect();
    };

    onMounted(() => {
      setTimeout(() => {
        document.querySelector('hr').classList.add('line-after-grow')
        document.querySelector('p').classList.add('text-after-grow')
      }, 50);
          
    });

    return {
      onLoginCLick,
    };
  },
};
</script>
