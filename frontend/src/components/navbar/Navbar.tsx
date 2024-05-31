'use client'

import {
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    Fragment,
} from 'react'
import ThemeSwitcher from '../ThemeSwitcher'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FilmGenres, ShowGenres } from './genres'
import { useUser } from '@auth0/nextjs-auth0/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const { user, error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div className="flex flex-row justify-between">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/shows?sort=trending&genre=all" passHref>
                            <NavigationMenuTrigger>Shows</NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/shows"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFilm}
                                                className="w-5 h-5"
                                            />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Shows
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components
                                                that you can copy and paste into
                                                your apps. Accessible.
                                                Customizable. Open Source.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <ul className="grid gap-3 p-4 md:grid-cols-2 w-full ">
                                        {ShowGenres.map((genre) => (
                                            <Fragment key={genre.title}>
                                                <ListItem
                                                    title={genre.title}
                                                    href={genre.href}
                                                    icon={genre.icon}
                                                >
                                                    {genre.description}
                                                </ListItem>
                                            </Fragment>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/movies?sort=trending&genre=all" passHref>
                            <NavigationMenuTrigger>
                                Movies
                            </NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/movies?sort=trending"
                                        >
                                            <FontAwesomeIcon
                                                icon={faFilm}
                                                className="w-5 h-5"
                                            />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Movies
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components
                                                that you can copy and paste into
                                                your apps. Accessible.
                                                Customizable. Open Source.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <ul className="grid gap-3 p-4 md:grid-cols-2 w-full ">
                                        {FilmGenres.map((genre) => (
                                            <Fragment key={genre.title}>
                                                <ListItem
                                                    title={genre.title}
                                                    href={genre.href}
                                                    icon={genre.icon}
                                                >
                                                    {genre.description}
                                                </ListItem>
                                            </Fragment>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/schedule" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Schedules
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <ThemeSwitcher />
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:cursor-pointer">
                        <Avatar>
                            <AvatarImage
                                src={user?.picture ?? ''}
                                alt="user profile picture"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = forwardRef<
    ElementRef<'a'>,
    ComponentPropsWithoutRef<'a'> & { icon?: any }
>(({ className, title, icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none flex flex-row gap-2">
                        {icon}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

export default Navbar
