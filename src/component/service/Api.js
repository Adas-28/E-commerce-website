import axios from "axios";

const URL = 'http://localhost:8000/'

export const addProduct = async(data) =>{
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log("Error while callling API", error);
        
    }
}