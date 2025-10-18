<script setup>

</script>

<template>
<div class="searchBar" @keydown.enter="searchBook">
    <nav>
        <button><RouterLink to="/">HomePage</RouterLink></button>
        <button><RouterLink to="/Search">search</RouterLink></button>
    </nav>
</div>

</template>

<style>
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
</style>