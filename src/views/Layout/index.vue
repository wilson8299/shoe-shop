<script setup>
import AppTopnav from "./components/AppTopnav.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeaderSticky from "./components/AppHeaderSticky.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <app-topnav />
  <app-header />
  <app-header-sticky />
  <main class="app-body">
    <router-view :key="$route.fullPath" />
  </main>
  <app-footer />
</template>

<style>
.app-body {
  min-height: 800px;
}
</style>
