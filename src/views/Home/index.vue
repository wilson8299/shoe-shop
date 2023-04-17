<script setup name="Home">
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new.vue";
import HomeHot from "./components/home-hot.vue";
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <HomeBanner />
      </div>
    </div>
    <HomeNew />
    <HomeHot />
  </div>
</template>

<style lang="less" scoped></style>
