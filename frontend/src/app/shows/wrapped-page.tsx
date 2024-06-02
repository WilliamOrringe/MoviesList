'use client'
import getShows from './_actions/actions'
import { MoviesGrid } from '@/components/movie-grid/movie-grid'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { ShowGenres, ShowGenreTitles } from '@/utils/genre/showGenres'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const ShowsHomePage = ({
    sort = 'trending',
    genre = 'all',
}: {
    sort: string
    genre: keyof typeof ShowGenreTitles | 'all'
}) => {
    const getShowsWithGenre = async () => {
        return await getShows('asdasdsa')
    }

    const movieQuery = useQuery({
        queryKey: ['movies'],
        queryFn: getShowsWithGenre,
    })

    const [showGenreTitle, setShowGenreTitle] = useState<
        keyof typeof ShowGenres & any
    >()
    useEffect(() => {
        switch (genre) {
            case 'all':
                setShowGenreTitle('all')
                break
            // case 'Drama':
            //     break
            // case 'Fantasy':
            //     break
            // case 'Horror':
            //     break
            // case 'Mystery':
            //     break
            case 'Sci-Fi':
                break
            case 'Thriller':
                break
            case undefined:
                break
        }
    }, [movieQuery.data])
    if (movieQuery.isLoading) return <div>Loading...</div>
    if (movieQuery.error) return <div>{movieQuery.error.message}</div>
    const moviesList = movieQuery.data
    const moviesInfoList: { image: string; title: string }[] =
        moviesList?.results?.map((movie: any) => {
            return {
                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                title: movie.title,
            }
        })
    return (
        <div>
            <h1 className="text-4xl mb-10">
                {[genre[0].toUpperCase(), genre.slice(1).toLowerCase()].join(
                    ''
                )}
                {/* {genre} */}
            </h1>
            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-video items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <MoviesGrid title="Trending now" movieList={moviesInfoList} />
        </div>
    )
}

export default ShowsHomePage
