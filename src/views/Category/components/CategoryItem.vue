<script setup>
defineProps({
  goods: Object,
  default: () => ({}),
});
</script>

<template>
  <div class="category-item">
    <router-link :to="`/goods/${goods.id}`">
      <div class="img-wrapper">
        <img :src="`https://vtjoho.b-cdn.net/shoeshop/${goods.id}_1.png`" alt="" />
      </div>
      <div class="text-wrapper">
        <p class="name ellipsis">{{ goods.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="less">
.category-item {
  display: grid;
  grid-template-rows: 260px 50px;
  grid-template-areas: "img" "text";
  padding: 20px 0;
  .hoverShadow();

  .img-wrapper {
    grid-area: img;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  .text-wrapper {
    grid-area: text;
    width: 100%;
    padding: 20px 0;

    p {
      font-size: 22px;
      text-align: center;
    }
  }
}
</style>
