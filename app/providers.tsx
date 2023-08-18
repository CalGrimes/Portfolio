// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CacheProvider>
        <ChakraProvider theme={{ extendTheme: {} }}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ThemeProvider>
  )
}