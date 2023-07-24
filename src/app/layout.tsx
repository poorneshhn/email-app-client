import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./redux/provider";
// @ts-ignore
import "materialize-css/dist/css/materialize.min.css";
import UserContext from "./user-context/userContext";
import Header from "./components/header/Header";
import { cookies } from "next/headers";
import { API } from "../contants/urlConstants";
import { store } from "./redux/store";
import { setCurrentUser } from "./redux/slices/authSlice";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emaily - Send feedback emails ",
  description:
    "We send emails on behalf of you to your clients. Contact us for more.",
};

const getUserDetails = async () => {
  try {
    let data = await fetch(API + "/api/user", {
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
      <body className={inter.className}>
        <UserContext userObj={user}>
          <Providers>
            <Header user={user} />
            <div className="container">{children}</div>
          </Providers>
        </UserContext>
      </body>
    </html>
  );
}
