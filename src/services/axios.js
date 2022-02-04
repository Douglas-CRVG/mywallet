import axios from "axios";

const URL = 'http://localhost:5000';

function postSignUp(body){
    return axios.post(`${URL}/sign-up`, body);
}

function postSignIn(body){
    return axios.post(`${URL}/sign-in`, body);
}

export{
    postSignUp,
    postSignIn
}