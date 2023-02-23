const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3bcd3fe4fmsh8e94ec6946fc3bap137a48jsn2f47e0db3d51",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const getMovies = async (title) => {
  const res = await fetch(
    `https://imdb8.p.rapidapi.com/auto-complete?q=${title}`,
    options
  );
  const data = await res.json();
  return data;
};

export { getMovies };
