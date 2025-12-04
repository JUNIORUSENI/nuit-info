import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GameProvider } from "./contexts/GameContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opération N.I.R.D - Le Village Résiste",
  description: "Rejoins la Résistance Numérique ! Un jeu éducatif pour découvrir le Numérique Inclusif, Responsable et Durable.",
  keywords: ["NIRD", "Linux", "logiciels libres", "écologie numérique", "éducation", "Nuit de l'Info"],
  authors: [{ name: "Équipe NIRD" }],
  openGraph: {
    title: "Opération N.I.R.D - Le Village Résiste",
    description: "Libère ton écran, sauve ton budget. Un jeu éducatif sur le numérique responsable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
