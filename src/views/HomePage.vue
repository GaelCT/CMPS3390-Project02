
<template>
      <NavBar />
      
    <!----<header>Hello </header>-->
    <div class = "home">
        <h1> Welcome to ________ </h1> <!--Enter Text Box here-->
    </div>
    <br>

<!--Here is the search bar from the other component-->
<!--
<div>
   <search /> 
</div>
-->

<!--This is the for loop to initalize each book that is in the array-->
    <div class = "home-pageContainer">
        <div class = "card-grid">
        <Cardcontainer
            v-for="card in cardData"
            :key="card.id"
            :title="card.title"
            :imageSrc="card.imageSrc"
        />
        </div>
    </div>
</template>
    
<script>
import search from '@/componets/Search.vue';
import { ref } from 'vue';
import Cardcontainer from '@/componets/Cardcontainer.vue'; //refrence from Cardcontainer
import NavBar from '@/componets/navBar.vue';
//import Cardcontainer from '@/componets/Cardcontainer.vue'; Accidental duplicate
//import { BContainer, BRow, BCol } from 'bootstrap-vue'; // Cant use this

//const cardData = ref([]);

        export default {
          name : 'HomePage',
            components: {
                Cardcontainer, //pass Cardcontainer to show that it is needed here
                //Search, why wont it work
            },
            data(){
                return {
                    cardData: [
{
  id: 1,
  title: 'Introduction to Algorithms',
  imageSrc: '/images/1.jpg'
},
{
  id: 2,
  title: 'The Art of Computer Programming',
  imageSrc: '/images/2.jpg'
},
{
  id: 3,
  title: 'Code: The Hidden Language of Computer Hardware and Software',
  imageSrc: '/images/3.jpg'
},
{
  id: 4,
  title: 'Structure and Interpretation of Computer Programs (SICP)',
  imageSrc: '/images/4.jpg'
},
{
  id: 5,
  title: 'Compilers: Principles, Techniques, and Tools',
  imageSrc: '/images/5.jpg'
},
{
  id: 6,
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  imageSrc: '/images/6.jpg'
},
{
  id: 7,
  title: 'The Pragmatic Programmer: Your Journey to Mastery',
  imageSrc: '/images/7.jpg'
},
{
  id: 8,
  title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  imageSrc: '/images/8.jpg'
},
{
  id: 9,
  title: 'The Mythical Man-Month: Essays on Software Engineering',
  imageSrc: '/images/9.jpg'
},
{
  id: 10,
  title: 'Refactoring: Improving the Design of Existing Code',
  imageSrc: '/images/10.jpg'
},
{
  id: 11,
  title: 'Code Complete: A Practical Handbook of Software Construction',
  imageSrc: '/images/11.jpg'
},
{
  id: 12,
  title: 'The C Programming Language',
  imageSrc: '/images/12.jpg'
},
{
  id: 13,
  title: 'Effective Java',
  imageSrc: '/images/13.jpg'
},
{
  id: 14,
  title: 'Programming Pearls',
  imageSrc: '/images/14.jpg'
},
{
  id: 15,
  title: 'The Little Schemer',
  imageSrc: '/images/15.jpg'
},
{
  id: 16,
  title: 'Artificial Intelligence: A Modern Approach',
  imageSrc: '/images/16.jpg'
},
{
  id: 17,
  title: 'Deep Learning',
  imageSrc: '/images/17.jpg'
},
{
  id: 18,
  title: 'Deep Learning',
  imageSrc: '/images/18.jpg'
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