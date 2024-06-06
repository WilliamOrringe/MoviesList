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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useUser } from '@auth0/nextjs-auth0/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faBookmark,
    faGear,
    faMoon,
    faRightFromBracket,
    faSun,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { Type as z } from '@sinclair/typebox'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import SkeletonLoader from '../ui/skeleton-loader'
import { Switch } from '@/components/ui/switch'
import { Separator } from '../ui/separator'

export const LoginFormValues = z.Object({
    email: z.String({ minLength: 5, maxLength: 255, format: 'email' }),
    password: z.String({ minLength: 8, maxLength: 255 }),
})

const Navbar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: typeboxResolver(LoginFormValues) })

    //TODO: get this from API
    const notifications = [
        {
            title: 'Your call has been confirmed.',
            description: '1 hour ago',
        },
        {
            title: 'You have a new message!',
            description: '1 hour ago',
        },
        {
            title: 'Your subscription is expiring soon!',
            description: '2 hours ago',
        },
    ]

    const onSubmit = (data: any) => {
        // Handle login logic here
        console.log(data)
    }

    const { user, error, isLoading } = useUser()

    if (isLoading)
        return (
            <div>
                <SkeletonLoader height={50} />
            </div>
        )
    if (error) return <div>{error.message}</div>

    return (
        <div className="flex flex-row justify-between my-4">
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
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Shows
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/movies?sort=trending&genre=all" passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Movies
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/mylist" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                MyList
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    {user && (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger isArrow={false}>
                                <FontAwesomeIcon icon={faBell} />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <Card className={cn('w-[300px]')}>
                                    <CardHeader>
                                        <CardTitle>Notifications</CardTitle>
                                        <CardDescription>
                                            You have 3 unread messages.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                                            <FontAwesomeIcon icon={faBell} />
                                            <div className="flex-1 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    Push Notifications
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Send notifications to
                                                    device.
                                                </p>
                                            </div>
                                            <Switch />
                                        </div>
                                        <div>
                                            {notifications.map(
                                                (notification, index) => (
                                                    <div
                                                        key={index}
                                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                                    >
                                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                        <div className="space-y-1">
                                                            <p className="text-sm font-medium leading-none">
                                                                {
                                                                    notification.title
                                                                }
                                                            </p>
                                                            <p className="text-sm text-muted-foreground">
                                                                {
                                                                    notification.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">
                                            <FontAwesomeIcon
                                                icon={faBell}
                                                className="mr-2 h-4 w-4"
                                            />
                                            Mark all as read
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )}
                    <NavigationMenuItem>
                        {user ? (
                            <>
                                <NavigationMenuTrigger
                                    isArrow={false}
                                    className={cn(
                                        'hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent'
                                    )}
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src={user?.picture ?? ''}
                                            alt="user profile picture"
                                        />
                                        <AvatarFallback>
                                            <FontAwesomeIcon icon={faUser} />
                                        </AvatarFallback>
                                    </Avatar>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Card className={cn('w-[300px]')}>
                                        <CardHeader>
                                            <CardTitle>Account</CardTitle>
                                        </CardHeader>
                                        <CardContent className="grid gap-2">
                                            <div className="flex flex-row items-center justify-left">
                                                <Button variant="link">
                                                    <FontAwesomeIcon
                                                        icon={faUser}
                                                        className="mr-2 h-4 w-4"
                                                    />
                                                    Profile
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-left">
                                                <Button variant="link">
                                                    <FontAwesomeIcon
                                                        icon={faBookmark}
                                                        className="mr-2 h-4 w-4"
                                                    />
                                                    MyList
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-left">
                                                <Button variant="link">
                                                    <FontAwesomeIcon
                                                        icon={faBell}
                                                        className="mr-2 h-4 w-4"
                                                    />
                                                    Notifications
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-left">
                                                <Button variant="link">
                                                    <FontAwesomeIcon
                                                        icon={faGear}
                                                        className="mr-2 h-4 w-4"
                                                    />
                                                    Settings
                                                </Button>
                                            </div>
                                            <Separator />
                                            <div>
                                                <div className="flex flex-row items-center justify-between">
                                                    <Button
                                                        variant="link"
                                                        className="pointer-events-none"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faMoon}
                                                            className="mr-2 h-4 w-4"
                                                        />
                                                        Dark Mode
                                                    </Button>
                                                    <ThemeSwitcher />
                                                </div>
                                            </div>
                                            <Separator />
                                            <div className="flex flex-row items-center justify-left">
                                                <Link href="/api/auth/logout">
                                                    <Button variant="link">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faRightFromBracket
                                                            }
                                                            className="mr-2 h-4 w-4"
                                                        />
                                                        Log out
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <Button>
                                <Link href="/api/auth/login">Login</Link>
                            </Button>
                        )}
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
