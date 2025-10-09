<script setup>
 import { ref } from 'vue';
 import { useBookStore } from '@/stores/BooksAPI';

 const bookStore = useBookStore();

 const SearchQuery = ref("");

 const searchBook = () =>{
    if (SearchQuery.value.trim()){
        bookStore.getBooks(SearchQuery.value)
    }
 }

const getCover = (book) =>{
  if (book.cover_i) {
    const coverID = book.cover_i
    const coverURL = "https://covers.openlibrary.org/b/id/" + coverID + "-L.jpg"
    return coverURL
  }else{
    const placeholderURL = "https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-277514873.jpg"
    return placeholderURL;
  }
}

</script>

<template>
 <div class="resultsPage">
    <input v-model="SearchQuery" placeholder="Search for a book" />
    <button @click="searchBook">Search</button>

    <ul v-if="bookStore.books.length">
      <li v-for="book in bookStore.books" :key="book.key">
        {{ book.title }} by {{ book.author_name?.[0] || "Unknown" }} {{ book.cover_i }} <img :src="getCover(book)" alt="cover">
      </li>
    </ul>

    <p v-else>No results found</p>
  </div>
</template>

<style scoped>

</style>
