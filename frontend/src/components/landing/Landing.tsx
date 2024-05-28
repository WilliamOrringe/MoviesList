'use client'

import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import { placeholders } from './placeholders'

const Landing = () => {
    const testimonials = [
        {
            quote: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
            name: 'Charles Dickens',
            title: 'A Tale of Two Cities',
        },
        {
            quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: 'William Shakespeare',
            title: 'Hamlet',
        },
        {
            quote: 'All that we see or seem is but a dream within a dream.',
            name: 'Edgar Allan Poe',
            title: 'A Dream Within a Dream',
        },
        {
            quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
            name: 'Jane Austen',
            title: 'Pride and Prejudice',
        },
        {
            quote: 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
            name: 'Herman Melville',
            title: 'Moby-Dick',
        },
    ]

    const words = [
        {
            text: 'Find',
        },
        {
            text: 'the',
        },
        {
            text: 'latest',
        },
        {
            text: 'shows',
        },
        {
            text: 'with',
        },
        {
            text: 'MovieList.',
            className: 'text-blue-500 dark:text-blue-500',
        },
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <div className="px-4">
            <div className="mb-10 sm:mb-10 text-xl sm:text-5xl dark:text-white text-black mt-20 flex justify-center">
                <TypewriterEffectSmooth words={words} />
            </div>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
            <div className="h-[20rem] rounded-md antialiased bg-transparent items-center justify-center relative mt-20">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Landing
