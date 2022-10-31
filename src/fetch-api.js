import axios from "axios"

const myApi = axios.create({
    baseURL: "https://nc-news-garys.herokuapp.com/api"
});