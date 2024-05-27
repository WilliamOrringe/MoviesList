export default async function getMovies() {
    const apiKey = process.env.MOVIES_KEY
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
