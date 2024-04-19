import axios from "axios";

const API_KEY = "53178a0c0d455d425a3a2528a86ac454";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

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