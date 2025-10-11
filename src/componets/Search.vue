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
  if (book.cover_i) { // Book cover URL
    const coverID = book.cover_i // Gets cover id
    const coverURL = "https://covers.openlibrary.org/b/id/" + coverID + "-L.jpg" // Builds the book cover image URL
    return coverURL
  }else{ // no book cover urlImage
    const placeholderURL = "https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-277514873.jpg" // No image URL pic
    return placeholderURL;
  }
}
</script>



<template>
 <div class="resultsPage">
    <div class="searchBar" @keydown.enter="searchBook">
      <input v-model="SearchQuery" placeholder="Search for a book" />
      <button @click="searchBook">Search</button>
    </div>

    <ul v-if="bookStore.books.length" class="bookResults">
      <li v-for="book in bookStore.books" :key="book.key" class="book">
        <img :src="getCover(book)" alt="cover" class="cover">
        <div class="info">
          <h2>{{ book.title }}</h2>
          <p>By {{ book.author_name?.[0] || "Unknown" }}</p>
        </div>
      </li>
    </ul>

    <p v-else class="noResults">No results found</p>
  </div>
</template>



<style scoped>
.resultsPage {
  padding: 30px;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.searchBar input {
  width: 50%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.searchBar input:focus {
  outline: none;
  border-color: #007bff;
}

.searchBar button {
  padding: 10px 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.searchBar button:hover {
  background-color: #0056b3;
}

.bookResults{
  list-style: none;
  padding: 0;
  margin: 0;
}

.book{
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.book:hover{
  box-shadow: 0 3px 60px rgba(0, 0, 0, 0.1);
}

.cover{
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  border: 3px solid #1a1a1a;
}

.info:h2{
  margin: 0 0 5px;
  font-size: 18px;
  color: #1a1a1a;
}

.info:p{
  margin: 0;
  color: #555;
  font-size: 15px;
}

.noResults{
  text-align: center;
  color: #78818a;
  font-size: 16px;
  margin-top: 20px;
}

</style>

