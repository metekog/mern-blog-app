import axios from "axios";

export const axiosInstance=axios.create({
    baseURL="https://metblogapp.herokuapp.com/api/"
})