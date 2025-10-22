<template>
  <div class="card-container">
  <!--<h2> This Is Your Cart </h2>  -->  
    <h3>{{ title }} </h3> 
      <p id = "priceText"> ${{price}} </p> 
        <img v-if='imageSrc' :src="imageSrc" alt="Card Image" class="card-image"  />
        
  <button @click="sendtoDesc(description)"> Description </button>
  <button id="addtocart" @click="ConfigureCart"> Add to Cart </button>

</div>
</template>


<script setup> //YOU ABSOLUTELY NEED THIS SETUP PART TO HAVE THE BOOKS IMPORTED INTO THE CONTAINER.
import { ref, defineProps } from 'vue'; 
import { useCart } from '@/componets/useCart';
import { useRouter } from 'vue-router';
import Description from './Description.vue';
//const { useBookStore } = BooksApi();
const { addToCart } = useCart(); //gets the function 
const router = useRouter();

const ConfigureCart = () => {
     addToCart({
        title: props.title,
        imageSrc: props.imageSrc,
        description: props.description,
        price: props.price
    });
}

const sendtoDesc = (description) => {
    router.push({name: 'desc', params: { workID: description }})
}

const modalOpen = ref(false);

const props = defineProps({ // this is needed to pass data from a parent component to a child component. Rules for it
    title: {
        type: String,
        required: true,
    }, 
    imageSrc: {
        type: String,
        required: false,
        default: '',
    },
    description: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true,
    }
    
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

img.card-image {
   display: flex;
   justify-content: center;
   max-width: 40%;
   height: 50%; 
   border-radius: 4px;
   margin: auto;
   margin-bottom: 15px;
}

h3{
   text-align: center;
   }

button {
    background-image: linear-gradient(to right,  rgb(165, 192, 214), rgb(165, 192, 214));
    border-radius: 31.4159265359px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .141592659);
    color: black;
    padding: 10px 25px;
}

button:active {
    opacity: 0.8;
}

#addtocart {
    float: right;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .141592659);
    color: black;
    padding: 10px 25px;
    background: orange; /*Doesn't work with background-color*/
}

#priceText{
text-align: center;
font-family: Verdana;
font-style: italic;
}

</style>