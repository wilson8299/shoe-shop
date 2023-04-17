import useCartStore from "./cart";
import useAddressStore from "./address";
import useOrderStore from "./order";

const useStore = () => {
  return {
    cart: useCartStore(),
    address: useAddressStore(),
    order: useOrderStore(),
  };
};

export default useStore;
