<script setup name="Home">
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <home-banner />
      </div>
    </div>
    <home-new />
    <home-hot />
  </div>
</template>

<style lang="less" scoped></style>
