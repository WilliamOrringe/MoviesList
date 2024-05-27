import {
    faFilm,
    faFistRaised,
    faHandcuffs,
    faLaughSquint,
    faMountain,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const genres: {
    title: string
    href: string
    icon: JSX.Element
    description: string
}[] = [
    {
        title: 'Action',
        href: '/movies?genre=action',
        icon: <FontAwesomeIcon icon={faFistRaised} />,
        description:
            'Go to the action page to see the latest action movies available.',
    },
    {
        title: 'Adventure',
        href: '/movies?genre=adventure',
        icon: <FontAwesomeIcon icon={faMountain} />,
        description:
            'Go to the adventure page to see the latest adventure movies available.',
    },
    {
        title: 'Animation',
        href: '/movies?genre=animation',
        icon: <FontAwesomeIcon icon={faFilm} />,
        description:
            'Go to the animation page to see the latest animation movies available.',
    },
    {
        title: 'Comedy',
        href: '/movies?genre=comedy',
        icon: <FontAwesomeIcon icon={faLaughSquint} />,
        description:
            'Go to the comedy page to see the latest comedy movies available.',
    },
    {
        title: 'Crime',
        href: '/movies?genre=crime',
        icon: <FontAwesomeIcon icon={faHandcuffs} />,
        description:
            'Go to the crime page to see the latest crime movies available.',
    },
]
