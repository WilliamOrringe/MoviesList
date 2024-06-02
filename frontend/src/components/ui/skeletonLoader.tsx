import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonLoaderProps {
    height: number
    width?: number // Make width optional
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ height, width }) => {
    return (
        <div className="skeleton-background">
            <SkeletonTheme
                baseColor="hsl(var(--skbackground))"
                highlightColor="hsl(var(--background))"
            >
                <section>
                    <Skeleton height={height} width={width || '100%'} />
                </section>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonLoader
