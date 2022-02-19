import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { createContext, useEffect, useState } from "react";

type DepthChange = "SHALLOW" | "DEEP";
export const RouteDepthChangeContext = createContext<DepthChange>("DEEP");

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [depthChange, setDepthChange] = useState<DepthChange>("DEEP");

  useEffect(() => {
    const handleChangeRoute = (url: string) => {
      const depth =
        router.pathname.split("/").length < url.split("/").length
          ? "DEEP"
          : "SHALLOW";
      setDepthChange(depth);

      console.log("depthChange", {
        prev: router.pathname,
        next: url,
        change: depth,
      });
    };

    router.events.on("routeChangeStart", handleChangeRoute);
    return () => {
      router.events.off("routeChangeStart", handleChangeRoute);
    };
  }, [router, router.events]);

  return (
    <ChakraProvider>
      <RouteDepthChangeContext.Provider value={depthChange}>
        <AnimatePresence initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </RouteDepthChangeContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
