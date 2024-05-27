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
         rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-125 overflow-hidden hover:z-10 z-1"
                    >
                        <Image
                            key={i}
                            src={movieInfo.image}
                            alt="movie poster"
                            width={500}
                            height={500}
                            className="h-full w-full object-cover col-span-1 z-1"
                        />
                        {/* <div className="bg-gray-100 w-full h-full"></div> */}
                        <div className="z-40 bg-black h-20 mt-[200px] p-4 hidden group-hover:flex">
                            <h2 className="text-lg font-semibold text-white">
                                {movieInfo.title}
                            </h2>
                            asdasdasd sad asd asd
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}
