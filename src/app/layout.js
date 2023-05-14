import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Preliminary Interview Test',
  description: 'Bincom Dev Center Preliminary Interview Test for Trainee Developer / Intern (Mobile App)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

