<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '@/componets/useCart';
const route = useRoute()
const { addToCart } = useCart();

const workID = ref('')
const title = ref('')
const description = ref('')
const coverURL = ref('')
const loading = ref(false)
const error = ref('')
const priceRandom = () => Math.floor(Math.random() * 25) + 10;

const addtoCart = () => {
  addToCart({
        title: title.value,
        imageSrc: coverURL.value, 
        description: description.value,
        price: priceRandom(),
    });
  }

// keep workID in sync with the route (prefer params, fallback to query)
function collectWorkIDFromRoute() {
  workID.value = (route.params.workID).toString()
}

// fetch the work details
async function fetchWork() {
  if (!workID.value) return
  loading.value = true
  error.value = ''
  title.value = ''
  description.value = ''
  coverURL.value = ''

  try {
    const workURL = await fetch(`https://openlibrary.org/works/${workID.value}.json`) // awaits responce from openlibrary
    if (!workURL.ok) throw new Error(`HTTP ${workURL.status}`)                        // error handling
    const work = await workURL.json()                                                 // parses json file and turns it into and object

    title.value = work.title || ''

    description.value =
      typeof work.description === 'string'
        ? work.description                                         // handles descriptions that are strings
        : (work.description?.value ?? 'No description available.') // handles descriptions that are objects and mission descriptions

    const coverID = Array.isArray(work.covers) && work.covers.length ? work.covers[0] : null // checks if work.covers is an array and if it has at least 1 element, else returns null
    coverURL.value = coverID
      ? `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`                                                                   // reterns the first cover if found
      : 'https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-277514873.jpg' // returns placeholder if null
  } catch (e) {
    error.value = `Failed to load work (${e.message}).` // error handling
  } finally {
    loading.value = false
  }
}

// initialize and react to route changes
collectWorkIDFromRoute()
watch(
  // watches for change in route.params.workID, will call functions below if changed
  () => [route.params.workID],
  () => {
    collectWorkIDFromRoute()
    fetchWork()
  },
  { immediate: true } // will run watcher as soon as it is created
)
</script>

<template>
  <div class="descriptionPage">
    <div v-if="loading">Loading…</div>
    <div v-else-if="error" style="color:#b91c1c">{{ error }}</div>
    <div v-else class="book-wrap">
        <div class="coverColumn">
            <img class="book-cover" :src="coverURL" :alt="title ? `${title} cover` : 'Book cover'"/>
            <button class="addButton" @click="addtoCart">Add to Cart</button>
        </div>
        <div class="book-body">
            <h2 v-if="title">{{ title }}</h2>
            <p class="book-desc">{{ description }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.book-wrap {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.book-cover {
  width: 220px;
  flex: 0 0 220px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border: 3px solid #1a1a1a;
  border-radius: 6px;
  background: #f3f4f6;
}

.coverColumn {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.addButton {
    padding: 10px 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.addButton:hover {
  background-color: #0056b3;
}

.book-body { flex: 1 1 auto; }

h2 { margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 600; }

.book-desc { white-space: pre-line; color: #1f2937; line-height: 1.6; }
</style>
