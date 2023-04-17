import { defineStore } from "pinia";

const useCartStore = defineStore("cart", {
  persist: {
    key: "shoe-shop-cart",
  },
  state: () => ({
    list: [],
  }),
  getters: {
    effectiveList() {
      return this.list.filter((v) => v.count > 0 && v.isEffective);
    },
    effectiveListCounts() {
      return this.effectiveList.reduce((sum, item) => sum + item.count, 0);
    },
    effectiveListPrice() {
      return this.effectiveList
        .reduce((sum, item) => sum + item.count * Number(item.price), 0)
        .toFixed(2);
    },
    isAllSelected() {
      return (
        this.effectiveList.length !== 0 &&
        this.effectiveList.every((item) => item.selected)
      );
    },
    selectedList() {
      return this.effectiveList.filter((item) => item.selected);
    },
    selectedListCounts() {
      return this.selectedList.reduce((sum, item) => sum + item.count, 0);
    },
    selectedListPrice() {
      return this.selectedList
        .reduce((sum, item) => sum + item.count * Number(item.price), 0)
        .toFixed(2);
    },
  },
  actions: {
    async addCart(data) {
      const { skuId, count } = data;
      const goodsItem = this.list.find((item) => item.skuId === skuId);
      if (!goodsItem) {
        this.list.unshift(data);
      } else {
        goodsItem.count += count;
      }
    },
    async getCartList() {
      this.list.forEach(async (cartItem) => {});
    },
    async deleteCart(skuIds) {
      this.list = this.list.filter((item) => !skuIds.includes(item.skuId));
    },
    async deleteCartBySelected() {
      this.list = this.list.filter((item) => !item.selected);
    },
    async updateCart(skuId, data) {
      const { selected, count } = data;
      const cartItem = this.list.find((item) => item.skuId === skuId);
      if (cartItem) {
        if (count !== undefined) cartItem.count = count;
        if (selected !== undefined) cartItem.selected = selected;
      }
    },
    async updateCartAllSelected(data) {
      const { selected } = data;
      this.list.forEach((item) => {
        item.selected = selected;
      });
    },
    clearCart() {
      this.list = [];
    },
  },
});

export default useCartStore;
