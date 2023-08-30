<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import CategoryItem from "./components/CategoryItem.vue";
import shoe from "@/mock/shoe.json";

const {
  params: { id },
} = useRoute();
const shoes = ref();

onMounted(async () => {
  shoes.value = shoe.data.filter((s) => s.brand === id);
});
</script>

<template>
  <div class="category container">
    <div class="items">
      <category-item v-for="goods in shoes" :goods="goods" :key="goods.id" />
    </div>
  </div>
</template>

<style scoped lang="less">
.category {
  padding: 30px 0;

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 50px;
  }
}
</style>
