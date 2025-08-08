import { Poppins } from 'next/font/google';
import './globals.css';
// const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // اختار الأوزان اللي هتستخدمها
  display: 'swap',
  variable: '--font-poppins',
});

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
          poppins.className +
          ` bg-[url('/background.jpg')] bg-white bg-repeat-round`
        }
      >
        {children}
      </body>
    </html>
  );
}
