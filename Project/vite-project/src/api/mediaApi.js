import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export const fetchPhotos = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
      params: {
        query: "cartoons",
      },
    });

    console.log(response.data.results);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

export const fetchVideos = async () => {
  try {
    const response = await axios.get("https://api.pexels.com/videos/search", {
      headers: {
        Authorization: PEXELS_KEY,
      },
      params: {
        query: "cartoons",
        per_page: 15,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  } 
};

export const fetchGif = async () => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: GIPHY_KEY,
        q: "cartoons",
        limit: 10,
      },
    });

    console.log(response.data.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};