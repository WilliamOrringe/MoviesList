'use client'

import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { placeholders } from './placeholders'

const Landing = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
            <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                Ask Aceternity UI Anything
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Landing
