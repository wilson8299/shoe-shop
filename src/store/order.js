import { defineStore } from "pinia";

const useOrderStore = defineStore("order", {
  persist: {
    key: "shoe-shop-order",
  },
  state: () => ({
    list: [],
  }),
  getters: {
    getOrder() {
      return this.list;
    },
  },
  actions: {
    async addOrder(data) {
      this.list.unshift(data);
    },
  },
});

export default useOrderStore;
