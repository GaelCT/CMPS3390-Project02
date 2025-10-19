<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const SearchQuery = ref("");

const handleSearch = () =>{
    const trimmed = SearchQuery.value.trim();
    if(trimmed){
        router.push({name: 'Search', query: {q: trimmed}});
        SearchQuery.value = "";
    }
};
</script>

<template>
  <nav class="navbar" @keydown.enter="handleSearch">
    <div class="pages">
      <RouterLink to="/" class="link">HomePage</RouterLink>
      <RouterLink to="/CartPage" class="link">Shopping Cart</RouterLink>
    </div>
    <div class="searchBar">
      <input v-model="SearchQuery" type="text" placeholder="Search for a book">
      <button @click="handleSearch">Search</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
}

.pages {
  display: flex;
  gap: 10px;
  align-items: center;
}

.link {
  text-decoration: none;
  background: #0056b3;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
}

.link:hover {
  background: #003d80;
}

.searchBar{
  display: flex;
  gap: 8px;
  align-items: center;
}

.searchBar input{
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  width: 250px;
}

.searchBar button{
  background: #0056b3;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.searchBar button:hover{
  background: #003d80;
}
</style>