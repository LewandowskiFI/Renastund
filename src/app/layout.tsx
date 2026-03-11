import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import FloatingButton from './components/FloatingButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://renastund.fi'),
  title: 'Renastund | Siivousliinojen Vuokraus ja Pesupalvelu',
  description: 'Yhdistämme kestävyyden, edullisuuden ja helppouden. Renastund tarjoaa laadukkaat siivousliinat yrityksellesi säännöllisesti pestynä ja toimitettuna.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <FloatingButton />
      </body>
    </html>
  );
}
