import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import { getMovies, getCategories } from "../actions";

const Home = ({ movies, images, categories }) => {
	const [filter, setFilter] = useState("All");

	const changeCategory = (category) => {
		setFilter(category);
	};

	const filterMovies = (movies) => {
		if (filter === "All") {
			return movies;
		}
		return movies.filter((movie) => {
			return movie.genre && movie.genre.includes(filter);
		});
	};

	return (
		<div>
			<div className='home-page'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3'>
							<SideMenu
								changeCategory={changeCategory}
								activeCategory={filter}
								appName={"Categories"}
								categories={categories}
							/>
						</div>
						<div className='col-lg-9'>
							<Carousel images={images} />
							<h1>Displaying {filter} Movies</h1>
							<div className='row'>
								<MovieList movies={filterMovies(movies) || []} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// * Executed and fed back into component in App.js
Home.getInitialProps = async () => {
	const movies = await getMovies();
	const categories = await getCategories();
	const images = movies.map((movie) => ({
		id: `image-${movie.id}`,
		url: movie.cover,
		name: movie.name,
	}));

	return {
		movies,
		images,
		categories,
	};
};

export default Home;
