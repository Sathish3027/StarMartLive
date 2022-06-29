import httpClient from './HttpAxios';

const getAll = () =>{
    return httpClient.get('/register');
}

const create = (data) =>{
    return httpClient.post('/register',data);
}
export default {getAll,create}