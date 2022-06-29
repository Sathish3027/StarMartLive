import axios from 'axios';

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v1/register";

class RegisterService{

    getRegister(){
        return axios.get(REGISTER_API_BASE_URL);
    }

    createRegister(register){
        return axios.post(REGISTER_API_BASE_URL,register);
    }
}
export default new RegisterService()