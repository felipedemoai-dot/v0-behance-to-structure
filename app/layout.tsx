import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const mwSans = localFont({
  src: [
    { path: '../public/fonts/MWSans-Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/MWSans-Italic.otf', weight: '400', style: 'italic' },
    { path: '../public/fonts/MWSans-SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../public/fonts/MWSans-SemiBoldItalic.otf', weight: '600', style: 'italic' },
    { path: '../public/fonts/MWSans-Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/fonts/MWSans-BoldItalic.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-mw-sans',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['400', '500'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Felipe Gaete Vilches — Director Creativo Estratégico',
  description:
    'Director Creativo con 25 años liderando estrategia creativa y ejecución integrada para marcas regionales y globales. Brand strategy, creative leadership y dirección creativa.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${mwSans.variable} ${newsreader.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
