import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/lib/data";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  keywords: ["Piratheep Rajaratnam", "Full-stack developer", "Laravel", "React", "Next.js", "WordPress", "PHP", "Sri Lanka", "Remote"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

// Sets the theme before paint to avoid a flash. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
