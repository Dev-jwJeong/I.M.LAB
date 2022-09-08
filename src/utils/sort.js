const sortBy = (data, key) => {
  switch (key) {
    case 'title_asc':
      return data.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1));
    case 'title_desc':
      return data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1));
    case 'release_date_asc':
      return data.sort((a, b) =>
        a.release_date.toLowerCase() < b.release_date.toLowerCase() ? -1 : 1
      );
    case 'release_date_desc':
      return data.sort((a, b) =>
        a.release_date.toLowerCase() > b.release_date.toLowerCase() ? -1 : 1
      );
    case 'popularity_asc':
      return data.sort((a, b) => (a.popularity < b.popularity ? -1 : 1));
    case 'popularity_desc':
      return data.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    case 'vote_average_asc':
      return data.sort((a, b) => (a.vote_average < b.vote_average ? -1 : 1));
    case 'vote_average_desc':
      return data.sort((a, b) => (a.vote_average > b.vote_average ? -1 : 1));
  }
};

export default sortBy;
