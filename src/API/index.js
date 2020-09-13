import axios from 'axios';

const API_URL = 'http://localhost:3000';
const FORM_URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

export const fetchFoundationsList = async ()=>{
    try{
        const {data: { foundations }} = await axios.get(`${API_URL}/db`);
        return foundations;
    }
    catch (error){
        console.log(error);
    }
}

export const sendForm = async (formInfo)=>{
    try{
        return await axios.post(FORM_URL,formInfo);
    }
    catch (error){
        console.log(error);
    }
}
//User
export const registerUser = async (user) =>{
    try {
        return await axios.post(`${API_URL}/users`,user);
    }
    catch (error){
        console.log(error);
    }
}
export const getAllUsers = async (user) =>{
    try {
        return await axios.get(`${API_URL}/users`,user);
    }
    catch (error){
        console.log(error);
    }
}
getAllUsers()