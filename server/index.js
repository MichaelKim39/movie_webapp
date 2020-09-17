const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = "./data.json";
const moviesData = require(filePath);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
	// Parses request body and makes req.body available everywhere
	server.use(bodyParser.json());

	server.get("/api/v1/movies", (req, res) => {
		return res.json(moviesData);
	});

	server.get("/api/v1/movies/:id", (req, res) => {
		const { id } = req.params;

		const movie = moviesData.find((movie) => movie.id === id);

		return res.json(movie);
	});

	server.post("/api/v1/movies", (req, res) => {
		const movie = req.body;
		moviesData.push(movie);
		// Get absolute path to file
		const pathToFile = path.join(__dirname, filePath);
		// Null for newlines, 2 indents
		const stringifiedData = JSON.stringify(moviesData, null, 2);
		// Use FS package to write to files
		fs.writeFile(pathToFile, stringifiedData, (error) => {
			if (error) {
				// Forward error to users with code 422
				return res.status(422).send(err);
			}

			return res.json("Movie has been successfully added!");
		});
	});

	server.patch("/api/v1/movies/:id", (req, res) => {
		const { id } = req.params;
		return res.json({ message: `Editing Post of id ${id}` });
	});

	server.delete("/api/v1/movies/:id", (req, res) => {
		const { id } = req.params;
		const movieIndex = moviesData.findIndex((movie) => movie.id === id);
		moviesData.splice(movieIndex, 1);

		const pathToFile = path.join(__dirname, filePath);
		const stringifiedData = JSON.stringify(moviesData, null, 2);

		fs.writeFile(pathToFile, stringifiedData, (error) => {
			if (error) {
				return res.status(422).send(err);
			}

			return res.json("Movie has been successfully deleted!");
		});
	});

	server.get("/faq", (req, res) => {
		res.send(`
        <html>
          <head></head>
          <body><h1>Hello World!</h1>
          </body>
        </html>
      `);
	});

	// Requests handled here
	server.get("*", (req, res) => {
		// NextJS handling requests and providing pages
		return handle(req, res);
	});

	const PORT = process.env.PORT || 3000;

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log("> Ready on port " + PORT);
	});
});
