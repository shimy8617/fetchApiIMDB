import { getMovies } from "./services/getData.js";

const container = document.querySelector("#movies");

const spinner = document.getElementById("spinner");

const moviesList = async (title = "mandalorian") => {
  spinner.style.display = "grid";
  const { d } = await getMovies(title);
  spinner.style.display = "none";

  d.forEach((items) => {
    console.log(items);
    const article = document.createElement("article");
    article.setAttribute("class", "col");
    article.innerHTML = `
                <div class="card h-100">
                    <img src="${items.i.imageUrl}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${items.l}</h2>
                            <div>
                                <p><span>Type:</span>${items.q}</p>
                            </div>
                        <a href="/#/${items.id}">See Details</a>
                    </div>
                </div>
        `;
    container.appendChild(article);
  });
};

moviesList();
