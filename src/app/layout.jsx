import './globals.css'

export const metadata = {
  title: 'Bangladesh Mouza Map Finder',
  description: 'Find mouza maps across Bangladesh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
