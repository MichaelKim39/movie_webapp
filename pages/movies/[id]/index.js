import React from "react";
import { useRouter } from "next/router";
import { getMovieByID, deleteMovie } from "../../../actions";
import Link from "next/link";

const Movie = ({ movie }) => {
	const router = useRouter();
	const { id } = router.query;

	const handleDeleteMovie = (id) => {
		deleteMovie(id).then(() => {
			router.push("/");
		});
	};

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.description}</p>
				<hr className='my-4' />
				<p>{movie.genre}</p>
				<p className='lead'>
					<button className='btn btn-primary btn-lg' href='#' role='button'>
						Learn more
					</button>
					<button
						onClick={() => handleDeleteMovie(id)}
						className='btn btn-danger btn-lg ml-1'
						href='#'
						role='button'
					>
						Delete
					</button>
					<Link href='/movies/[id]/edit' as={`/movies/${id}/edit`}>
						<button className='btn btn-warning btn-lg ml-1' role='button'>
							Edit
						</button>
					</Link>
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
