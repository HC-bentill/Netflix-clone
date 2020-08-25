import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", // fetching data from this api
});

export default instance;