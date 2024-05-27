import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const DayTable = ({
    data,
}: {
    data: {
        invoice: string
        paymentStatus: string
        totalAmount: string
        paymentMethod: string
    }[]
}) => {
    return (
        <Table>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.invoice}>
                        <TableCell className="font-medium">
                            {row.invoice}
                        </TableCell>
                        <TableCell>{row.paymentStatus}</TableCell>
                        <TableCell>{row.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                            {row.totalAmount}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DayTable
