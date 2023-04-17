<script setup>
import AppTopnav from "./components/app-topnav.vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppHeaderSticky from "./components/app-header-sticky.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderSticky />
  <main class="app-body">
    <RouterView :key="$route.fullPath" />
  </main>
  <AppFooter />
</template>

<style>
.app-body {
  min-height: 800px;
}
</style>
