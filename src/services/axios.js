import axios from "axios";

const URL = 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(body){
    return axios.post(`${URL}/sign-up`, body);
}

function postSignIn(body){
    return axios.post(`${URL}/sign-in`, body);
}

function getRecords(token){
    return axios.get(`${URL}/records`, createConfig(token));
}

export{
    postSignUp,
    postSignIn,
    getRecords
}