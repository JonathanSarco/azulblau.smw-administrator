<template>
  <div class="sidebar-container">
    <va-sidebar color="black" gradient minimizedWidth="64px" width="12rem">
      <va-sidebar-item>
        <router-link to="/">
          <va-sidebar-item-content active>
            <va-icon name="view_headline" />
            <va-sidebar-item-title>Posts </va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
      </va-sidebar-item>
      <va-sidebar-item>
        <router-link to="/posts">
          <va-sidebar-item-content>
            <va-icon name="add" />
            <va-sidebar-item-title>New post </va-sidebar-item-title>
          </va-sidebar-item-content>
        </router-link>
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
