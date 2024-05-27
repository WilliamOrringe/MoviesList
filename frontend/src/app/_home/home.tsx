'use server'

import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { items } from './items/home-bento'
import Landing from '@/components/landing/Landing'
import getMovies from '../movies/_actions/actions'
import { MoviesGrid } from '@/components/movie-grid/movies'
import Schedule from '@/components/schedule/Schedule'

const Home = async () => {
    const moviesList = await getMovies()

    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })
    return (
        <div className="flex flex-col gap-40 ">
            <Landing />
            <MoviesGrid movieList={moviesInfoList} />
            <Schedule />
        </div>
    )
}

export default Home
