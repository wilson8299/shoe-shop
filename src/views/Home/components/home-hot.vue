<script setup>
import { RouterLink } from "vue-router";
import HomePanel from "./home-panel.vue";
import shoe from "@/mock/shoe.json";

const newGoodsList = shoe.data.slice(4, 8);
</script>

<template>
  <div class="home-new">
    <HomePanel title="熱銷商品" sub-title="">
      <template #right><span></span></template>
      <ul class="goods-list">
        <li v-for="item in newGoodsList" :key="item.id">
          <RouterLink :to="`/goods/${item.id}`">
            <div class="img-wrapper">
              <img :src="`https://vtjoho.b-cdn.net/shoeshop/${item.id}_1.png`" alt="" />
            </div>
            <div class="text-wrapper">
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&dollar;{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;

  li {
    display: grid;
    grid-template-columns: 306px;
    grid-template-rows: 210px 50px;
    grid-template-areas: "img" "text";
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
      background: #d2e8f7;
      padding: 10px 20px;

      p {
        font-size: 22px;
        text-align: center;
      }
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>
