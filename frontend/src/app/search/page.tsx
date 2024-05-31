'use server'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
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
        <div>
            <h1 className="text-4xl mb-10">Advanced Search</h1>
            <div className="flex flex-row gap-4">
                <Accordion type="single" collapsible className="w-1/3">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Name</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Year</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the
                            other components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Genre</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can
                            disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <MoviesGrid movieList={moviesInfoList} />
            </div>
        </div>
    )
}

export default Page
