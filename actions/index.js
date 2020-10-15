import axios from "axios";

const BASE_URL = "http://localhost:3000";

const MOVIE_DATA = [];

const CATEGORY_DATA = [
	{ id: "c-0", name: "All" },
	{ id: "c-1", name: "Drama" },
	{ id: "c-2", name: "Action" },
	{ id: "c-3", name: "Adventure" },
	{ id: "c-4", name: "Historical" },
];

export const getCategories = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(CATEGORY_DATA);
			// reject('Cannot fetch data!')
		}, 50);
	});
};

export const getMovies = () => {
	return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => res.data);
};

export const getMovieByID = (movieID) => {
	return axios
		.get(`${BASE_URL}/api/v1/movies/${movieID}`)
		.then((res) => res.data);
};

export const updateMovie = (movie) => {
	return axios
		.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
		.then((res) => {
			console.log("Result: ", res);
			res.data;
		});
};

export const createMovie = (updatedMovie) => {
	movie.id = Math.random.toString(36).substr(2, 5);
	return axios
		.post(`${BASE_URL}/api/v1/movies`, updatedMovie)
		.then((res) => res.data);
};

export const deleteMovie = (id) => {
	return axios
		.delete(`${BASE_URL}/api/v1/movies/${id}`)
		.then((res) => res.data);
};
