<template>
  <div class="icon-container">
    <div class="icon-container__image">
      <!-- <img v-if="token && token === 'jfe.sarco@gmail.com'" alt="azul-blau" :src="IconJS" /> -->
      <img alt="azul-blau" :src="IconNF" />
    </div>
  </div>
</template>

<script>
import "./style.scss";
// import IconJS from "../../../../assets/avatar_js.png";
import IconNF from "../../../../assets/avatar_nf.png";
// import { onMounted } from '@vue/runtime-core';
// import { authPlugin } from "../../../../auth/index"


export default {
  name: "IconProfile",
  components: {},
  setup() {

    let token = null;

    // onMounted(async () => {
    //   token = await authPlugin.getIdTokenClaims();
      
    // });
    
    return {
        token,
        IconNF
    };
  },
};
</script>
