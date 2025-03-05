export const apiKey = 'efc945e3';

export const fetchMovies = async (searchQuery, type = 'movie', limit = 0) => {
  let allMovies = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchQuery}&type=${type}&page=${page}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === 'True') {
      allMovies = allMovies.concat(data.Search);
      if (limit && allMovies.length >= limit) {
        allMovies = allMovies.slice(0, limit);
        break;
      }
      page++;
    } else {
      break;
    }
  }
  return allMovies;
};

export const fetchMovieDetails = async (title) => {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`
  );
  return response.json();
};