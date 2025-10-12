<template>
  <div class="card-container">
    <h3>{{ title }}</h3>
    <img v-if='imageSrc' :src="imageSrc" alt="Card Image" class="card-image" />
    <br>
    <br>
    <div class = "buttonName">
        <button> Add to Cart </button>
         <button> Learn More </button>    
    </div>    
    
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
    },
})

</script>


<!--Will adjust height and width depending on the size of the screen-->
<!---Used .1415926 for pi-->
<style scoped>
.card-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .141592659); 
}

.card-image {
  max-width: 100%;
  height: auto; 
  border-radius: 4px;
  margin-bottom: 15px;
}

.buttonName{
     display: flex;
     justify-content: center;
     gap: 30%;
}


</style>
