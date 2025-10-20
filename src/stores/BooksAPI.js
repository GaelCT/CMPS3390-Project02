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
                this.books = response.data.docs
                //this.books.push[{
                    //author: response.data.docs.author,
                    //image:
                    //desc: response.data.docs.desc || "" dont forget to add the posilibity if empty
                    //quantity: 0
                //}]
            }catch(error){
                console.log("Failed to get books ", error)
            }
        }
    }
})
