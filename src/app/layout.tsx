import type { Metadata } from "next";
import { Platypi, Parkinsans } from "next/font/google";
import "./globals.css";

const platypi = Platypi({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-platypi",
  subsets: ["latin"],
  display: "swap",
});

const parkinsans = Parkinsans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-parkinsans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Serena Blake, PsyD | Clinical Psychologist",
    template: "%s | Dr. Serena Blake",
  },
  description:
    "Connect with Dr. Serena Blake, a licensed clinical psychologist offering compassionate in-person and virtual therapy services in Los Angeles, CA.",
  metadataBase: new URL("https://drserenablake.vercel.app"),
  keywords: [
    "Clinical Psychologist",
    "Therapist Los Angeles",
    "Online Therapy",
    "Mental Health",
    "Psychotherapy",
    "Anxiety",
    "Depression",
    "Dr. Serena Blake",
  ],
  openGraph: {
    title: "Dr. Serena Blake, PsyD | Clinical Psychologist",
    description:
      "Licensed psychologist specializing in anxiety, depression, and life transitions. Schedule a session today.",
    url: "https://drserenablake.vercel.app",
    siteName: "Dr. Serena Blake, PsyD",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Serena Blake – Clinical Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Serena Blake, PsyD",
    description:
      "Get compassionate therapy with Dr. Serena Blake, a clinical psychologist in Los Angeles. In-person & virtual sessions available.",
    creator: "@drserenablake",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://drserenablake.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${platypi.variable} ${parkinsans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${parkinsans.className} antialiased`}>{children}</body>
    </html>
  );
}
