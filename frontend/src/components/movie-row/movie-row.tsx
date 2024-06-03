'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
    faAnglesRight,
    faGripHorizontal,
    faGripVertical,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import SkeletonLoader from '../ui/skeleton-loader'

export const MoviesRow = ({
    title,
    movieList,
}: {
    title: string
    movieList: { image: string; title: string }[]
}) => {
    const { user, error, isLoading } = useUser()

    if (isLoading)
        return (
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <SkeletonLoader height={40} />
                </div>
                <div className="grid grid-cols-5 gap-x-5 gap-y-[10px] mb-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="w-full">
                            <SkeletonLoader height={123} />
                        </div>
                    ))}
                </div>
            </div>
        )
    if (error) return <div>{error.message}</div>

    return (
        <div className="mb-4">
            <div className="flex flex-row justify-between mb-2">
                <div className="flex items-center justify-center text-xl">
                    {title}
                </div>
                <div className="flex flex-row gap-2">
                    <Link href="/search">
                        <Button>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </Button>
                    </Link>
                </div>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/3 lg:basis-1/5"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-video items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
