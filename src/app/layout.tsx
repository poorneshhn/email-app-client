import "./globals.css";
import { Inter } from "next/font/google";
import "materialize-css/dist/css/materialize.min.css";
import { cookies } from "next/headers";
import { API } from "../contants/urlConstants";
import ClientLevel from "../components/clientLevel/ClientLevel";
import Header from "../components/header/Header";
import Providers from "../redux/provider";
import { isLoggedIn } from "../utils/userUtils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emaily - Send feedback emails ",
  description:
    "We send emails on behalf of you to your clients. Contact us for more.",
};

const getUserDetails = async () => {
  try {
    let data = await fetch(API + "/user", {
      headers: { Cookie: cookies().toString() },
    });
    let strData = await data.text();
    strData = strData ? JSON.parse(strData) : {};

    return strData;
  } catch (error) {
    console.log(error, "error");
    return {};
  }
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
            <div className="container">
              {isLoggedIn(user) ? (
                children
              ) : (
                <div className="login-text">Please login to continue</div>
              )}
            </div>
          </Providers>
        </ClientLevel>
      </body>
    </html>
  );
}
