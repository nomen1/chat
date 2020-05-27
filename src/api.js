import * as axios from "axios"

let instance = axios.create({
    baseURL: `https://api.chucknorris.io/jokes/`
             
})

export const messagesAPI = {
    getRandomJoke(){
        return instance.get(`random`)
    }
}