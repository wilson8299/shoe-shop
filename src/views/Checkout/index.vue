<script setup>
import useStore from "@/store";
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const { cart, address, order } = useStore();

const currAddress = reactive({
  receiver: null,
  phone: null,
  address: null,
});

const checkoutInfo = reactive({
  goods: null,
  summary: null,
});

const time = ref("不限時間: 週一至週日");

onMounted(async () => {
  checkoutInfo.goods = cart.selectedList;
  checkoutInfo.summary = {
    goodsCount: cart.selectedListCounts,
    totalPrice: cart.selectedListPrice,
    postFee: 60,
    totalPayPrice: (Number(cart.selectedListPrice) + 60).toFixed(2),
  };
  const { receiver, phone, address: addressInfo } = address.getAddress;
  currAddress.receiver = receiver;
  currAddress.phone = phone;
  currAddress.address = addressInfo;

  console.log(checkoutInfo.goods);
});

const router = useRouter();
const submitCheckout = async () => {
  if (!currAddress.receiver | !currAddress.phone | !currAddress.address) {
    toast.info("請填寫正確的收貨資訊", {
      timeout: 3000,
    });
    return;
  }

  const data = {
    orderId: new Date().getTime(),
    goods: checkoutInfo.goods,
    summary: checkoutInfo.summary,
    receiver: currAddress.receiver,
    phone: currAddress.phone,
    address: currAddress.address,
    deliveryTime: time,
    orderTime: new Date(),
    pay: "貨到付款",
  };

  order.addOrder(data);
  address.updateAddress(currAddress);
  cart.deleteCartBySelected();

  router.replace(`/order`);
};
</script>

<template>
  <div class="pay-checkout-page">
    <div class="container">
      <div class="wrapper" v-if="checkoutInfo.goods">
        <h3 class="box-title">收貨地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <ul v-if="currAddress">
                <li>
                  <span>收&ensp;件&ensp;人：</span>
                  <input
                    type="text"
                    name="receiver"
                    v-model="currAddress.receiver"
                    placeholder="收件人"
                  />
                </li>
                <li>
                  <span>聯絡電話：</span>
                  <input
                    type="text"
                    name="phone"
                    v-model="currAddress.phone"
                    placeholder="電話"
                  />
                </li>
                <li>
                  <span>收貨地址：</span>
                  <input
                    type="text"
                    name="address"
                    v-model="currAddress.address"
                    placeholder="收貨地址"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="box-title">商品資訊</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品資訊</th>
                <th width="170">單價</th>
                <th width="170">尺寸</th>
                <th width="170">數量</th>
                <th width="170">價格</th>
                <th width="170">應付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in checkoutInfo.goods" :key="item.skuId">
                <td>
                  <RouterLink :to="`/goods/${item.id}`" class="info">
                    <img
                      :src="`https://vtjoho.b-cdn.net/shoeshop/${item.id}_1.png`"
                      alt=""
                    />
                    <div class="right">
                      <p>{{ item.name }}</p>
                    </div>
                  </RouterLink>
                </td>
                <td>&dollar;{{ item.price }}</td>
                <td>{{ item.size }}</td>
                <td>{{ item.count }}</td>
                <td>&dollar;{{ item.price * item.count }}</td>
                <td>&dollar;{{ item.price * item.count }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="box-title">配送時間</h3>
        <div class="box-body time-box">
          <input
            type="radio"
            id="time1"
            v-model="time"
            name="time"
            value="不限時間: 週一至週日"
          />
          <label for="time1">不限時間: 週一至週日</label>
          <input
            type="radio"
            id="time2"
            v-model="time"
            name="time"
            value="工作日：週一至週五"
          />
          <label for="time2">工作日：週一至週五</label>
          <input
            type="radio"
            id="time3"
            v-model="time"
            name="time"
            value="週休：週六至週日"
          />
          <label for="time3">週休：週六至週日</label>
        </div>
        <h3 class="box-title">付款方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">貨到付款</a>
        </div>
        <h3 class="box-title">金額明細</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件數：</dt>
              <dd>{{ checkoutInfo.summary.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品總價：</dt>
              <dd>&dollar;{{ checkoutInfo.summary.totalPrice }}</dd>
            </dl>
            <dl>
              <dt>運<i></i>費：</dt>
              <dd>&dollar;{{ checkoutInfo.summary.postFee }}</dd>
            </dl>
            <dl>
              <dt>應付總額：</dt>
              <dd class="price">&dollar;{{ checkoutInfo.summary.totalPayPrice }}</dd>
            </dl>
          </div>
        </div>
        <div class="submit">
          <SsButton @click="submitCheckout" type="primary">提交訂單</SsButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.pay-checkout-page {
  padding: 30px 0;
}

.wrapper {
  background: #fff;
  padding: 0 20px;
  .box-title {
    font-size: 16px;
    font-weight: normal;
    padding-left: 10px;
    line-height: 70px;
    border-bottom: 1px solid #f5f5f5;
  }
  .box-body {
    padding: 20px 0;
  }
}
.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    > ul {
      flex: 1;
      padding: 20px;

      li {
        padding: 10px 0;
        span {
          color: #999;
          margin-right: 5px;

          > i {
            width: 0.5em;
            display: inline-block;
          }
        }

        input {
          width: 40%;
          border: 1px solid gray;
          padding: 6px;
          border-radius: 3px;
        }
      }
    }

    > a {
      color: @ssColor;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    width: 420px;
    text-align: center;

    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  .info {
    display: flex;
    text-align: left;
    font-size: 16px;
    align-items: center;

    img {
      width: 80px;
      height: 50px;
      margin-right: 20px;
    }

    .right {
      line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }
  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.time-box {
  display: flex;
  flex-direction: row;
  gap: 20px;

  > input {
    display: none;

    &:checked {
      + label {
        border: 1px solid @ssColor;
      }
    }
  }

  > label {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    justify-content: center;
    width: 228px;
    height: 50px;
    cursor: pointer;
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: @ssColor;
  }
}
.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 20px;
        color: @priceColor;
      }
    }
  }
}
.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}
</style>
