import React from "react";

class MovieList extends React.Component {
	// * First way to define state
	// state = {
	// 	count: 0,
	// };

	// * Second way to define state
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};

		// * Explicitly bind "this" context
		// this.increment = this.increment.bind(this);
	}

	// * Not arrow function so must explicitly bind context of "this"
	increment() {
		const { count } = this.state;
		debugger;
		this.setState({
			count: count + 1,
		});
	}

	decrement = () => {
		const { count } = this.state;
		this.setState({
			count: count - 1,
		});
	};

	render() {
		debugger;
		return (
			<React.Fragment>
				<div>
					<button onClick={() => this.increment()} className='btn btn-primary'>
						Increment
					</button>
					<button onClick={this.decrement} className='btn btn-primary'>
						Decrement
					</button>
					<h1>{this.state.count}</h1>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item One</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Two</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur! Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Three</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Four</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Five</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur! Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>

				<div className='col-lg-4 col-md-6 mb-4'>
					<div className='card h-100'>
						<a href='#'>
							<img
								className='card-img-top'
								src='http://placehold.it/700x400'
								alt=''
							/>
						</a>
						<div className='card-body'>
							<h4 className='card-title'>
								<a href='#'>Item Six</a>
							</h4>
							<h5>$24.99</h5>
							<p className='card-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
								numquam aspernatur!
							</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>
								&#9733; &#9733; &#9733; &#9733; &#9734;
							</small>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default MovieList;