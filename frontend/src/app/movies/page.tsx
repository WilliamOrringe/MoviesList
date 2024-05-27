import getMovies from './_actions/actions'
import { MoviesGrid } from '@/components/movie-grid/movies'

const Page = async () => {
    const moviesList = await getMovies()

    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })

    return (
        <>
            <h1 className="text-4xl mb-10">Trending now</h1>
            <MoviesGrid movieList={moviesInfoList} />
        </>
    )
}

export default Page
