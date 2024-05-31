'use server'

import getMovies from './_actions/actions'
import { MoviesGrid } from '@/components/movie-grid/movies'
import { Input } from '@/components/ui/input'
import Filter from '@/components/filter/filter'
import { MovieGenres } from '@/utils/movieGenres'

const Page = async () => {
    const moviesList = await getMovies()

    const moviesInfoList = moviesList.results.map((movie: any) => {
        return {
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
        }
    })

    interface Filter {
        value: string
        label: string
    }

    const status = [
        {
            value: 'not_yet_aired',
            label: 'Not Yet Aired',
        },
        {
            value: 'airing',
            label: 'Airing',
        },
        {
            value: 'completed',
            label: 'Completed',
        },
        {
            value: 'cancelled',
            label: 'Cancelled',
        },
    ]

    const currYear = new Date().getFullYear()
    const years: Filter[] = [
        ...Array.from({ length: 30 }, (_, i) => {
            return {
                value: (currYear - i).toString(),
                label: (currYear - i).toString(),
            }
        }),
        ...Array.from({ length: 11 }, (_, i) => {
            return {
                value: (1900 - i * 10).toString() + 's',
                label: (1900 - i * 10).toString() + 's',
            }
        }),
    ]

    const sortOrder = [
        {
            value: 'trending',
            label: 'Trending',
        },
        {
            value: 'scores',
            label: 'Scores',
        },
        {
            value: 'alphabetical',
            label: 'Alphabetical',
        },
    ]

    return (
        <div>
            <h1 className="text-4xl mb-10">Advanced Search</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Filter
                        values={MovieGenres}
                        placeholder="Select genre"
                        search="Searching genre"
                    />
                    <Filter
                        values={years}
                        placeholder="Select year"
                        search="Searching year"
                    />
                    <Filter
                        values={status}
                        placeholder="Select status"
                        search="Searching status"
                    />
                    <Filter
                        values={sortOrder}
                        placeholder="Trending"
                        search="Trending"
                    />
                </div>
                <MoviesGrid movieList={moviesInfoList} />
            </div>
        </div>
    )
}

export default Page
