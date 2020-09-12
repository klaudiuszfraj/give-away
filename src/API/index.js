import axios from 'axios';

const API_URL = 'http://localhost:3000/db';
const FORM_URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

export const fetchFoundationsList = async ()=>{
    try{
        const {data: { foundations }} = await axios.get(API_URL);
        return foundations;
    }
    catch (error){
        console.log(error);
    }
}

export const sendForm = async (formInfo)=>{
    try{
        return axios.post(FORM_URL,formInfo);
    }
    catch (error){
        console.log(error);
    }
}