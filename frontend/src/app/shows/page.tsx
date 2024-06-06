'use client'
import {
    useQuery,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import ShowsHomePage from './wrapped-page'
import { ShowGenreTitles } from '@/utils/genre/showGenres'

const ShowsPage = ({
    searchParams: { genre, sort },
}: {
    searchParams: { genre: keyof typeof ShowGenreTitles; sort: string }
}) => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <ShowsHomePage genre={genre} sort={sort} />
        </QueryClientProvider>
    )
}

export default ShowsPage
