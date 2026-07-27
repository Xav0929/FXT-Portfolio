import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francis Tonzo | Full-Stack Developer Portfolio",
  icons: {
    icon: "/logo.png",
  },
  description: "Francis Tonzo — IT Student and aspiring Full-Stack Developer. Explore my projects, skills, and get in touch.",
  keywords: "Francis Tonzo, Full-Stack Developer, IT Student, Portfolio, Web Developer, JavaScript, PHP, MongoDB",
  authors: [{ name: "Francis Tonzo" }],
  openGraph: {
    title: "Francis Tonzo | Full-Stack Developer Portfolio",
    description: "IT Student and aspiring Full-Stack Developer. View my projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0a0f] text-white">
        {/* Background Effects */}
        <div className="bg-effects">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
          <div className="bg-orb bg-orb-3"></div>
          <div className="bg-grid"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
