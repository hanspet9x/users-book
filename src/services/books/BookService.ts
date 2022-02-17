import { APIService } from "../api/APIService"
import { bookURL } from "./routes/route"

const BookService = {

    async getGenres(){
        try {
            const response = await APIService.get({url: bookURL.getGenres});
        } catch (error) {
            
        }
    },

    async getBookCheckoutLink(genres: string){
        try {
            const response = await APIService.get({url: bookURL.getBookCheckoutURL(genres)});
        } catch (error) {
            
        }
    }
}