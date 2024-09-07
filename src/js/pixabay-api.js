const API_KEY = '45854856-78ad068c46767c3f7b48e1998'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) { 
  const url = new URL(BASE_URL);
  url.searchParams.set('key', API_KEY);
  url.searchParams.set('q', query);
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('orientation', 'horizontal');
  url.searchParams.set('safesearch', 'true');

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (!data.hits || data.hits.length === 0) {
      throw new Error('No images found');
    }

    return data;
  } catch (error) {
    console.error('Fetching error:', error);
    throw error;
  }
}

