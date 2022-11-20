const mergePreferences = (preferences, video) => {
  let newPreferences = preferences;

  // The list of genres (3)
  video.genres.forEach((genre) => {
    if (!newPreferences.genres.includes(genre)) {
      let random = Math.random();

      if (random > 0.65) {
        newPreferences.genres.push(genre);
        if (newPreferences.genres.length > 1) {
          delete newPreferences.genres[0];
        }
      }
    }
  });

  // Decision between series or movies
  if (video.serie !== newPreferences.serie) {
    let random = Math.random();
    newPreferences.serie = random > 0.6 ? video.serie : newPreferences.serie;
  }

  // FSK
  if (video.fsk !== newPreferences.fsk) {
    let random = Math.random();
    newPreferences.fsk = random > 0.6 ? video.fsk : newPreferences.fsk;
  }

  // Year
  if (
    video.year !== newPreferences.year &&
    Math.abs(video.year - newPreferences.year) > 5
  ) {
    let random = Math.random();
    newPreferences.year = random > 0.6 ? video.year : newPreferences.year;
  }

  return newPreferences;
};

export default mergePreferences;
