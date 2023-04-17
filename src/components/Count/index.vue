<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  isLabel: {
    type: Boolean,
    default: false,
  },
  max: {
    type: Number,
  },
  min: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits();
const num = ref(props.min);

const add = () => {
  if (num.value === props.max) {
    return false;
  }
  num.value++;
  emit("update:modelValue", num.value);
  emit("change", num.value);
};

const des = () => {
  if (num.value === props.min) {
    return false;
  }
  num.value--;
  emit("update:modelValue", num.value);
  emit("change", num.value);
};

watch(
  () => {
    return props.modelValue;
  },
  () => {
    num.value = props.modelValue;
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="numbox">
    <div class="label" v-if="isLabel">數量</div>
    <div class="numbox">
      <a href="javascript:;" @click="des">-</a>
      <input type="text" readonly :value="num" />
      <a href="javascript:;" @click="add">+</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.numbox {
  display: flex;
  align-items: center;

  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }

  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;

    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;

      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }

      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }

    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
