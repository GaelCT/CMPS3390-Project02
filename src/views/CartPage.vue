<template>
<div class="container">

    <div class="checkOutContainer">  

    <div class ="list">
        <div v-if="cart.length === 0" class="empty"> 
        <h2 id = "nothingInCart">NOTHING IS IN THE CART</h2>
        </div>
        <ul v-else> <!--Will need to see how to add books from 
            the API and use the gen random math to set price points -->
                <li v-for="item in cart" :key="item.id" class="book-in-cart">
                    <div class="item-info">
                        <h4> {{ item.title }} </h4>
                        <p class="item-price">{{ item.price }}</p>        
                    </div>
                </li>
            </ul>
        </div>   
    </div>
    <br>
        <button @click="ConfigureCart"> Checkout Button</button>
</div>
</template>

<script setup>
import { useCart } from '@/componets/useCart';

const { cart, clear } = useCart();

const warning = "You cannot checkout with nothing in your cart!";
const checkoutFinal = "Thank You For Shopping with _____"

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
    width: 75%;
    position: relative;
    margin: auto;
    background-color: white;
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
</style>