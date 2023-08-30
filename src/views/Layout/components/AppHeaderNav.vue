<script setup>
import { RouterLink } from "vue-router";
const home = [
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "newbalance", name: "New Balance" },
];
</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <router-link to="/">首頁</router-link>
    </li>
    <template v-if="home.length > 0">
      <li v-for="item in home" :key="item.id">
        <router-link :to="`/category/${item.id}`">{{ item.name }}</router-link>
      </li>
    </template>
  </ul>
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 999;

  li {
    margin-right: 40px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
  }
}
</style>
