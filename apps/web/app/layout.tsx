import './tailwind.css';

export const metadata = {
  title: 'Splitter',
  description: 'Split your work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#282828' />
        <meta name='msapplication-TileColor' content='#282828' />
        <meta name='theme-color' content='#282828' />
      </head>

      <body>{children}</body>
    </html>
  );
}
