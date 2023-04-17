<script setup>
import { RouterLink } from "vue-router";
import AppHeaderNav from "./app-header-nav.vue";
import AppHeaderCart from "./app-header-cart.vue";
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">ShoeShop</RouterLink>
      </h1>
      <AppHeaderNav />
      <AppHeaderCart />
    </div>
  </header>
</template>

<style scoped lang="less">
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;

    a {
      display: block;
      height: 60px;
      margin: 10px 0;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo-200.png") no-repeat center 0 / contain;
    }
  }

  .app-header-nav {
    width: 1100px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: @ssColor;
          border-bottom: 1px solid @ssColor;
        }
      }
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
