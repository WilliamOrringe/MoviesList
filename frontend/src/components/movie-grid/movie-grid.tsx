'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowDownWideShort,
    faArrowUpShortWide,
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
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import SkeletonLoader from '../ui/skeleton-loader'

export const MoviesGrid = ({
    title,
    movieList,
}: {
    title: string
    movieList: { image: string; title: string }[]
}) => {
    const sortOrders = [
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

    const { user, error, isLoading } = useUser()
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>('trending')

    const [sortAsc, setSortAsc] = useState<boolean>(true)

    if (isLoading)
        return (
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <SkeletonLoader height={40} />
                </div>
                <div className="grid grid-cols-4 gap-x-4 gap-y-[10px]">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full">
                            <SkeletonLoader height={400} />
                        </div>
                    ))}
                </div>
            </div>
        )
    if (error) return <div>{error.message}</div>

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center text-4xl mb-4">{title}</div>
            <div className="flex flex-row justify-between">
                <div>{movieList.length} items</div>
                <div className="flex flex-row gap-2">
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                        <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            asdasdas
                        </option>
                        <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            asdasdas
                        </option>
                        <option className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            asdasdas
                        </option>
                    </select>
                    <Button onClick={() => setSortAsc(!sortAsc)}>
                        <FontAwesomeIcon
                            icon={
                                sortAsc
                                    ? faArrowDownWideShort
                                    : faArrowUpShortWide
                            }
                        />
                    </Button>
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
        </div>
    )
}
