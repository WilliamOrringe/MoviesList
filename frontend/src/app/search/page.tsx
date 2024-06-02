'use server'

import getMovies from './_actions/actions'
import { MoviesGrid } from '@/components/movie-grid/movie-grid'
import { Input } from '@/components/ui/input'
import Filter from '@/components/filter/filter'
import { MovieGenres } from '@/utils/genre/movieGenres'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faFilter } from '@fortawesome/free-solid-svg-icons'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const Page = async ({
    searchParams: { genre, sort },
}: {
    searchParams: { genre: string; sort: string }
}) => {
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
        ...Array.from({ length: currYear - 2001 }, (_, i) => ({
            value: (currYear - i).toString(),
            label: (currYear - i).toString(),
        })),
        ...Array.from({ length: 8 }, (_, i) => ({
            value: (1990 - i * 10).toString() + 's',
            label: (1990 - i * 10).toString() + 's',
        })),
    ]

    return (
        <div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4 w-1/3 max-h-[300px] sticky top-10">
                    <h1 className="text-xl">Advanced Search</h1>
                    <Input type="search"></Input>
                    <Filter
                        values={MovieGenres}
                        heading="Genre"
                        placeholder="Select genre"
                    />
                    <Filter
                        values={years}
                        heading="Year"
                        placeholder="Select year"
                    />
                    <Filter
                        values={status}
                        heading="Status"
                        placeholder="Select status"
                    />
                    <Button>
                        <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                </div>
                <MoviesGrid title="All" movieList={moviesInfoList} />
            </div>
        </div>
    )
}

export default Page
