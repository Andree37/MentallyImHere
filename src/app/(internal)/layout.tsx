import React from "react";
import Footer from "@/components/Footer";
import {ToggleProvider} from "@/components/Providers/ToggleProvider";
import SimplerNavbar from "@/components/SimplerNavbar";

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
        <>
            <ToggleProvider>
                <SimplerNavbar/>
                {children}
                <Footer/>
            </ToggleProvider>
        </>
    );
}
