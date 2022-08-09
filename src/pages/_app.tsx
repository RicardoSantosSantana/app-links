import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
// 1. Import the extendTheme function
 

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

// 3. Pass the `theme` prop to the `ChakraProvider`
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp;
