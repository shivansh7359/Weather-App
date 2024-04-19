import axios from "axios";

const API_KEY = "API_KEY"
const API_URL = "API_URL"

export const getWeather = async(city, country) => {
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);

        return response.data;
    }
    catch(error){
        console.log("Error in api", error.message);
        return error.response;
    }
}
