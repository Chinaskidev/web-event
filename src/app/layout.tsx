import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lusun Balloons - Decoración de Eventos con Globos',
  description: 'Especialistas en decoración con globos para eventos únicos e inolvidables.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head />
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}