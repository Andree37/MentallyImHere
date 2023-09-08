import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "PsiPlexus",
    description: "PsiPlexus - Mental Health Platform",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
