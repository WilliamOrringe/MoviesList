'use client'

import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { items } from './items/home-bento'
import Landing from '@/components/landing/Landing'

const Home = () => {
    return (
        <div className="flex flex-col gap-40 ">
            <Landing />
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

export default Home
