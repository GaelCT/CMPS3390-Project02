<template>
    <!----<header>Hello </header>-->
    <div class = "home">
        <h1> Welcome to ____ </h1>
    </div>
    <div>

        
    </div>
    <CContainer md>
        Content here    
    </CContainer>
    <!--
    <div class = "bookContent">
        
    


<p>Introduction to Algorithms</p>
<p>The Art of Computer Programming</p>
<p>Code: The Hidden Language of Computer Hardware and Software</p>
<p>Structure and Interpretation of Computer Programs (SICP)</p>
<p>Compilers: Principles, Techniques, and Tools</p>
<p>Clean Code: A Handbook of Agile Software Craftsmanship</p>
<p>The Pragmatic Programmer: Your Journey to Mastery</p>
<p>Design Patterns: Elements of Reusable Object-Oriented Software</p>
<p>The Mythical Man-Month: Essays on Software Engineering</p>
<p>Refactoring: Improving the Design of Existing Code</p>
<p>Code Complete: A Practical Handbook of Software Constructio</p>
<p>The C Programming Language</p>
<p>Effective Java</p>
<p>Programming Pearls</p>
<p>The Little Schemer</p>
<p>Artificial Intelligence: A Modern Approach</p>
<p>Deep Learning</p>
    
    </div>-->

</template>
<script>
import { ref } from 'vue';
import Cardcontainer from '@/componets/Cardcontainer.vue'; //refrence from Cardcontainer
//import { BContainer, BRow, BCol } from 'bootstrap-vue'; // or CoreUI components

const cardData = ref([
  {
    id: 1,
    title: 'Introduction to Algorithms',
    imageSrc: 'images/1.jpg'
  },
  {
    id: 2,
    title: 'The Art of Computer Programming',
    imageSrc: 'images/2.jpg'
  },
  {
    id: 3,
    title: 'Code: The Hidden Language of Computer Hardware and Software',
    imageSrc: 'images/3.jpg'
  },
  {
    id: 4,
    title: 'Structure and Interpretation of Computer Programs (SICP)',
    imageSrc: 'images/4.jpg'
  },
  {
    id: 5,
    title: 'Compilers: Principles, Techniques, and Tools',
    imageSrc: 'images/5.jpg'
  },
  {
    id: 6,
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    imageSrc: 'images/6.jpg'
  },
  {
    id: 7,
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    imageSrc: 'images/7.jpg'
  },
  {
    id: 8,
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    imageSrc: 'images/8.jpg'
  },
  {
    id: 9,
    title: 'The Mythical Man-Month: Essays on Software Engineering',
    imageSrc: 'images/9.jpg'
  },
  {
    id: 10,
    title: 'Refactoring: Improving the Design of Existing Code',
    imageSrc: 'images/10.jpg'
  },
  {
    id: 11,
    title: 'Code Complete: A Practical Handbook of Software Construction',
    imageSrc: 'images/11.jpg'
  },
  {
    id: 12,
    title: 'The C Programming Language',
    imageSrc: 'images/12.jpg'
  },
  {
    id: 13,
    title: 'Effective Java',
    imageSrc: 'images/13.jpg'
  },
  {
    id: 14,
    title: 'Programming Pearls',
    imageSrc: 'images/14.jpg'
  },
  {
    id: 15,
    title: 'The Little Schemer',
    imageSrc: 'images/15.jpg'
  },
  {
    id: 16,
    title: 'Artificial Intelligence: A Modern Approach',
    imageSrc: 'images/16.jpg'
  },
  {
    id: 17,
    title: 'Deep Learning',
    imageSrc: 'images/17.jpg'
  }
]);



        export default {
          name : 'HomePage',
            components: {
           // BContainer,
           // BRow,
           // BCol,
     
            }
            }
</script>

<style scoped>
    .home{
        text-align: center;
        margin-top: 10%;
}
</style>