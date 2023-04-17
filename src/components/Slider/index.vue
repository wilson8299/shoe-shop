<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  sliders: {
    type: Array,
    default: () => [],
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
});

const curIndex = ref(0);
const timer = ref(-1);

const clearTimer = () => {
  window.clearInterval(timer.value);
};

const startTimer = () => {
  initLoop();
};

const initLoop = () => {
  if (!props.autoPlay) return false;
  timer.value = window.setInterval(() => {
    curIndex.value++;
    if (curIndex.value > props.sliders.length - 1) {
      curIndex.value = 0;
    }
  }, 2000);
};

const toggle = (step) => {
  clearInterval(timer.value);
  initLoop();

  const newIndex = curIndex.value + step;

  if (newIndex > props.sliders.length - 1) {
    curIndex.value = 0;
    return;
  }

  if (newIndex < 0) {
    curIndex.value = props.sliders.length - 1;
    return;
  }

  curIndex.value = newIndex;
};

onMounted(() => {
  initLoop();
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="box" style="height: 500px">
    <a @click="toggle(-1)" class="prev" href="javascript:;"
      ><font-awesome-icon :icon="['fas', 'arrow-left']"
    /></a>
    <a @click="toggle(1)" class="next" href="javascript:;"
      ><font-awesome-icon :icon="['fas', 'arrow-right']"
    /></a>
    <div class="slider" @mouseenter="clearTimer" @mouseleave="startTimer">
      <ul class="slider-body">
        <li
          class="slider-item"
          v-for="(item, index) in sliders"
          :key="index"
          :class="{ fade: curIndex === index }"
        >
          <img :src="item.imgUrl" alt="" />
        </li>
      </ul>
      <div class="slider-indicator">
        <span
          v-for="(item, index) in sliders"
          :key="index"
          @click="curIndex = index"
          :class="{ active: curIndex === index }"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.box {
  position: relative;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  font-size: 36px;
  z-index: 999;
  transform: translateY(-50%);
}

.prev {
  left: -6%;
}

.next {
  right: -6%;
}

.slider {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .slider {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .slider-btn {
      opacity: 1;
    }
  }
}
</style>
