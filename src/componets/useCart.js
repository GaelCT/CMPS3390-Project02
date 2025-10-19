import { ref, computed } from 'vue';

//this is needed to have one cart for the entire thing
const cart = ref([]);

export function useCart() {
  const addToCart = (item) => {
    cart.value.push(item);  
  };
  const remove = () => {
  cart.value = []; 
  };

  return {
    cart,
    addToCart,// Shows the function
    remove  
  };
}


