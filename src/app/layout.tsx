import './globals.css'
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: 'Mentally I am Here',
    description: 'Mentally I am Here and not there',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
