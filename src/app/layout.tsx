import "./globals.css";
import { Inter } from "next/font/google";
import "materialize-css/dist/css/materialize.min.css";
import ClientLevel from "../components/clientLevel/ClientLevel";
import Header from "../components/header/Header";
import Providers from "../redux/provider";
import { getUserDetails } from "../utils/userDataFetch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emaily - Send emails ",
  description: "We send emails to remind you about your important events.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserDetails();
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ClientLevel userObj={user}>
          <Providers>
            <Header />
            <div className="container">{children}</div>
          </Providers>
        </ClientLevel>
      </body>
    </html>
  );
}
