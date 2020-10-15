import { useState, useEffect } from "react";

const MovieCreateForm = ({ onSubmit, initialData, submitText = "Create" }) => {
	const DEFAULT_DATA = {
		name: "",
		description: "",
		rating: "",
		image: "",
		cover: "",
		longDesc: "",
	};

	const formData = initialData ? initialData : DEFAULT_DATA;
	const [form, setForm] = useState(formData);

	// useEffect(() => {
	// 	if (initialData) {
	// 		console.log("Setting form to initial data: ", initialData);
	// 		setForm(initialData);
	// 	}
	// 	console.log(JSON.stringify(form));
	// }, [initialData]);

	const handleChange = (event) => {
		const target = event.target;
		const key = target.name;

		setForm({
			...form,
			[key]: target.value,
		});
	};

	const handleGenreChange = (event) => {
		const { options } = event.target;
		const numOptions = options.length;
		let value = [];

		for (let i = 0; i < numOptions; i++) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}

		setForm({
			...form,
			genre: value.toString(),
		});
	};

	const handleSubmitForm = () => {
		onSubmit({ ...form });
	};

	return (
		<form>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					onChange={handleChange}
					value={form.name}
					type='text'
					className='form-control'
					name='name'
					id='name'
					aria-describedby='emailHelp'
					placeholder='Lord of the Rings'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Description</label>
				<input
					onChange={handleChange}
					value={form.description}
					type='text'
					className='form-control'
					name='description'
					id='description'
					placeholder='Somewhere in Middle-earth...'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Rating</label>
				<input
					onChange={handleChange}
					value={form.rating}
					type='number'
					max='5'
					min='0'
					className='form-control'
					id='rating'
					name='rating'
					placeholder='3'
				/>
				<small id='emailHelp' className='form-text text-muted'>
					Max: 5, Min: 0{" "}
				</small>
			</div>
			<div className='form-group'>
				<label htmlFor='image'>Image</label>
				<input
					onChange={handleChange}
					value={form.image}
					type='text'
					className='form-control'
					name='image'
					id='image'
					placeholder='http://.....'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='cover'>Cover</label>
				<input
					onChange={handleChange}
					value={form.cover}
					type='text'
					className='form-control'
					name='cover'
					id='cover'
					placeholder='http://......'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='longDesc'>Long Description</label>
				<textarea
					onChange={handleChange}
					value={form.longDesc}
					className='form-control'
					name='longDesc'
					id='longDesc'
					rows='3'
				></textarea>
			</div>
			<div className='form-group'>
				<label htmlFor='genre'>Genre</label>
				<select
					onChange={handleGenreChange}
					multiple
					className='form-control'
					id='genre'
				>
					<option>Drama</option>
					<option>Music</option>
					<option>Adventure</option>
					<option>Historical</option>
					<option>Action</option>
				</select>
			</div>
			<button
				type='button'
				className='btn btn-primary'
				onClick={handleSubmitForm}
			>
				{submitText}
			</button>
		</form>
	);
};

export default MovieCreateForm;
