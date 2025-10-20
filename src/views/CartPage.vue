<template>
<div class="container">

    <div class="checkOutContainer">  
    <!--make the list here to be append into this class
        
        <p> Your total</p>
        -->
    <div class ="list">
        <div v-if="cart.length === 0" class="empty"> 
        <p>Nothing is in the cart</p>
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

const warning = "Cant Checkout with nothing!";
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
    height: 130%;
    width: 75%;
    position: relative;
    margin: auto;
    background-color: #94B0DA;

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

</style>