'use server'

import getMovies from './_actions/actions'
import {
    Carousel,
    CarouselIndicator,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
} from '@/components/ui/carousel-extended'
import { MoviesRow } from '@/components/movie-row/movie-row'

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
            <h1 className="text-4xl mb-10">Movies</h1>
            <Carousel className="w-full">
                <div className="relative ">
                    <CarouselMainContainer>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <SliderMainItem
                                key={index}
                                className="flex aspect-video items-center justify-center p-6"
                            >
                                <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                                    Slide {index + 1}
                                </div>
                            </SliderMainItem>
                        ))}
                    </CarouselMainContainer>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                        <CarouselThumbsContainer className="gap-x-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselIndicator key={index} index={index} />
                            ))}
                        </CarouselThumbsContainer>
                    </div>
                </div>
            </Carousel>
            <MoviesRow title="Trending Now" movieList={moviesInfoList} />
            <MoviesRow title="Top 5 Today" movieList={moviesInfoList} />
            <MoviesRow title="Popular on Netflix" movieList={moviesInfoList} />
        </div>
    )
}

export default Page
