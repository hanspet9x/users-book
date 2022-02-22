export const bookURL = {
  getGenres: '/genres',
  getBookCheckoutURL: (genreURL: string) => `/checkout?genreUrl=${genreURL}`,
};
