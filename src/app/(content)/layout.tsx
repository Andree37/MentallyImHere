import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ToggleProvider } from '@/components/Providers/ToggleProvider';
import { Poppins } from 'next/font/google';

// Define Poppins font with specific configurations
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins', // you can use the 'poppins' variable in your styles or components
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: 'PsiPlexus',
    description: 'PsiPlexus - Mental Health Platform',
    keywords:
        'PsiPlexus, Mental Health, Mental Health Platform, Mental Health App, Mental Health Appointments, Mental Health Appointments Online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${poppins.variable}`}>
            <ToggleProvider>
                <Navbar />
                {children}
                <Footer />
            </ToggleProvider>
        </div>
    );
}
