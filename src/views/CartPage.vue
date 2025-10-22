<template>
    <div class="container">

        <div class="checkOutContainer">  

            <div class="list">

                <div v-if="cart.length === 0" class="empty"> 
                    <h2 id="nothingInCart">NOTHING IS IN THE CART</h2>
                </div>

                <ul v-else>
                    <li v-for="(item, index) in cart" :key="index" class="book-in-cart">
                        <div class="item-info">
                            <h4>{{ item.title }}</h4>
                            <p>${{ item.price }} each</p>
                            <img :src="item.image" class="card-image" />

                            <div class="Quantity">
                                <button @click="updateQuantity(item.title, -1)" class="button-left"> - </button>
                                <span class="QuantityOfBooks">{{ item.quantity }} </span>
                                <button @click="updateQuantity(item.title, 1)" class="button-right"> + </button>
                            </div>

                            <p class="totalPricePerbook">Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>

                            <button @click="removeFromCart(item.title)">Remove</button>
                        </div>
                    </li>
                   <!-- <p class="totalPriceFforallbooks">Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>-->
                </ul>
            </div>   
        </div>

    <br>
    <button @click="ConfigureCart">Checkout</button>
    </div>
</template>

<script setup>
import { useCart } from '@/componets/useCart';
import Search from '@/componets/Search.vue';
//const {  } = getCover();
const { cart, clear, updateQuantity, removeFromCart} = useCart();

const warning = "You cannot checkout with nothing in your cart!";
const checkoutFinal = "Thank You For Shopping with Books"

const ConfigureCart = () => {
    if(cart.value.length === 0){
      return alert(warning);  
    } 
    
    if(cart.value.length != 0){
        clear();
        return alert(checkoutFinal);
    } 
}


</script>

<style scoped>
.container{
    width: 90%;
    height: 200px;
    margin: 20px auto;
    padding: 1%;
}

.checkOutContainer{
    border-radius: 2.71828%;
    display: flex;
    justify-content: center;
    height: auto;
    width: 75%; 
    position: relative;
    margin: auto;
    background-color: #94B0DA;
    padding: 10%;
}

.list{
    display: flex;
    justify-content: center;
    height: auto;
    width: 85%;
    position: relative;
    margin: auto;
    background-color: beige;
    border-radius: 3%;
}

button{
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: rgb(100, 165, 226);
    border: 0;
    border-radius: 31.4159265359px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .141592659);
    color: black;
    padding: 10px 55px;
    position: relative;
    margin-bottom: 10%;
}

button:active {
    opacity: 0.8;
}

.empty{
  text-align: center;
  padding: 40px;
  color: grey;
  font-size: 18px;
}

#nothingInCart{
    text-align: center;
    font-family: Verdana;
    font-style: bold;

}
img.card-image {
   display: flex;
   justify-content: center;
   max-width: 40%;
   height: 50%; 
   border-radius: 4px;
   margin: auto;
   margin-bottom: 15px;
}

button.button-left{
    float:left;
}

button.button-right{
    float:right;
}

span.QuantityOfBooks{
    font-family: Verdana;
    font-size: larger;

}

.Quantity{
    display: flex;     
}

.totalPricePerbook{
    padding: 0%;
    margin: 0%;
}


</style>