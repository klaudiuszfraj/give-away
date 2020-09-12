import axios from 'axios';

const API_URL = 'http://localhost:3000/db';

export const fetchFoundationsList = async ()=>{
    try{
        const {data: { foundations }} = await axios.get(API_URL);
        return foundations;
    }
    catch (error){
        console.log(error);
    }

}