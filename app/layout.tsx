import '@/app/ui/global.css'
import Header from './header/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <Header/>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
