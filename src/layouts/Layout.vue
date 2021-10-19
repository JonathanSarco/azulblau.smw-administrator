<template>
  <Navbar />
  <Sidebar />
</template>

<script>
import Navbar from "../components/ui/navbar/Navbar.vue";
import Sidebar from "../components/ui/sidebar/Sidebar.vue";

const Layout = {
  components: {
    Navbar,
    Sidebar,
  },
  setup() {},
};

export default Layout;
</script>
