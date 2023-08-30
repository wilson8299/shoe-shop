<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li><router-link to="/order">我的訂單</router-link></li>
        <li><router-link to="/cart">購物車</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  background: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: @ssColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
