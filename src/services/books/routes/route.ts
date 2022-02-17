export const bookURL = {
    getGenres: '/genres',
    getBookCheckoutURL: (genre: string) => `/process/${genre}`,
}