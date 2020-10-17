import axios from "axios";

const DEBUG_DATA = [
	{ id: "1", name: "Post1", descrition: "Desc1" },
	{ id: "2", name: "Post2", descrition: "Desc2" },
];

export default async (req, res) => {
	if (req.method === "POST") {
		const postData = JSON.parse(req.body);
		console.log(postData);

		return res.json({
			status: "Saving post to database",
			...postData,
		});
	} else {
		// GET request
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const posts = response.data;
		return res.json(posts.splice(0, 20));
	}
};
