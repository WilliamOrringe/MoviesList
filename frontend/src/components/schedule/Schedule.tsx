import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DayTable from './DayTable'

const Schedule = () => {
    const invoices = [
        {
            invoice: 'INV001',
            paymentStatus: 'Paid',
            totalAmount: '$250.00',
            paymentMethod: 'Credit Card',
        },
        {
            invoice: 'INV002',
            paymentStatus: 'Pending',
            totalAmount: '$150.00',
            paymentMethod: 'PayPal',
        },
        {
            invoice: 'INV003',
            paymentStatus: 'Unpaid',
            totalAmount: '$350.00',
            paymentMethod: 'Bank Transfer',
        },
        {
            invoice: 'INV004',
            paymentStatus: 'Paid',
            totalAmount: '$450.00',
            paymentMethod: 'Credit Card',
        },
        {
            invoice: 'INV005',
            paymentStatus: 'Paid',
            totalAmount: '$550.00',
            paymentMethod: 'PayPal',
        },
        {
            invoice: 'INV006',
            paymentStatus: 'Pending',
            totalAmount: '$200.00',
            paymentMethod: 'Bank Transfer',
        },
        {
            invoice: 'INV007',
            paymentStatus: 'Unpaid',
            totalAmount: '$300.00',
            paymentMethod: 'Credit Card',
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
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="tue">
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="wed">
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="thu">
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="fri">
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="sat">
                <DayTable data={invoices} />
            </TabsContent>
            <TabsContent value="sun">
                <DayTable data={invoices} />
            </TabsContent>
        </Tabs>
    )
}

export default Schedule
