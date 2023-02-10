import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '33515676-cfdad249eb06b31c9c11d1eb6';

export async function getImages(query, page = 1) {
  const response = await axios.get(
    `${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  const images = await response.data;
  return images;
}
