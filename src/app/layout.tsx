import './globals.css';
import React from 'react';
import { Poppins } from 'next/font/google';

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
        <html lang="pt">
            <body className={`${poppins.variable}`}>{children}</body>
        </html>
    );
}
