const API_KEY = '48281313-2df67b4587db2e86780c149d5'; // Replace with your real API key
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    try {
        const response = await axios.get(`${BASE_URL}?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
