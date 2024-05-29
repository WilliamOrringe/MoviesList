import { Fragment } from 'react'
import Image from 'next/image'
export const MoviesGrid = ({
    movieList,
}: {
    movieList: { image: string; title: string }[]
}) => {
    return (
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
    )
}
