'use server'
export default async function getShows(genres: string) {
    const apiKey = process.env.MOVIES_KEY
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
        return { results: [] }
    }

    return data
}
