import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cygnustics',
  description: 'Generated Cygnustics Website',
  author: 'Akash Yadav',
  keywords: 'web development, Next.js, React, etc.',
  // image: '/path/to/your/image.jpg',  // Replace with the path to your image
  // url: 'https://yourwebsite.com',    // Replace with your actual website URL
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'  >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph meta tags for better sharing on social media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Additional SEO-related meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.url} />
        <meta name="google-site-verification" content="your-google-verification-code" />

        <title>{metadata.title}</title>

        {/* Favicon */}
        <link rel="icon" href="/icon-logo.png" />

        {/* Additional meta tags or link tags can be added here */}

        {/* External stylesheet example */}
        {/* <link rel="stylesheet" href="https://example.com/styles.css" /> */}
      </head>
      <body
        style={{ margin: 0 }}
        suppressHydrationWarning={true}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
