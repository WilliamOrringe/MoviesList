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
        time: string
        title: string
        episode: string
    }[]
}) => {
    return (
        <Table>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.time}>
                        <TableCell className="font-medium">
                            {row.time}
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell className="text-right">
                            {row.episode}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DayTable
