import React from 'react'
import './globals.css'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/navbar/Navbar'

import { UserProvider } from '@auth0/nextjs-auth0/client'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html
            lang="en-GB"
            className="dark dark:bg-backgroundDark dark:text-textDark dark:accent-accentDark bg-backgroundLight text-textDark accent-accentLight m-2.5"
        >
            <UserProvider>
                <body className="flex flex-col space-y-4 max-w-screen-xl mx-auto justify-center">
                    <Navbar />
                    <main className="">{children}</main>
                    <Footer />
                </body>
            </UserProvider>
        </html>
    )
}

export default Layout
