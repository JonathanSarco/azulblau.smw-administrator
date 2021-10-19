<template>
  <div class="icon-container">
    <div class="icon-container__image">
      <img alt="azul-blau" :src="IconJS" />
    </div>
  </div>
</template>

<script>
import "./style.scss";
import IconJS from "../../../../assets/avatar_js.png";

export default {
  name: "IconProfile",
  components: {},
  setup() {
    return {
      IconJS,
    };
  },
};
</script>
