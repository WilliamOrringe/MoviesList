import Image from 'next/image'
import getMovies from './_actions/actions'
import { Fragment } from 'react'
import { MoviesGrid } from '@/components/movie-grid/movies'

const Page = async () => {
    const moviesList = await getMovies()
    // console.log(moviesList)
    const images = moviesList.results.map((movie: any) => {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    })
    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })

    console.log(images)
    return (
        <>
            <h1 className="text-4xl mb-10">Trending now</h1>
            <MoviesGrid movieList={moviesInfoList} />
        </>
    )
}

export default Page
