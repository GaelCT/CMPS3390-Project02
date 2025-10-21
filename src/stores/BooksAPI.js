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
                console.log(query)
                const response = await axios.get("https://openlibrary.org/search.json?title=" + query) 
                console.log(response)
                this.books = [] // clears old books
                response.data.docs.forEach(book => {
                    this.books.push({
                        title: book.title || "Untitled",
                        author: book.author_name ? book.author_name[0] : "Unknown Author",
                        cover_i: book.cover_i || null,
                        key: book.key,
                        quantity: 0
                    });
                });
                console.log(this.books)
            }catch(error){
                console.log("Failed to get books ", error)
            }
        }
    }
})
