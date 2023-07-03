import './globals.css'
import { Cabin } from 'next/font/google'

import { Sidebar } from '@/components'

const font = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'What about music !?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
