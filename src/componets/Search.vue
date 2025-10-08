<script setup>
 import { ref } from 'vue';
 import { useBookStore } from '@/stores/BooksAPI';
 const bookStore = useBookStore();
 const SearchQuery = ref("");

 const searchBook  = () =>{
    if (SearchQuery.value.trim()){
        bookStore.getBooks(SearchQuery.value)
    }
 }
</script>

<template>
 <div>
    <input v-model="SearchQuery" placeholder="Search for a book" />
    <button @click="searchBook">Search</button>

    <ul v-if="bookStore.books.length">
      <li v-for="book in bookStore.books" :key="book.key">
        {{ book.title }} by {{ book.author_name?.[0] || "Unknown" }}
      </li>
    </ul>

    <p v-else>No results found</p>
  </div>
</template>

<style scoped></style>
