import { ref, computed, watch } from 'vue';

const key = 'cartStorage';

function loadCart() {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
}

//this is needed to have one cart for the entire thing
const cart = ref(loadCart());

export function useCart() {
  watch(cart,
    (newCart) => {
      localStorage.setItem(key, JSON.stringify(newCart));
    },
    { deep: true }
  )

  const addToCart = (book) => {
    const existingItem = cart.value.find((item) => item.title === book.title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = {
        title: book.title,
        image: book.imageSrc || '',
        desc: book.description || '',
        price: book.price || 0,
        quantity: 1
      };
      cart.value.push(newItem);
    }
  };

  // Update quantity of a book
  const updateQuantity = (bookTitle, amount) => {
    const item = cart.value.find((item) => item.title === bookTitle);
    if (item) {
      item.quantity += amount;
      if (item.quantity <= 0) {
        removeFromCart(bookTitle);
      }
    }
  };

  // Removes book
  const removeFromCart = (bookTitle) => {
    cart.value = cart.value.filter((item) => item.title !== bookTitle);
  };

  // Clears cart
  const clear = () => {
    cart.value = [];
    localStorage.removeItem(key);
  };
  
  return {
    cart,
    addToCart,// Shows the function
    clear,
    removeFromCart,
    updateQuantity 
  };

}
