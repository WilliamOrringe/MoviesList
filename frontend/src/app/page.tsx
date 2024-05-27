import Schedule from '@/components/schedule/Schedule'
import Home from './_home/home'

const Page = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Home />
            <Schedule />
        </div>
    )
}

export default Page
