<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emit = defineEmits();

const checked = ref(false);

const toggleCheck = () => {
  checked.value = !checked.value;
  emit("update:modelValue", checked.value);
  emit("change", checked.value);
};

watch(
  () => props.modelValue,
  () => {
    checked.value = props.modelValue;
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="checkbox" @click="toggleCheck">
    <div class="border">
      <font-awesome-icon class="icon-checked" v-if="checked" :icon="['fas', 'check']" />
    </div>
    <span class="text">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="less">
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 2px;

  .border {
    border: 1px solid @ssColor;
    width: 16px;
    height: 16px;
    font-size: 16px;

    .icon-checked {
      color: @ssColor;
      padding-bottom: 4px;
    }
  }

  .text {
    margin-left: 6px;
    user-select: none;
  }
}
</style>
