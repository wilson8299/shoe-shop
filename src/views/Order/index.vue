<script setup>
import { ref, onMounted } from "vue";
import OrderItem from "./components/OrderItem.vue";
import useStore from "@/store";

const { order } = useStore();

const orderListInfo = ref(null);

onMounted(async () => {
  orderListInfo.value = order.getOrder;
});
</script>

<template>
  <div class="order">
    <div v-if="orderListInfo?.length !== 0" class="order-list container">
      <order-item v-for="item in orderListInfo" :key="item.orderId" :order="item" />
    </div>
    <div v-else class="empty-order container">
      <p>目前沒有訂單</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.order {
  padding: 30px 0;
}
.order-list {
  background-color: #fff;
  padding: 20px;
}

.empty-order {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px 0;

  p {
    color: gray;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>
