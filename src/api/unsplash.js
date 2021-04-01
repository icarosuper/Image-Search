import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
	},
});

export const searchPictures = async term => await api('/search/photos', {
	params: {query: term},
});
