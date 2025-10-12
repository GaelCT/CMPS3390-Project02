<template>
  <div class="card-container">
    <h3>{{ title }}</h3>
    <img v-if='imageSrc' :src="imageSrc" alt="Card Image" class="card-image" />
    <button> Add to Cart </button>  
  </div>
</template>

<script>
import { defineProps } from 'vue';

defineProps({ // this is needed to pass data from a parent component to a child component. Rules for it
    title: {
        type: String,
        required: true,
    }, 
    imageSrc: {
        type: String,
        required: true,
    },})

</script>

<style scoped>
.card-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
    max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>
