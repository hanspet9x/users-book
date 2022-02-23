export const bookURL = {
  getGenres: '/genres',
  getBookCheckoutURL: (genreURL: string) => `/checkout?genreUrl=${genreURL}`,
  retryBookCheckoutURL: (genreURL: string) =>
    `/checkout/retry?genreUrl=${genreURL}`,
};
