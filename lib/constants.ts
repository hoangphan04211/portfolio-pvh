import type { Metadata } from 'next';

export const METADATA_CONFIG: Metadata = {
  title: 'Portfolio - PhanVanHoang',
  description: 'Portfolio of Phan Van Hoang - Frontend Developer specializing in React, Next.js, and modern web technologies.',
  metadataBase: new URL('https://hoangphan.info.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Phan Van Hoang | Frontend Developer Portfolio',
    description: 'Expert in building high-performance, pixel-perfect, modern web applications.',
    url: 'https://hoangphan.info.vn',
    siteName: 'Phan Van Hoang',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Phan Van Hoang Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phan Van Hoang | Frontend Developer',
    description: 'Frontend Developer specializing in Next.js and React.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Phan Van Hoang',
  jobTitle: 'Frontend Developer',
  url: 'https://hoangphan.info.vn',
  sameAs: [
    'https://github.com/hoangphan04211',
    'https://linkedin.com/in/hoangphan04211'
  ],
  description: 'IT student with a strong passion for Frontend Development.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ho Chi Minh City',
    addressCountry: 'Vietnam'
  }
};
