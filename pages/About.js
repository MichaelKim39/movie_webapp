import React from "react";

// * Functional component (arrow function)
// const About = () => {
// 	return <h1>Hello About Page</h1>;
// };

// * React.createElement example
// * createElement(tag, props, contents)
// const About = () => {
// 	const message = "Hello World";
// 	return React.createElement(
// 		"h1",
// 		null,
// 		"I generated this div with createElement"
// 	);
// };

// * Class based component
// * Must always specify reserved keyword 'render' function to return JSX to be rendered
class About extends React.Component {
	render() {
		return <h1>Class Based component here</h1>;
	}
}

export default About;
