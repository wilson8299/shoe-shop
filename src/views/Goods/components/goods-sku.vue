<script setup>
const props = defineProps({
  goods: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["change"]);

const clickSpecs = (item, val) => {
  if (val.disabled) return false;

  if (val.selected) {
    val.selected = false;
  } else {
    item.values.forEach((bv) => {
      bv.selected = false;
    });
    val.selected = true;
  }

  if (val.selected) {
    emit("change", {
      size: val.name,
    });
  } else {
    emit("change", null);
  }
};
</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>Size :</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <span
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
            >{{ val.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin() {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: @ssColor;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    dt {
      width: 50px;
      color: #999;
      font-size: 20px;
    }

    dd {
      flex: 1;
      color: #666;
      > span {
        display: inline-block;
        height: 50px;
        width: 60px;
        margin: 10px 0;
        text-align: center;
        padding-top: 10px;
        font-size: 20px;
        font-weight: 600;
        .sku-state-mixin();
      }
    }
  }
}
</style>
