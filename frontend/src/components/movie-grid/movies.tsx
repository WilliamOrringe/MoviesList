'use client'
import { Fragment } from 'react'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGripHorizontal,
    faGripVertical,
} from '@fortawesome/free-solid-svg-icons'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '../ui/pagination'
export const MoviesGrid = ({
    movieList,
}: {
    movieList: { image: string; title: string }[]
}) => {
    const { user, error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return (
        <>
            <div className="flex flex-row justify-between">
                <div>{movieList.length} items</div>
                <div className="flex flex-row gap-2">
                    <Button>
                        <FontAwesomeIcon icon={faGripVertical} />
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faGripHorizontal} />
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-[10px]">
                {movieList.map((movieInfo, i: number) => (
                    <Fragment key={i}>
                        <div
                            className="group relative hover:cursor-pointer col-span-1 h-[400px]
         rounded-lg shadow-good transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10 z-1"
                        >
                            <Image
                                key={i}
                                src={movieInfo.image}
                                alt="movie poster"
                                width={500}
                                height={500}
                                className="h-full w-full object-cover col-span-1 z-1 rounded-lg"
                            />
                            {/* <div className="bg-gray-100 w-full h-full"></div> */}
                            <div className="absolute left-0 bottom-0 z-40 w-full h-20 bg-white dark:bg-slate-950 p-4 opacity-0 group-hover:opacity-80 rounded-b-lg -mt-1">
                                <h2 className="text-lg font-semibold dark:text-white text-black">
                                    {movieInfo.title}
                                </h2>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}
