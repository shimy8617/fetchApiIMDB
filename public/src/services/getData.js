const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3bcd3fe4fmsh8e94ec6946fc3bap137a48jsn2f47e0db3d51",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

//GET LIST OF ITEMS
const getMovies = async (title) => {
  const res = await fetch(
    `https://imdb8.p.rapidapi.com/auto-complete?q=${title}`,
    options
  );
  const data = await res.json();
  return data;
};

//GET DETAILS OF AN SPECIFIC ITEM
const getDetails = async (id) => {
  const res = await fetch(
    `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
    options
  );
  const data = await res.json();
  return data;
};

export { getMovies, getDetails };
