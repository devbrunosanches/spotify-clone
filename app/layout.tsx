import './globals.css'
import { Cabin } from 'next/font/google'

import { ModalProvider, SupabaseProvider, ToasterProvider, UserProvider } from '@/providers'
import { getActiveProductsWithPrices, getSongsByUserId } from '@/actions'
import { Player, Sidebar } from '@/components'

const font = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'What about music !?',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();

  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
