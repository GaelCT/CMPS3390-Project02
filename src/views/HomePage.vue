
<template>
        <NavBar />
      
    <!----<header>Hello </header>-->
    <div class = "home">
        <h1> Welcome to Books </h1> <!--Enter Text Box here-->
    </div>
    <br>

<!--This is the for loop to initalize each book that is in the array-->
    <div class = "home-pageContainer">
        <div class = "card-grid">
        <Cardcontainer
            v-for="card in cardData"
            :key="card.id"
            :title="card.title"
            :imageSrc="card.imageSrc"
            :description="card.description"
            :price="card.price"
        />
        </div>
    </div>
</template>
    <!--Create another :description right under the Cardcontainer, we already have an id in there, so when button gets clicked, it extends and shows more details. -->
<script>
import search from '@/componets/Search.vue';
import { ref } from 'vue';
import Cardcontainer from '@/componets/Cardcontainer.vue'; //refrence from Cardcontainer
import NavBar from '@/componets/navBar.vue';
//import Cardcontainer from '@/componets/Cardcontainer.vue'; Accidental duplicate
//import { BContainer, BRow, BCol } from 'bootstrap-vue'; // Cant use this

//const cardData = ref([]);
const priceRandom = () => Math.floor(Math.random() * 25) + 10; //used to generate prices on books instead of hard coding it :)
//const priceArray = [5, 8, 14, 6, 16, 2, 11, 34, 21, 9, 17, 13, 19, 7, 10, 15, 18, 13]
export default {
  name : 'HomePage',
  components: {
    Cardcontainer,
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          title: 'Introduction to Algorithms',
          imageSrc: '/images/1.jpg',
          description: 'OL4781294W',
          price: priceRandom()
        },
        {
          id: 2,
          title: 'The Art of Computer Programming',
          imageSrc: '/images/2.jpg',
          description: 'OL257263W',
          price: priceRandom()
        },
        {
          id: 3,
          title: 'The C Programming Language',
          imageSrc: '/images/12.jpg',
          description: 'OL4617640W',
          price: priceRandom()
        },
        
        {
          id: 4,
          title: 'Structure and Interpretation of Computer Programs (SICP)',
          imageSrc: '/images/4.jpg',
          description: 'OL3267304W',
          price: priceRandom()
        },
        {
          id: 5,
          title: 'Compilers: Principles, Techniques, and Tools',
          imageSrc: '/images/5.jpg',
          description: 'OL3509433W',
          price: priceRandom()
        },
        {
          id: 6,
          title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
          imageSrc: '/images/6.jpg',
          description: 'OL17618370W',
          price: priceRandom()
        },
        {
          id: 7,
          title: 'The Pragmatic Programmer: Your Journey to Mastery',
          imageSrc: '/images/7.jpg',
          description: 'OL5748544W',
          price: priceRandom()
        },
        {
          id: 8,
          title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
          imageSrc: '/images/8.jpg',
          description: 'OL6030812W',
          price: priceRandom()
        },
        {
          id: 9,
          title: 'The Mythical Man-Month: Essays on Software Engineering',
          imageSrc: '/images/9.jpg',
          description: 'OL3510570W',
          price: priceRandom()
        },
        {
          id: 10,
          title: 'Refactoring: Improving the Design of Existing Code',
          imageSrc: '/images/10.jpg',
          description: 'OL17820325W',
          price: priceRandom()
        },
        {
          id: 11,
          title: 'Code Complete: A Practical Handbook of Software Construction',
          imageSrc: '/images/11.jpg',
          description: 'OL2722063W',
          price: priceRandom()
        },
        {
          id: 12,
          title: 'Code: The Hidden Language of Computer Hardware and Software',
          imageSrc: '/images/3.jpg',
          description: 'OL1972516W',
          price: priceRandom()
        },
        {
          id: 13,
          title: 'Effective Java',
          imageSrc: '/images/13.jpg',
          description: 'OL6223299W',
          price: priceRandom()
        },
        {
          id: 14,
          title: 'Programming Pearls',
          imageSrc: '/images/14.jpg',
          description: "OL4986385W",
          price: priceRandom()
        },
        {
          id: 15,
          title: 'The Little Schemer',
          imageSrc: '/images/15.jpg',
          description: 'OL2938928W',
          price: priceRandom()
        },
        {
          id: 16,
          title: 'Artificial Intelligence: A Modern Approach',
          imageSrc: '/images/16.jpg',
          description: 'OL2896994W',
          price: priceRandom()
        },
        {
          id: 17,
          title: 'Deep Learning',
          imageSrc: '/images/17.jpg',
          description: 'OL17801809W',
          price: priceRandom()
        },
        {
          id: 18,
          title: 'The Cognitive Approach to Conscious Machines',
          imageSrc: '/images/18.jpg',
          description: 'OL13607353W',
          price: priceRandom()
        }
      ]
    }
  }
}

</script>
<!-- Very nice Css, makes 3 componenets with full screen
    Made to be compressed 
-->
<style scoped> 
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap:4.5%;
        padding: 20px;
    }
    .home{
        text-align: center;
        margin-top: 10%;
    }
    
    
</style>