import Show from '@/app/_show/show'
import React from 'react'

const Page = ({ params }: { params: { show: string } }) => {
    return (
        <div>
            <Show />
        </div>
    )
}

export default Page
