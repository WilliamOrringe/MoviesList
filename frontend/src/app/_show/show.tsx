'use server'

import getMovies from '../movies/_actions/actions'

const Show = async () => {
    const moviesList = await getMovies()

    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })
    return <div className="flex flex-col gap-40 "></div>
}

export default Show
