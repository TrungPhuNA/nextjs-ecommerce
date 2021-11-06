import axios from 'axios';
export const getProducts = async() => {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=10`
        )
        return response.data
    } catch (e) {
        console.log('error', e);
    }
}
