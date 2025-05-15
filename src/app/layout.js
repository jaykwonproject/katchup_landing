// src/app/layout.js
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Katchup - Catch up with your favorite people',
  description: 'Katchup is a new way to stay connected with your friends and family.',
}

// Add this separate viewport export as recommended by Next.js
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="center" />
      </body>
    </html>
  )
}