<script setup>
import search from './componets/Search.vue';
//mport { CContainer } from '@coreui/vue'
//import Home from './Home src/Home.vue';

</script>

<template>
  <div> 
    <nav :style = "{ backgroundColor: 'black', color: 'white', padding: '10px',
      fontFamily: 'arial', fontSize: '40'
    }">
      <router-link to="/home">Home</router-link>
      <router-link to="/Search">Search</router-link>
      <!-- This will be the last page, which will be the shopping cart-->
    </nav>
    <router-view /> <!-- This will display the HomePage
    <main> </main>
    
    
    -->
  </div>
  
  
    

 

  <!--
  <div>
    <h1>Search for a book!</h1>
    <search />
  </div>
-->
</template>

<style scoped>

.nav{
  
}
</style>
