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
                //this.books = response.data.docs       //old way
                // there should be a loop
                this.books.push[{
                    author: response.data.docs.author_name[0],
                    //image: "https://covers.openlibrary.org/b/id/" + response.data.docs.book.cover_i + "-L.jpg" || "https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-277514873.jpg",
                    desc: response.data.docs.desc[0] || "No ", //dont forget to add the posilibity if empty
                    quantity: 0
                }];
                console.log(this.books)
            }catch(error){
                console.log("Failed to get books ", error)
            }
        }
    }
})
