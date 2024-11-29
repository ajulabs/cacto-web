import '@/app/ui/global.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
