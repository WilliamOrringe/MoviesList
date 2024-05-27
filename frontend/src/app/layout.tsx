import React from 'react'
import './globals.css'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/navbar/Navbar'
import Landing from '@/components/landing/Landing'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html
            lang="en-GB"
            className="dark dark:bg-backgroundDark dark:text-textDark dark:accent-accentDark bg-backgroundLight text-textDark accent-accentLight m-12"
        >
            <body className="flex flex-col space-y-4 max-w-screen-lg mx-auto justify-center">
                <Navbar />
                <Landing />
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default Layout
