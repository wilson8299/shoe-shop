<script setup>
import useStore from "@/store";
import shoe from "@/mock/shoe.json";
import GoodsImage from "./components/GoodsImage";
import GoodsSku from "./components/GoodsSku";
import { useToast } from "vue-toastification";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { params } = useRoute();
const id = params.id;
const goods = ref(null);
const toast = useToast();

onMounted(async () => {
  goods.value = shoe.data.filter((s) => s.id === id)[0];
  goods.value.images = [
    `https://vtjoho.b-cdn.net/shoeshop/${goods.value.id}_1.png`,
    `https://vtjoho.b-cdn.net/shoeshop/${goods.value.id}_2.png`,
    `https://vtjoho.b-cdn.net/shoeshop/${goods.value.id}_3.png`,
  ];
});

const count = ref(1);
const countMax = computed(() => {
  if (!goods.value) return 1;
  goods.value.inventory = parseInt(goods.value.inventory);
  return goods.value.inventory > 0 ? goods.value?.inventory : 1;
});

const size = ref("");
const changeSku = (value) => {
  size.value = value;
};

const { cart } = useStore();

const addCart = () => {
  if (!size.value) {
    toast.info("請選擇正確的商品尺寸與數量", {
      timeout: 3000,
    });
    return;
  }
  if (!goods.value) return;

  const cartItem = {
    skuId: goods.value.id + size.value.size,
    id: goods.value.id,
    name: goods.value.name,
    price: goods.value.price,
    size: size.value.size,
    count: count.value,
    selected: true,
    isEffective: true,
  };

  cart.addCart(cartItem);
};
</script>

<template>
  <div class="ss-goods-page">
    <div class="container">
      <div class="goods-info" v-if="goods">
        <div class="media">
          <div class="goods-image">
            <goods-image :images="goods.images" />
          </div>
          <ul class="goods-sales">
            <li>
              <p>商品銷量</p>
              <p>100+</p>
              <p><i class="iconfont icon-task-filling"></i>人氣</p>
            </li>
            <li>
              <p>商品評價</p>
              <p>200+</p>
              <p><i class="iconfont icon-comment-filling"></i>評價</p>
            </li>
            <li>
              <p>商品收藏</p>
              <p>80+</p>
              <p><i class="iconfont icon-favorite-filling"></i>收藏</p>
            </li>
            <li>
              <p>品牌資訊</p>
              <p>99+</p>
              <p><i class="iconfont icon-dynamic-filling"></i>品牌</p>
            </li>
          </ul>
        </div>
        <div class="spec">
          <div class="goods-main">
            <p class="goods-name">{{ goods.name }}</p>
            <p class="goods-price">
              <span>{{ goods.price }}</span>
            </p>
          </div>
          <goods-sku :goods="goods" @change="changeSku" />
          <ss-count is-label v-model="count" :min="1" :max="countMax" />
          <ss-button
            @click="addCart"
            size="middle"
            type="primary"
            style="margin-top: 40px"
          >
            加入購物車
          </ss-button>
        </div>
      </div>
      <div class="goods-footer" v-if="goods">
        <div class="goods-article">
          <h2>商品詳情</h2>
          <p>{{ goods.name }}</p>
          <ul>
            <li v-for="img in goods.images" :key="img">
              <img :src="img" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  margin-top: 20px;
}

.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  .media {
    width: 700px;
    height: 600px;
    padding: 30px 50px;
  }

  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;

  li {
    flex: 1;
    position: relative;

    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: "";
    }

    p {
      &:first-child {
        color: #999;
      }

      &:nth-child(2) {
        color: @priceColor;
        margin-top: 10px;
      }

      &:last-child {
        color: #666;
        margin-top: 10px;

        i {
          color: @ssColor;
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: @ssColor;
          cursor: pointer;
        }
      }
    }
  }
}

.spec {
  .goods-name {
    font-size: 22px;
  }

  .goods-desc {
    color: #999;
    margin-top: 10px;
  }

  .goods-price {
    margin-top: 10px;
    span {
      color: @priceColor;
      margin-right: 10px;
      font-size: 22px;
      &::before {
        content: "$";
        font-size: 14px;
      }
    }
  }
}

.goods-footer {
  display: flex;
  margin: 20px 0;

  .goods-article {
    width: 100%;
    padding: 0 30px;
    min-height: 350px;
    background: #fff;

    p {
      font-size: 24px;
    }

    li {
      text-align: center;
    }
  }
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
