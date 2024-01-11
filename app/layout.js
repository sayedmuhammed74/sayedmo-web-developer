import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sayed Mo | Front-End Developer',
  description:
    'Front-End Developer | MERN STACK Developer | Javascript Developer | Next.JS Developer | Node.JS Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ` bg-[url('/background.jpg')] bg-white bg-repeat-round`
        }
      >
        {children}
      </body>
    </html>
  );
}
