import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const fontHeading = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const fontBody = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Royal Dental Clinic | Best Dental Clinic in Warangal',
  description: 'Experience premium dental care at Royal Dental Clinic in Warangal. We offer general dentistry, root canal, implants, teeth whitening, orthodontics & more. Book your appointment today!',
  keywords: 'dental clinic Warangal, dentist Warangal, teeth whitening, root canal, dental implants, orthodontics, best dentist',
  openGraph: {
    title: 'Royal Dental Clinic - Warangal',
    description: 'Premium dental care in Warangal',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="${fontHeading.variable} ${fontBody.variable}">
      <body className="font-body">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
