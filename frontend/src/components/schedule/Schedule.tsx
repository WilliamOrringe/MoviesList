import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DayTable from './DayTable'

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
    const numberWeeks = 1
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
        <Tabs defaultValue="mon" className="">
            <TabsList className="grid w-full grid-cols-7">
                {dayOrders.map((day) => (
                    <TabsTrigger key={day} value={day}>
                        {day}
                    </TabsTrigger>
                ))}
            </TabsList>

            {dayOrders.map((day) => (
                <TabsContent key={day} value={day}>
                    <DayTable data={showSchedules} />
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default Schedule
