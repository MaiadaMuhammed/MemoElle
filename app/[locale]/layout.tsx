import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Zen_Dots, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css"; 
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const zenDots = Zen_Dots({ weight: "400", subsets: ["latin"], variable: "--font-zen", display: "swap" });
const ibmArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ['300', '400', '500', '700'], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = {
  title: "MemoElle | Redefining Luxury",
  description: "Discover exclusive fashion, beauty, and home collections.",
};

// ✅ التصحيح: فك الكائن (Destructuring) لاستلام children و params
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;
  
  // ✅ الحل: استخراج children من props
  const { children } = props; 

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}