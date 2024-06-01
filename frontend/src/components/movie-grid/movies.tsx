'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGripHorizontal,
    faGripVertical,
    faSortAsc,
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

export const MoviesGrid = ({
    movieList,
}: {
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
    const [value, setValue] = useState<string>('Trending')

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
                <div>{movieList.length} items</div>
                <div className="flex flex-row gap-2">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between"
                            >
                                {value
                                    ? sortOrders.find(
                                          (sortOrder) =>
                                              sortOrder.value === value
                                      )?.label
                                    : 'Select Sort Order'}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandGroup>
                                    <CommandList>
                                        {sortOrders.map((sortOrder) => (
                                            <CommandItem
                                                key={sortOrder.value}
                                                value={sortOrder.value}
                                                onSelect={(currentValue) => {
                                                    setValue(
                                                        currentValue === value
                                                            ? 'Trending'
                                                            : currentValue
                                                    )
                                                    setOpen(false)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        value ===
                                                            sortOrder.value
                                                            ? 'opacity-100'
                                                            : 'opacity-0'
                                                    )}
                                                />
                                                {sortOrder.label}
                                            </CommandItem>
                                        ))}
                                    </CommandList>
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <Button>
                        <FontAwesomeIcon icon={faSortAsc} />
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
