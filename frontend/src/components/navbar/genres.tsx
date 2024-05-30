import { faSurprise } from '@fortawesome/free-regular-svg-icons'
import {
    faFilm,
    faFistRaised,
    faHandcuffs,
    faHatWizard,
    faLaughSquint,
    faMagnifyingGlass,
    faManatSign,
    faMasksTheater,
    faMountain,
    faRocket,
    faShield,
    faSkull,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export enum FilmGenreTitles {
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
}
export const FilmGenres: {
    title: keyof typeof FilmGenreTitles
    href: string
    icon: JSX.Element
    description: string
}[] = [
    {
        title: 'Action',
        href: '/movies?sort=trending&genre=action',
        icon: <FontAwesomeIcon icon={faFistRaised} />,
        description:
            'Go to the action page to see the latest action movies available.',
    },
    {
        title: 'Adventure',
        href: '/movies?sort=trending&genre=adventure',
        icon: <FontAwesomeIcon icon={faMountain} />,
        description:
            'Go to the adventure page to see the latest adventure movies available.',
    },
    {
        title: 'Animation',
        href: '/movies?sort=trending&genre=animation',
        icon: <FontAwesomeIcon icon={faFilm} />,
        description:
            'Go to the animation page to see the latest animation movies available.',
    },
    {
        title: 'Comedy',
        href: '/movies?sort=trending&genre=comedy',
        icon: <FontAwesomeIcon icon={faLaughSquint} />,
        description:
            'Go to the comedy page to see the latest comedy movies available.',
    },
    {
        title: 'Crime',
        href: '/movies?sort=trending&genre=crime',
        icon: <FontAwesomeIcon icon={faHandcuffs} />,
        description:
            'Go to the crime page to see the latest crime movies available.',
    },
    {
        title: 'Documentary',
        href: '/movies?sort=trending&genre=documentary',
        icon: <FontAwesomeIcon icon={faManatSign} />,
        description:
            'Go to the documentary page to see the latest documentary movies available.',
    },
]
export enum ShowGenreTitles {
    'all',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Sci-Fi',
    'Thriller',
}
export const ShowGenres: {
    title: keyof typeof ShowGenreTitles
    href: string
    icon: JSX.Element
    description: string
}[] = [
    {
        title: 'Drama',
        href: '/shows?sort=trending&genre=drama',
        icon: <FontAwesomeIcon icon={faMasksTheater} />,
        description:
            'Go to the drama page to see the latest drama shows available.',
    },
    {
        title: 'Fantasy',
        href: '/shows?sort=trending&genre=fantasy',
        icon: <FontAwesomeIcon icon={faHatWizard} />,
        description:
            'Go to the fantasy page to see the latest fantasy shows available.',
    },
    {
        title: 'Horror',
        href: '/shows?sort=trending&genre=horror',
        icon: <FontAwesomeIcon icon={faSurprise} />,
        description:
            'Go to the horror page to see the latest horror shows available.',
    },
    {
        title: 'Mystery',
        href: '/shows?sort=trending&genre=mystery',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        description:
            'Go to the mystery page to see the latest mystery shows available.',
    },
    {
        title: 'Sci-Fi',
        href: '/shows?sort=trending&genre=sci-fi',
        icon: <FontAwesomeIcon icon={faRocket} />,
        description:
            'Go to the sci-fi page to see the latest sci-fi shows available.',
    },
    {
        title: 'Thriller',
        href: '/shows?sort=trending&genre=thriller',
        icon: <FontAwesomeIcon icon={faSkull} />,
        description:
            'Go to the thriller page to see the latest thriller shows available.',
    },
]
