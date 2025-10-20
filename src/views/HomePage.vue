
<template>
        <NavBar />
      
    <!----<header>Hello </header>-->
    <div class = "home">
        <h1> Welcome to ________ </h1> <!--Enter Text Box here-->
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
            :price="card.priceRandom"
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
          description: 'This comprehensive textbook provides a deep and rigorous introduction to the modern study of computer algorithms. It covers a broad range of algorithms in depth while keeping their design and analysis accessible to readers at all levels.',
          price: priceRandom()
        },
        {
          id: 2,
          title: 'The Art of Computer Programming',
          imageSrc: '/images/2.jpg',
          description: 'Considered a classic and monumental work, this series offers a comprehensive and highly detailed exploration of algorithms, data structures, and fundamental programming concepts. It is known for its breadth, clarity, and elegance.',
          price: priceRandom()
        },
        {
          id: 3,
          title: 'Code: The Hidden Language of Computer Hardware and Software',
          imageSrc: '/images/3.jpg',
          description: 'This book demystifies how computers work, starting with simple concepts like Morse code and electricity and building up, layer by layer, to explain the inner workings of digital machines, software, and the internet.',
          price: priceRandom()
        },
        {
          id: 4,
          title: 'Structure and Interpretation of Computer Programs (SICP)',
          imageSrc: '/images/4.jpg',
          description: 'A classic text that teaches fundamental principles of computation and programming through the Lisp-based Scheme programming language. The book emphasizes building abstract systems and has had a major impact on computer science curricula.',
          price: priceRandom()
        },
        {
          id: 5,
          title: 'Compilers: Principles, Techniques, and Tools',
          imageSrc: '/images/5.jpg',
          description: 'Often referred to as "the Dragon Book," this is the standard reference for compiler design. It provides a thorough introduction to the design and implementation of compilers, covering everything from lexical analysis to code generation.',
          price: priceRandom()
        },
        {
          id: 6,
          title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
          imageSrc: '/images/6.jpg',
          description: 'This book provides practical advice and guidelines for writing more readable, maintainable, and robust code. It covers best practices for creating clean functions, objects, and classes and emphasizes the importance of writing clean, professional-level code.',
          price: priceRandom()
        },
        {
          id: 7,
          title: 'The Pragmatic Programmer: Your Journey to Mastery',
          imageSrc: '/images/7.jpg',
          description: 'This book offers a wide range of advice on software development, covering topics from career development to software architecture. It emphasizes a mindful and practical approach to writing flexible, adaptable, and efficient code.',
          price: priceRandom()
        },
        {
          id: 8,
          title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
          imageSrc: '/images/8.jpg',
          description: 'This seminal work presents a catalog of 23 common design patterns that provide succinct solutions to frequently occurring problems in object-oriented software design. It helps developers create more elegant and reusable code.',
          price: priceRandom()
        },
        {
          id: 9,
          title: 'The Mythical Man-Month: Essays on Software Engineering',
          imageSrc: '/images/9.jpg',
          description: 'This timeless book on software project management uses lessons from managing the IBM System/360 project to provide insights into the challenges and complexities of managing software projects, including the famous adage that "adding manpower to a late software project makes it later".',
          price: priceRandom()
        },
        {
          id: 10,
          title: 'Refactoring: Improving the Design of Existing Code',
          imageSrc: '/images/10.jpg',
          description: 'This guide explains the process and importance of improving the design of an existing codebase without changing its external behavior. It provides a catalog of refactorings, showing how to recognize "bad smells" in code and rework them into a cleaner design.',
          price: priceRandom()
        },
        {
          id: 11,
          title: 'Code Complete: A Practical Handbook of Software Construction',
          imageSrc: '/images/11.jpg',
          description: 'A practical guide to every aspect of software construction, this book provides a vast collection of tips, techniques, and best practices for writing high-quality software, from design and coding to debugging and maintenance.',
          price: priceRandom()
        },
        {
          id: 12,
          title: 'The C Programming Language',
          imageSrc: '/images/12.jpg',
          description: 'Written by the creators of the C language, this is the definitive reference guide to C programming. It is a foundational book for understanding C and remains an essential resource for programmers.',
          price: priceRandom()
        },
        {
          id: 13,
          title: 'Effective Java',
          imageSrc: '/images/13.jpg',
          description: 'This book provides best practices and valuable advice for programmers using the Java language. It offers solutions for creating clean, modern, and robust Java code and takes full advantage of the latest language features.',
          price: priceRandom()
        },
        {
          id: 14,
          title: 'Programming Pearls',
          imageSrc: '/images/14.jpg',
          description: "A collection of problem-solving techniques and programming insights, this book is based on the author's popular column. It presents elegant and creative solutions to computer science problems and explores fundamental design principles.",
          price: priceRandom()
        },
        {
          id: 15,
          title: 'The Little Schemer',
          imageSrc: '/images/15.jpg',
          description: 'This book teaches the fundamental concepts of Lisp and functional programming in a unique and engaging question-and-answer format. It presents abstract concepts in a humorous and easy-to-grasp manner.',
          price: priceRandom()
        },
        {
          id: 16,
          title: 'Artificial Intelligence: A Modern Approach',
          imageSrc: '/images/16.jpg',
          description: 'This is a leading textbook in the field of artificial intelligence. It offers a comprehensive and up-to-date introduction to AI theory and practice, covering everything from classical approaches to the latest advancements in machine learning.',
          price: priceRandom()
        },
        {
          id: 17,
          title: 'Deep Learning',
          imageSrc: '/images/17.jpg',
          description: 'Written by experts in the field, this is a comprehensive and highly regarded textbook on deep learning. It covers the mathematical and conceptual foundations of deep learning and neural networks.',
          price: priceRandom()
        },
        {
          id: 18,
          title: 'The Road to Conscious Machines: The Story of AI',
          imageSrc: '/images/18.jpg',
          description: 'This book provides a historical and philosophical look at the development of artificial intelligence. It separates the realistic advancements in AI from misplaced public fears and explains why our anxieties about conscious machines are premature.',
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