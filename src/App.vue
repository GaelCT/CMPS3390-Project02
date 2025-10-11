<script setup>
import search from './componets/Search.vue';
//import Home from './Home src/Home.vue';

</script>

<template>
  <Home>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/Search">Search</router-link>
    </nav>
    <router-view /> <!-- This will display the HomePage-->
  </Home>
  
  <div>
    <h1>Search for a book!</h1>
    <search />
  </div>

</template>

<style scoped></style>
