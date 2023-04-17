<script setup>
import useStore from "@/store";
import shoe from "@/mock/shoe.json";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

const { cart } = useStore();
const { effectiveListCounts, selectedListCounts, selectedListPrice } = storeToRefs(cart);

const changeSeleted = (skuId, selected) => {
  cart.updateCart(skuId, { selected: selected });
};

const changeCount = (skuId, count) => {
  cart.updateCart(skuId, { count: count });
};

const countMax = (id) => {
  const inventory = shoe.data.filter((s) => s.id === id)[0].inventory;
  return Number(inventory);
};

const isAllSelected = computed({
  get() {
    return cart.isAllSelected;
  },
  set(selected) {
    cart.updateCartAllSelected({ selected: selected, ids: [] });
  },
});

const router = useRouter();

const goToCheckout = () => {
  if (cart.selectedListCounts === 0) {
    return;
  }
  router.push("/checkout");
};
</script>

<template>
  <div class="ss-cart-page">
    <div class="container">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <SsCheckbox v-model="isAllSelected">全選</SsCheckbox>
              </th>
              <th width="400">商品資訊</th>
              <th width="220">單價</th>
              <th width="220">尺寸</th>
              <th width="180">數量</th>
              <th width="180">價格</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.effectiveList" :key="item.skuId">
              <td>
                <SsCheckbox
                  :model-value="item.selected"
                  @change="(selected) => changeSeleted(item.skuId, selected)"
                />
              </td>
              <td>
                <div class="goods">
                  <RouterLink :to="`/goods/${item.id}`">
                    <img
                      :src="`https://vtjoho.b-cdn.net/shoeshop/${item.id}_1.png`"
                      :alt="item.name"
                    />

                    <div>
                      <p class="name ellipsis">
                        {{ item.name }}
                      </p>
                    </div>
                  </RouterLink>
                </div>
              </td>
              <td class="tc">
                <p>&dollar;{{ item.price }}</p>
              </td>
              <td class="tc">
                <p>{{ item.size }}</p>
              </td>
              <td class="tc">
                <SsCount
                  :model-value="item.count"
                  @change="(count) => changeCount(item.skuId, count)"
                  :min="1"
                  :max="countMax(item.id)"
                />
              </td>
              <td class="tc">
                <p class="f16 red">
                  &dollar;{{ (item.count * Number(item.price)).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <p>
                  <a
                    @click="cart.deleteCart([item.skuId])"
                    class="green"
                    href="javascript:;"
                  >
                    刪除
                  </a>
                </p>
              </td>
            </tr>
            <tr v-if="cart.effectiveList.length === 0">
              <td colspan="6">
                <div class="cart-none" style="text-align: center">
                  <p>購物車內暫時沒有商品</p>
                  <div class="btn" style="margin: 20px">
                    <SsButton @click="$router.push('/')" type="primary">
                      繼續逛逛
                    </SsButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="action">
        <div class="batch"></div>
        <div class="total">
          共 {{ effectiveListCounts }} 件有效商品， 以選擇 {{ selectedListCounts }} 件，
          商品總額：
          <span class="red">&dollar;{{ selectedListPrice }}</span>
          <SsButton @click="goToCheckout" type="primary">下單</SsButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tc {
  text-align: center;
  .ss-numbox {
    margin: 0 auto;
    width: 120px;
  }
}

.red {
  color: @priceColor;
}
.green {
  color: @ssColor;
}

.f16 {
  font-size: 16px;
}

.goods {
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 100px;
    height: 60px;
  }

  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;

  .ss-checkbox {
    color: #999;
  }

  .batch {
    a {
      margin-left: 20px;
    }
  }

  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}

.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}

.ss-cart-page {
  margin-top: 40px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        padding: 20px 0;
      }
    }
  }
}
</style>
