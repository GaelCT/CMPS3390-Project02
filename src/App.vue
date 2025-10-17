<script setup>
import search from './componets/Search.vue';
import Description from './componets/Description.vue';
import HomePage from './views/HomePage.vue';
import navBar from './componets/navBar.vue';
</script>

<template>
  <div>
    <!-- This will hold the var bar -->
     <navBar /> <!--W navBar-->
    <HomePage />
    <search />
    <description />
  </div>


</template>

<style scoped>

</style>
