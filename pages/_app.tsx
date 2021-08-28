import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../chakra.config";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>{" "}
    </>
  );
}
export default MyApp;
