import type { AppProps } from "next/app";
import { UserProvider } from "../context/userContext";
import { globalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
