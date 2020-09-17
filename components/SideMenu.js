import React from "react";
import { useRouter } from "next/router";
import Modal from "./Modal";
import MovieCreateForm from "./MovieCreateForm";
import { createMovie } from "../actions";

const SideMenu = ({ appName, categories }) => {
	let modal = null;
	const router = useRouter();

	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			modal.closeModal();
			// Next Router navigates to particular URL or file in directory
			router.push("/");
		});
	};

	return (
		<div>
			<Modal ref={(elem) => (modal = elem)} showSubmit={false}>
				<MovieCreateForm onSubmit={handleCreateMovie} />
			</Modal>
			<h1 className='my-4'>{appName}</h1>
			<div className='list-group'>
				{categories.map((category) => (
					<a key={category.id} href='#' className='list-group-item'>
						{category.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default SideMenu;
