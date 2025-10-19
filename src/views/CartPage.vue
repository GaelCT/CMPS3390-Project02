<template>
<div class="container">
<br>
    <div class="checkOutContainer">  
    <!--make the list here to be append into this class
        
        <p> Your total</p>
        -->
    <div class ="list">
        <ul> 
            <li v-for="(item,index)" in cart :key="index"> {{ item }} </li>
        </ul>
    
    </div>   
  
         
        
    </div>
    <br>
        <button @click="clearCart"> Checkout Button</button>
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
        this.cart.push(newCartItem); 
      },
    
    clearCart(){
        const clearall = 'No more items ${this.cart.length = ""}'
        this.cart.pop(clearall);
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

</style>