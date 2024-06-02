import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DayTable from './DayTable'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    SliderMainItem,
    CarouselThumbsContainer,
    SliderThumbItem,
} from '@/components/ui/carousel-extended'

const Schedule = () => {
    const showSchedules = [
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
        {
            time: '8:00',
            title: 'Paid',
            episode: 'Episode 1',
        },
    ]
    const numberWeeks = 2
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

    const currentDay = new Date().toLocaleDateString('en-gb', {
        weekday: 'short',
    })
    const index = days.findIndex((day) => day === currentDay.toLowerCase())
    const dayOrder = days.slice(index).concat(days.slice(0, index))
    let dayOrders = structuredClone(dayOrder)
    for (let i = 0; i < numberWeeks - 1; i++) {
        dayOrders = [...dayOrders, ...dayOrder]
    }
    console.log(dayOrders)

    return (
        <Carousel className="w-full">
            <CarouselNext className="top-1/4 -translate-y-1/4" />
            <CarouselPrevious className="top-1/4 -translate-y-1/4" />
            <CarouselThumbsContainer>
                {dayOrders.map((day, index) => (
                    <SliderThumbItem
                        key={index}
                        index={index}
                        className="bg-transparent pl-1 md:basis-1/3 lg:basis-1/5"
                    >
                        <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                            {day.toUpperCase()}
                        </div>{' '}
                    </SliderThumbItem>
                ))}
            </CarouselThumbsContainer>
            <CarouselMainContainer className="h-full">
                {dayOrders.map((day, index) => (
                    <SliderMainItem key={index} className="bg-transparent">
                        <DayTable data={showSchedules} />
                    </SliderMainItem>
                ))}
            </CarouselMainContainer>
        </Carousel>
    )
}

export default Schedule
