import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
