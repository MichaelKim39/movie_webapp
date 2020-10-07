import React from "react";
import Router from "next/router";
import MovieCreateForm from "../../../components/MovieCreateForm";
import { getMovieByID, updateMovie } from "../../../actions";

class EditMovie extends React.Component {
	static async getInitialProps({ query }) {
		const movie = await getMovieByID(query.id);

		return { movie };
	}

	handleUpdateMovie = (movie) => {
		updateMovie(movie).then((updatedMovie) => {
			Router.push(`/movies/${movie.id}`);
		});
	};

	render() {
		const { movie } = this.props;
		return (
			<div className='container'>
				<h1>Edit Movie</h1>
				<MovieCreateForm
					initialData={movie}
					onSubmit={this.handleUpdateMovie}
				/>
			</div>
		);
	}
}

export default EditMovie;
