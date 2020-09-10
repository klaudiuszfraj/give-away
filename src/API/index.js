import axios from 'axios';

const API_URL = 'http://localhost:3000/db';

export const fetchItemList = async ()=>{
    try{
        const {data} = await axios.get(API_URL);
        console.log(data);
        return data;
    }
    catch (error){
        console.log(error);
    }

}