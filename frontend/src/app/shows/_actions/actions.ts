export default async function getShows(genres: string) {
    const apiKey = process.env.MOVIES_KEY
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    const response = await fetch(url)
    if (!response.ok) {
        return { results: [] }
    }
    const data = await response.json()

    return data
}
