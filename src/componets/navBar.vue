
<template>
    <div class = "navvvvvv"> 
        <ul> 
            <li v-for="nav in navItems">
               <!--<li v-if=""> </li>-->
                {{ nav }}    
            </li>
        </ul>
    </div>
    
    
   
</template>

<script> 
    export default{
        data(){
            return{
            navItems:['Home', 'Search','🛒']
        }
    }
    }

</script>
<style scoped>

.navvvvvv{
    display: inline;
    justify-content: center;
}
li{
    display: inline;
    width: 10px;
    
    color: white;
    
    margin: 10%;

}

ul{
    background-color: black;
    padding: 10px; 
    justify-content: center;

}

ul li a.active{
    background-color: darkgrey;

}

</style>