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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useUser } from '@auth0/nextjs-auth0/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faFilm,
    faTv,
    faTvAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '../ui/button'
import { MovieGenres } from '@/utils/genre/movieGenres'
import { useForm } from 'react-hook-form'
import { Type as z, type Static } from '@sinclair/typebox'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import { ShowGenres } from '@/utils/genre/showGenres'

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

    const onSubmit = (data: any) => {
        // Handle login logic here
        console.log(data)
    }

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
                                                icon={faTvAlt}
                                                className="w-5 h-5"
                                            />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Shows
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Go to the shows page to see the
                                                latest shows and episodes.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <ul className="grid gap-3 p-4 md:grid-cols-2 w-full ">
                                        {ShowGenres.map((genre) => (
                                            <Fragment key={genre.value}>
                                                <ListItem
                                                    title={genre.label}
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
                                        {MovieGenres.map((genre) => (
                                            <Fragment key={genre.value}>
                                                <ListItem
                                                    title={genre.label}
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
                    <NavigationMenuItem>
                        <Button variant="ghost">
                            <FontAwesomeIcon icon={faBell} />
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:cursor-pointer">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage
                                            src={user?.picture ?? ''}
                                            alt="user profile picture"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                    forceMount
                                >
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                            <DropdownMenuShortcut>
                                                ⇧⌘P
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Billing</span>
                                            <DropdownMenuShortcut>
                                                ⌘B
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                            <DropdownMenuShortcut>
                                                ⌘S
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Keyboard className="mr-2 h-4 w-4" />
                                            <span>Keyboard shortcuts</span>
                                            <DropdownMenuShortcut>
                                                ⌘K
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Users className="mr-2 h-4 w-4" />
                                            <span>Team</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                <span>Invite users</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <Mail className="mr-2 h-4 w-4" />
                                                        <span>Email</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <MessageSquare className="mr-2 h-4 w-4" />
                                                        <span>Message</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <PlusCircle className="mr-2 h-4 w-4" />
                                                        <span>More...</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            <Plus className="mr-2 h-4 w-4" />
                                            <span>New Team</span>
                                            <DropdownMenuShortcut>
                                                ⌘+T
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Github className="mr-2 h-4 w-4" />
                                        <span>GitHub</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LifeBuoy className="mr-2 h-4 w-4" />
                                        <span>Support</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem disabled>
                                        <Cloud className="mr-2 h-4 w-4" />
                                        <span>API</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <Link href="/api/auth/logout">
                                            Log out
                                        </Link>
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
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
