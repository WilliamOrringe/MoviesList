import React from 'react'

const Page = ({ params }: { params: { show: string } }) => {
    return <div>{params.show}</div>
}

export default Page
