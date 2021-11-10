import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import { SideBarDrawerProvider } from "../contexts/SideBarDrawerContex"
import theme from "@chakra-ui/theme"

function MyApp({ Component, pageProps}: AppProps) {
  return( 
  <ChakraProvider resetCSS={false} theme={theme}>
    <SideBarDrawerProvider>
      <Component {...pageProps} />
    </SideBarDrawerProvider>
  </ChakraProvider>
  )
}

export default MyApp
