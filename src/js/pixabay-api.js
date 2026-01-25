import axios from 'axios';

const API_KEY = '48281313-2df67b4587db2e86780c149d5';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return axios.get(`${BASE_URL}?${params}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;
        });
}
