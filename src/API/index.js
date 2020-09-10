import axios from 'axios';

const API_URL = 'http://localhost:3000/db';

export const fetchItemList = async ()=>{
    try{
        const {data: { fundations }} = await axios.get(API_URL);
        console.log(fundations);
        return fundations;
    }
    catch (error){
        console.log(error);
    }

}