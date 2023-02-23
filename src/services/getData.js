const baseURL =
  "https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre";

/* const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3bcd3fe4fmsh8e94ec6946fc3bap137a48jsn2f47e0db3d51",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
}; */

const getMovies = async (genre) => {
  const res = await fetch(`${baseURL}?genre=${genre}&limit=100`); /* ,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err)); */
  const data = await res.json();
  return data;
};

export { getMovies };
