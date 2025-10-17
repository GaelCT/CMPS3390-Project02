
<template>
    <div> 
        <ul> 
            <li v-for="nav in navItems">
                {{ nav }}    

            </li>
        </ul>
    </div>
    
    
    <head> 
        <body> 
            <ul> 
                <li><a href ="http://localhost:5173/"> Home </a> </li>
                <li><a href =#add the search page> Search </a> </li>
                <li><a href =#add the shopping page> Shopping </a> </li>
            </ul>
        </body>
    </head>
</template>

<script> 
    export default{
        data(){
            return{
            navItems:['Home', 'Search','Cart']
        }
    }
    }

</script>
<style scoped>
li{
    display: inline;
    width: 100px;
    background-color: black;
    color: white;
    padding: 10px;
    margin: 5px;

}

li

</style>