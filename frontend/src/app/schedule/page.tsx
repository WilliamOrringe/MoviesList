'use server'

import { MoviesGrid } from '@/components/movie-grid/movies'
import Schedule from '@/components/schedule/Schedule'
import React from 'react'
import getMovies from '../search/_actions/actions'

const Page = async () => {
    const moviesList = await getMovies()

    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })
    return (
        <div className="flex flex-col gap-40 ">
            <MoviesGrid movieList={moviesInfoList} />
            <Schedule />
        </div>
    )
}

export default Page
