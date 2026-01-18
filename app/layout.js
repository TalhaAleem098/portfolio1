import "./globals.css";

export const metadata = {
  title: "Talha Aleem | Full-Stack Developer | Web Developer Portfolio",
  description: "Talha Aleem (Aleem Developer) - Professional Full-Stack Developer specializing in React, Next.js, Node.js, .NET Core, and modern web technologies. Expert in building high-performance web applications, ERP systems, and e-commerce platforms.",
  keywords: [
    "Talha Aleem",
    "Aleem Developer",
    "Aleem",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    ".NET Core Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Application Developer",
    "ERP Developer",
    "E-commerce Developer",
    "Portfolio",
    "Web Development Services",
    "Custom Web Applications",
    "Lahore Web Developer",
    "Pakistan Web Developer",
    "UET Lahore Graduate",
    "Computer Science Graduate"
  ],
  authors: [{ name: "Talha Aleem" }],
  creator: "Talha Aleem",
  publisher: "Talha Aleem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aleemtalhadev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Talha Aleem | Full-Stack Developer & Web Solutions Expert",
    description: "Professional Full-Stack Developer Talha Aleem (Aleem Developer) - Expert in React, Next.js, Node.js, .NET Core. Building high-performance web applications, ERP systems, and e-commerce platforms.",
    url: "https://aleemtalhadev.vercel.app",
    siteName: "Talha Aleem Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Aleem - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Aleem | Full-Stack Developer",
    description: "Professional Full-Stack Developer specializing in React, Next.js, Node.js, .NET Core. Expert web developer from Lahore, Pakistan.",
    images: ["/og-image.png"],
    creator: "@talhaaleem098",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

import Cursor from "@/components/cursor";
export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Talha Aleem",
    "alternateName": ["Aleem Talha", "Aleem Developer"],
    "jobTitle": "Full-Stack Developer",
    "description": "Professional Full-Stack Developer specializing in React, Next.js, Node.js, .NET Core, and modern web technologies. Expert in building high-performance web applications, ERP systems, and e-commerce platforms.",
    "url": "https://aleemtalhadev.vercel.app",
    "sameAs": [
      "https://github.com/TalhaAleem098",
      "https://linkedin.com/in/talhaaleem",
      "https://twitter.com/talhaaleem098"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Engineering and Technology, Lahore",
      "alternateName": "UET Lahore"
    },
    "knowsAbout": [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      ".NET Core",
      "PostgreSQL",
      "MongoDB",
      "Full-Stack Development",
      "Web Development",
      "ERP Systems",
      "E-commerce Platforms"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Lahore",
        "addressCountry": "Pakistan"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f1e" />
        <meta name="msapplication-TileColor" content="#0f0f1e" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://aleemtalhadev.vercel.app" />
        {/* Google Analytics - Replace with your GA4 ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`antialiased neue`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
