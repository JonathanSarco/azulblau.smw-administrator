<template>
  <div class="icon-container">
    <div class="icon-container__image">
      <img v-if="icon" alt="azul-blau" :src="icon" @click="openDropDown" />
    </div>
    <div class="icon-container__logout" v-if="isDropdownOpen">
      <ul class="dropdown-content">
        <li @click="onLogout">Logout</li>
      </ul>
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
    const isDropdownOpen = ref(false);

    onMounted(() => {
      let user = authPlugin.user.value;
      icon.value = user && user.nickname === "jfe.sarco" ? IconJS : IconNF;
    });

    const openDropDown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const onLogout = () => {
      openDropDown();
      authPlugin.logout();
    };

    return {
      icon,
      isDropdownOpen,
      openDropDown,
      onLogout,
    };
  },
};
</script>
