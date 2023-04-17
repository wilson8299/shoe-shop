<script setup>
const props = defineProps({
  order: {
    type: Object,
    default: null,
  },
});
</script>

<template v-if="order">
  <div class="order-item">
    <div class="head">
      <span>訂單編號：{{ order.orderId }}</span>
      <span>下單時間：{{ new Date(order.orderTime).toLocaleString() }}</span>
    </div>
    <div class="order-detail">
      <div class="column goods">
        <ul>
          <li v-for="item in order.goods" :key="item.id">
            <RouterLink :to="`/goods/${item.id}`">
              <span class="image" href="javascript:;">
                <img
                  :src="`https://vtjoho.b-cdn.net/shoeshop/${item.id}_1.png`"
                  :alt="item.name"
                />
              </span>
              <div class="info">
                <p class="name">
                  {{ item.name }}
                </p>
              </div>
            </RouterLink>
            <div class="price">&dollar;{{ item.price }}</div>
            <div class="price">size: {{ item.size }}</div>
            <div class="count">x&nbsp;{{ item.count }}</div>
            <div class="delivery">配送：&nbsp;{{ order.deliveryTime }}</div>
            <div class="pay">{{ order.pay }}</div>
          </li>
        </ul>
      </div>
      <div class="column amount">
        <p>總金額&nbsp;&nbsp;</p>
        <p class="red">&dollar;{{ order.summary.totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.order-item {
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;

  .head {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background: #f5f5f5;
    padding: 0 20px;
  }

  .order-detail {
    display: flex;
    align-items: stretch;

    .column {
      border-left: 1px solid #f5f5f5;
      text-align: center;
      padding: 20px;

      > p {
        padding-top: 10px;
      }

      &:first-child {
        border-left: none;
      }

      &.goods {
        flex: 1;
        padding: 0;
        align-self: center;
        ul {
          li {
            border-bottom: 1px solid #f5f5f5;
            padding: 10px;
            display: flex;
            align-items: center;

            a {
              display: flex;
              align-items: center;
            }

            &:last-child {
              border-bottom: none;
            }

            .image {
              display: flex;
              align-items: center;
              width: 90px;
              height: 70px;
            }

            .info {
              width: 220px;
              text-align: left;
              padding: 0 10px;
            }

            .price {
              width: 100px;
            }

            .count {
              width: 100px;
            }

            .delivery {
              width: 200px;
            }

            .pay {
              width: 100px;
            }
          }
        }
      }
      &.amount {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;

        .red {
          color: @priceColor;
        }
      }
    }
  }
}
</style>
