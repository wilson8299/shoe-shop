<script setup>
defineProps({
  size: {
    type: String,
    default: "middle",
  },
  type: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <button class="button ellipsis" :class="[size, type]">
    <slot></slot>
  </button>
</template>

<style scoped lang="less">
.button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}

.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}

.small {
  width: 100px;
  height: 32px;
}

.mini {
  width: 60px;
  height: 32px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}

.primary {
  border-color: @ssColor;
  background: @ssColor;
  color: #fff;
}

.plain {
  border-color: @ssColor;
  color: @ssColor;
  background: lighten(@ssColor, 50%);
}

.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
