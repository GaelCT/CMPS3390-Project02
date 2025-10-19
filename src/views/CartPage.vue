<template>
<div class="container">

    <div class="checkOut">
    <br>
        <!--make the list here to be append into this class-->
        <button> Checkout Button</button> 
    
    </div>

</div>



</template>

<script>

</script>

<style scoped>
.checkOut{
    
    display: flex;
    justify-content: center;
    height: 50px;
    margin: auto;
    top: 0;
    left: 0;


}

button{

    background-color: rgb(100, 165, 226);
    border: 0;
    border-radius: 31.4159265359px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .141592659);
    color: black;
    padding: 10px 25px;
    position: absolute;
}

button:active {
    opacity: 0.8;
}

</style>