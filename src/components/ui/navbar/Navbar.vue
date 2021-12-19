<template>
  <va-navbar color="#ffffff">
    <template #left>
      <va-navbar-item>
        <img src="../../../assets/azul_blau_black.png" alt="Azul Blau Logo" />
      </va-navbar-item>
    </template>

    <template #right>
      <va-navbar-item>
        <IconProfile />
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
import "./style.scss";
import IconProfile from "./icon-profile/IconProfile.vue";

export default {
  name: "Navbar",
  components: {
    IconProfile,
  },
  setup() {},
};
</script>
