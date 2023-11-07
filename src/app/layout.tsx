import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {ToggleProvider} from "@/components/Providers/ToggleProvider";

export const metadata = {
    title: "PsiPlexus",
    description: "PsiPlexus - Mental Health Platform",
    keywords: "PsiPlexus, Mental Health, Mental Health Platform, Mental Health App, Mental Health Appointments, Mental Health Appointments Online",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ToggleProvider>
            <Navbar/>
            {children}
            <Footer/>
        </ToggleProvider>
        </body>
        </html>
    );
}
