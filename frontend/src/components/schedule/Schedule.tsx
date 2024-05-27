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

    return (
        <Tabs defaultValue="mon" className="max-w-screen-lg">
            <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="mon">Mon</TabsTrigger>
                <TabsTrigger value="tue">Tue</TabsTrigger>
                <TabsTrigger value="wed">Wed</TabsTrigger>
                <TabsTrigger value="thu">Thu</TabsTrigger>
                <TabsTrigger value="fri">Fri</TabsTrigger>
                <TabsTrigger value="sat">Sat</TabsTrigger>
                <TabsTrigger value="sun">Sun</TabsTrigger>
            </TabsList>
            <TabsContent value="mon">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="tue">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="wed">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="thu">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="fri">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="sat">
                <DayTable data={showSchedules} />
            </TabsContent>
            <TabsContent value="sun">
                <DayTable data={showSchedules} />
            </TabsContent>
        </Tabs>
    )
}

export default Schedule
