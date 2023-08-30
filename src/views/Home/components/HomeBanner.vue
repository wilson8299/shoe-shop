<script setup>
const bannerList = [
  { imgUrl: "https://vtjoho.b-cdn.net/shoeshop/banner-1.jpeg" },
  { imgUrl: "https://vtjoho.b-cdn.net/shoeshop/banner-2.jpeg" },
  { imgUrl: "https://vtjoho.b-cdn.net/shoeshop/banner-3.jpeg" },
];
</script>

<template>
  <div class="home-banner">
    <ss-slider :sliders="bannerList" auto-play />
  </div>
</template>

<style scoped lang="less"></style>
