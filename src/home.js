import { getMovies } from "./services/getData";

const container = document.querySelector("#movies");

const spinner = document.getElementById("spinner");

const moviesList = async (limit = 20) => {
  spinner.style.display = "grid";
  const { results } = await getMovies(limit);
  spinner.style.display = "none";

  results.forEach((movie) => {
    const article = document.createElement("article");
    article.setAttributte("class", "movie");
    article.innerHTML = `
            <h2>${movie.title}</h2>
        `;
  });
};

moviesList();
