import './globals.css'
import { Cabin } from 'next/font/google'

import { Sidebar } from '@/components'
import { SupabaseProvider, UserProvider } from '@/providers'

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
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
