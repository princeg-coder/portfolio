import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PORTFOLIO | Prince Gupta - Senior Backend Engineer',
  description: 'Portfolio of Prince Gupta, a Senior Backend Developer specializing in Node.js, AWS, and scalable backend systems.',
  icons: {
    icon: '/icons8-portfolio-80.png',
    shortcut: '/icons8-portfolio-80.png',
    apple: '/icons8-portfolio-80.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
