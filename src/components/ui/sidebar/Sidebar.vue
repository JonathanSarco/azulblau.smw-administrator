<template>
  <div class="sidebar-container">
    <va-sidebar color="dark" gradient minimizedWidth="64px" width="12rem">
      <va-sidebar-item>
        <va-sidebar-item-content active>
          <va-icon name="dashboard" />
          <va-sidebar-item-title> Dashboard </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="room" />
          <va-sidebar-item-title> Sidebar demo </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./style.scss";

export default {
  setup() {},
};
</script>
