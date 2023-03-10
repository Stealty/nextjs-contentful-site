import Header from "@/components/organisms/Header/Header";
import "../styles/globals.css";
import "../styles/variables.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
