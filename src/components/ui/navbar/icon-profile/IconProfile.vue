<template>
  <div class="icon-container">
    <div class="icon-container__image">
      <!-- <img v-if="token && token === 'jfe.sarco@gmail.com'" alt="azul-blau" :src="IconJS" /> -->
      <img v-if="icon" alt="azul-blau" :src="icon" />
    </div>
  </div>
</template>

<script>
import "./style.scss";
import IconJS from "../../../../assets/avatar_js.png";
import IconNF from "../../../../assets/avatar_nf.png";
import { onMounted, ref } from "@vue/runtime-core";
import { authPlugin } from "../../../../auth/index";

export default {
  name: "IconProfile",
  components: {},
  setup() {
    let icon = ref(null);

    onMounted(() => {
      let user = authPlugin.user.value;
      icon.value = user.nickname === "jfe.sarco" ? IconJS : IconNF;
    });

    return {
      icon,
    };
  },
};
</script>
