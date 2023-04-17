import { defineStore } from "pinia";

const useAddressStore = defineStore("address", {
  persist: {
    key: "shoe-shop-address",
  },
  state: () => ({
    receiver: null,
    phone: null,
    address: null,
  }),
  getters: {
    getAddress() {
      return {
        receiver: this.receiver,
        phone: this.phone,
        address: this.address,
      };
    },
  },
  actions: {
    async updateAddress(data) {
      const { receiver, phone, address } = data;
      this.receiver = receiver;
      this.phone = phone;
      this.address = address;
    },
  },
});

export default useAddressStore;
