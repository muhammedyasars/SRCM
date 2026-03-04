import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Streamline RCM',
  description: 'Healthcare Revenue Cycle Management Solutions',
  icons: {
    icon: '/WhatsApp_Image_2026-02-25_at_2.06.59_PM-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: import('react').ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}