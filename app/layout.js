import './globals.css'
import { Inter } from 'next/font/google'
import {
  Alert,
  Nav } from '@/components'
const inter = Inter({ subsets: ['latin'] })
import DataState from '@/context/data/DataDState'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// import sessionContext

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <DataState>

      <Nav />
      {/* <div className='relative  '>
      <Alert  />

      </div> */}
        <div className='mx-[8px] sm:mx-[16px] md:mx-[32px] lg:mx-[64px] max-lg:mx-[128px] mt-[100px] relative '>
      <Alert />
      <div>

        {children}
        </div>

          </div>
          </DataState>
        </body>
    </html>
  )
}
