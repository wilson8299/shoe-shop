<script setup>
import { reactive, ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  images: Array,
  default: () => [],
});

const currIndex = ref(0);
const show = ref(false);
const layerPosition = reactive({
  left: 0,
  top: 0,
});
const largePosition = reactive({
  backgroundPositionX: 0,
  backgroundPositionY: 0,
});
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);

watch([elementX, elementY, isOutside], () => {
  show.value = !isOutside.value;

  const position = { x: 0, y: 0 };

  if (elementX.value < 100) position.x = 0;
  else if (elementX.value > 420) position.x = 320;
  else position.x = elementX.value - 100;

  if (elementY.value < 100) position.y = 0;
  else if (elementY.value > 300) position.y = 200;
  else position.y = elementY.value - 100;

  layerPosition.left = position.x + "px";
  layerPosition.top = position.y + "px";
  largePosition.backgroundPositionX = -1.5 * position.x + "px";
  largePosition.backgroundPositionY = -1.5 * position.y + "px";
});
</script>

<template>
  <div class="goods-image">
    <!-- <div
      v-show="show"
      class="large"
      :style="[{ backgroundImage: `url(${images[currIndex]})` }, largePosition]"
    ></div> -->
    <div class="middle" ref="target">
      <img :src="images[currIndex]" alt="" />
      <!-- <div v-show="show" class="layer" :style="layerPosition"></div> -->
    </div>
    <ul class="small">
      <li v-for="(img, i) in images" :key="img" :class="{ active: i === currIndex }">
        <img @mouseenter="currIndex = i" :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 600px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 100;

  .large {
    position: absolute;
    top: 0;
    left: 530px;
    width: 520px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f8f8f8;
  }

  .middle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 520px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    // cursor: move;

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }

  .small {
    width: 80px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid @ssColor;
      }
    }
  }
}
</style>
