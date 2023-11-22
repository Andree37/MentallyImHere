import './globals.css';
import './embla.css';
import React from 'react';

export const metadata = {
    title: 'PsiPlexus',
    description: 'PsiPlexus - Mental Health Platform',
    keywords:
        'PsiPlexus, Mental Health, Mental Health Platform, Mental Health App, Mental Health Appointments, Mental Health Appointments Online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt">
            <body>{children}</body>
        </html>
    );
}
