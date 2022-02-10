import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/movies", (request, response) => {
  type Movie = {
    name: string;
    description: string;
    year: number;
  };
  const myMovies: Movie[] = [
    { name: "Harry Potter 1", description: "Film de magie", year: 2000 },
    { name: "Harry Potter 2", description: "Film de magie", year: 2002 },
    { name: "Harry Potter 3", description: "Film de magie", year: 2004 },
  ];
  response.render("movies", { moviesName: myMovies.name });
});

/* BOOON :

app.get("/movies", (request, response) => {
  const testMovies1 = {
    name: "Harry Potter 1",
    description: "Film de magie",
    year: 2000,
  };
  response.render("movies", { moviesName: testMovies1.name });
});
*/

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

/*
type Movie = {
  name: string;
  description: string;
  year: number;
};

const myMovies: Movie[] = [
  { name: "Harry Potter 1", description: "Film de magie", year: 2000 },
  { name: "Harry Potter 2", description: "Film de magie", year: 2002 },
  { name: "Harry Potter 3", description: "Film de magie", year: 2004 },
];
*/
