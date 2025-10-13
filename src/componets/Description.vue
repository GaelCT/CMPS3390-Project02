<script setup>
import {ref} from 'vue'

const workID = ref('')

const title = ref('')
const description = ref('')
const coverURL = ref('')
const loading = ref(false)

async function getDesc() {
    loading.value = true
    description.value = ''
    coverURL.value = ''

    try {
        const workURL = await fetch('https://openlibrary.org/works/'+ workID.value +'.json')
        const work = await workURL.json()

        title.value = work.title || ''

        description.value = 
            typeof work.description === 'string'
            ? work.description
            : work.description?.value || 'No description availale.'

        
        const coverID = Array.isArray(work.covers) && work.covers.length ? work.covers[0] : null
        coverURL.value = 
            coverID 
            ? 'https://covers.openlibrary.org/b/id/' + coverID + '-L.jpg'
            : 'https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-277514873.jpg'

    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="descriptionPage">
        <div class="book-wrap">
            <img 
            class="book-cover" 
            :src="coverURL" 
            :alt="title ? '${title} cover' : 'Book cover'"
            />
        </div>
        <div class="book-body">
            <h2 v-if="title">{{ title }}</h2>

            <input v-model="workID" placeholder="Enter a work ID" />
            <button @click="getDesc">Load</button>
            
            <p v-if="loading">Loading description...</p>
            <p v-else class="book-desc">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.book-wrap {
    display: flex;
    grid-template-columns: 220px 1fr;
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

.book-body {
    flex: 1 1 auto;
}

h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
}

.book-desc {
    white-space: pre-line;
    color: #1f2937;
    line-height: 1.6;
}
</style>