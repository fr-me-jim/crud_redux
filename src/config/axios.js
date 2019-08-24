import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/fr-me-jim/books.db.json'
});

export default axiosClient;