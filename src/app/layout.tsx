import type { Metadata } from "next";
import { Providers } from "./providers";
import localFont from 'next/font/local'
import "./globals.css";

const rocGrotesk = localFont({
    src: [
        {
            path: '../fonts/Roc-Grotesk-thin.otf',
            weight: '100',
        },
        {
            path: '../fonts/Roc-Grotesk-light.otf',
            weight: '300',
        },
        {
            path: '../fonts/Roc-Grotesk-regular.otf',
            weight: '400',
        },
        {
            path: '../fonts/Roc-Grotesk-medium.otf',
            weight: '500',
        },
    ],
})

export const metadata: Metadata = {
    title: "Listly",
    description: "A minimal To-Do List App",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${rocGrotesk.className} antialiased min-h-dvh bg-custom-svg-pattern`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
