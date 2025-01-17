import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeChangeButton from './components/ThemeChange'
import { getCurrentTheme } from './utils/theme'
import localfont from "next/font/local";

const inter = Inter({ subsets: ['latin'] });

const android = localfont(
  {
    src: [{
      path: "../public/fonts/Android Insomnia Regular.ttf",
      weight: "700"
    }],
    variable: "--font-android"
  }
)
const aquire = localfont(
  {
    src: [{
      path: "../public/fonts/Aquire-BW0ox.otf",
      weight: "700"
    }],
    variable: "--font-aquire"
  }
)
const comfortaa = localfont(
  {
    src: [{
      path: "../public/fonts/Comfortaa-VariableFont_wght.ttf",
      weight: "700"
    }],
    variable: "--font-comfortaa"
  }
)
const megrim = localfont(
  {
    src: [{
      path: "../public/fonts/Megrim-Regular.ttf",
      weight: "700"
    }],
    variable: "--font-megrim"
  }
)

export const metadata: Metadata = {
  title: 'Equation Toolbox',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme={getCurrentTheme()} className={`${android.variable} ${aquire.variable} ${comfortaa.variable} ${megrim.variable}`}>
      <body className={inter.className}>
        <div className='fixed bottom-2 right-2 h-16 w-16 p-2 z-10'>
          <ThemeChangeButton />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
