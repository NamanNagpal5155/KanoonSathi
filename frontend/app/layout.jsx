import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'कानूनसाथी | KanoonSaathi - Sovereign Legal Aid Platform',
  description: 'Constitutional Civic-Tech Authentication & Legal Aid Suite under Article 39A of the Indian Constitution, integrated with NALSA Tele-Law.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind CSS CDN & Design System Tokens */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "surface": "#fef9f0",
                      "tertiary": "#1a1100",
                      "inverse-primary": "#b9c6eb",
                      "on-secondary": "#ffffff",
                      "on-error-container": "#93000a",
                      "secondary-container": "#ff8345",
                      "on-tertiary": "#ffffff",
                      "surface-dim": "#ded9d1",
                      "surface-variant": "#e7e2d9",
                      "surface-container-low": "#f8f3ea",
                      "on-primary-container": "#828eb1",
                      "on-secondary-fixed": "#351000",
                      "on-surface-variant": "#45464d",
                      "primary": "#04122e",
                      "inverse-surface": "#32302a",
                      "surface-tint": "#515e7e",
                      "secondary-fixed": "#ffdbcc",
                      "on-primary": "#ffffff",
                      "error-container": "#ffdad6",
                      "tertiary-fixed": "#ffdf9b",
                      "on-tertiary-fixed-variant": "#59440e",
                      "on-primary-fixed": "#0d1b37",
                      "primary-fixed-dim": "#b9c6eb",
                      "outline": "#75777e",
                      "surface-bright": "#fef9f0",
                      "on-secondary-container": "#692700",
                      "on-primary-fixed-variant": "#3a4665",
                      "outline-variant": "#c5c6ce",
                      "surface-container-highest": "#e7e2d9",
                      "on-background": "#1d1c16",
                      "error": "#ba1a1a",
                      "secondary-fixed-dim": "#ffb695",
                      "on-tertiary-container": "#a68b4f",
                      "primary-fixed": "#d9e2ff",
                      "on-surface": "#1d1c16",
                      "surface-container-high": "#ece8df",
                      "surface-container-lowest": "#ffffff",
                      "on-error": "#ffffff",
                      "tertiary-fixed-dim": "#e2c381",
                      "background": "#fef9f0",
                      "primary-container": "#1a2744",
                      "inverse-on-surface": "#f5f0e7",
                      "surface-container": "#f2ede4",
                      "secondary": "#a23f00",
                      "tertiary-container": "#342500",
                      "on-tertiary-fixed": "#251a00"
                    },
                    fontFamily: {
                      serif: ["Playfair Display", "serif"],
                      sans: ["Plus Jakarta Sans", "sans-serif"]
                    }
                  }
                }
              }
            `
          }}
        />
      </head>
      <body className="bg-background text-on-surface min-h-screen flex flex-col font-sans antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
