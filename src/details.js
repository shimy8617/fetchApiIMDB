import { getDetails } from "./services/getData.js";

const container = document.querySelector("#movies");

const spinner = document.getElementById("spinner");

const getID = localStorage.getItem("charID");

const movieDetail = async (id) => {
  spinner.style.display = "grid";
  const data = await getDetails(id);
  spinner.style.display = "none";
  if (!data.plotSummary) {
    data.plotSummary = data.plotOutline;
    console.log(data.plotOutline);
  }

  const article = document.createElement("article");
  article.setAttribute("class", "col");
  article.innerHTML = `
                <h2 class="pt-3 pb-5">More Details about "${data.title.title}"</h2>
                <div class="card h-70">
                    <img src="${data.title.image.url}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${data.title.title}</h2>
                            <div>
                                <p><span>Rating: </span>${data.ratings.rating}</p>
                                <p><span>Genres: </span>${data.genres}</p>
                                <p><span>Release Date: </span>${data.releaseDate}</p>
                                <p><span>Plot Summary: </span>${data.plotSummary.text}</p>
                            </div>
                    </div>
                </div>
        `;
  container.appendChild(article);
};

movieDetail(getID);
