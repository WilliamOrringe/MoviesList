'use client'

import Sidebar from '@/components/Sidebar'
import Card from '@/components/card'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import BottomFooter from '@/components/ui/Footer'
import React, { Fragment } from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const Page = () => {
    const items = [
        {
            title: 'The Dawn of Innovation',
            description:
                'Explore the birth of groundbreaking ideas and inventions.',
            header: '',
            icon: '',
        },
        {
            title: 'The Digital Revolution',
            description: 'Dive into the transformative power of technology.',
            header: '',
            icon: '',
        },
        {
            title: 'The Art of Design',
            description:
                'Discover the beauty of thoughtful and functional design.',
            header: '',
            icon: '',
        },
        {
            title: 'The Power of Communication',
            description:
                'Understand the impact of effective communication in our lives.',
            header: '',
            icon: '',
        },
        {
            title: 'The Pursuit of Knowledge',
            description: 'Join the quest for understanding and enlightenment.',
            header: '',
            icon: '',
        },
        {
            title: 'The Joy of Creation',
            description: 'Experience the thrill of bringing ideas to life.',
            header: '',
            icon: '',
        },
        {
            title: 'The Spirit of Adventure',
            description:
                'Embark on exciting journeys and thrilling discoveries.',
            header: '',
            icon: '',
        },
    ]

    return (
        <div className="flex flex-col gap-40 ">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Page
