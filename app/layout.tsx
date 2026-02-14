import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schurter MOVEA GmbH | Beratung für Verkehr und Mobilität",
  description: "Schurter MOVEA GmbH bietet Beratungsdienstleistungen im Bereich Verkehrsanlagen, Mobilitätsfragen und Führungsunterstützung für Verwaltungen, Unternehmen und Organisationen in der Schweiz.",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wdth,wght@0,112.5,200..900;1,112.5,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
