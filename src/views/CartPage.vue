<template>
<div class="container">
<br>
    <div class="checkOut">
    <br>
        <!--make the list here to be append into this class-->
        <button @click="clear"> Checkout Button</button> 
    
    </div>

</div>



</template>

<script >
export default {
    data(){
        return{
            cart: []
    }
},
methods: {
    addtoCart() {
        const newCartItem = 'New Item ${this.cart.length + 1}';
        this.addtoCart.push(newCartItem); 
      },
    
    clearCart(){
        const clearall = 'No more items ${this.cart.length * 0}'
        this.clearCart.push(clearall);
    }  
   },
};

</script>

<style scoped>
.container{
    width: 90%;
    height: 200px;
    margin: 20px auto;
    padding: 1%;
}

body{

}

.checkOut{
    
    display: flex;
    justify-content: center;
    height: 25%;
    width: 70%;
    position: relative;
    margin: auto;

}

button{

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

</style>