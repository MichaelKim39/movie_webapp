import React from "react";
import { useRouter } from "next/router";
import { getMovieByID } from "../../actions";

const Movie = (props) => {
	const router = useRouter();
	const { movie } = props;

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.description}</p>
				<hr className='my-4' />
				<p>{movie.genre}</p>
				<p className='lead'>
					<a className='btn btn-primary btn-lg' href='#' role='button'>
						Learn more
					</a>
				</p>
			</div>
			<p className='desc-text'>{movie.longDesc}</p>
			<style jsx>{`
				.desc-text {
					font-size: 21px;
				}
			`}</style>
		</div>
	);
};

// Context object filled out by NextJS
// Query destructured here from context object (context.query)
Movie.getInitialProps = async ({ query }) => {
	const movie = await getMovieByID(query.id);

	return { movie };
};

export default Movie;
