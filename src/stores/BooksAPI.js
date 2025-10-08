import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore('bookResults', {
    state: () => ({
        books: [],
    }),
    actions:{
        async getBooks(search){ // uses input of a search
            try{
                const query = encodeURIComponent(search.trim()) // saves the search to a value
                const response = await axios.get('https://openlibrary.org/search.json?q=${query}') 
                this.books = response.data.docs
            }catch(error){
                console.log("Failed to get books ", error)
            }
        }
    }
})
