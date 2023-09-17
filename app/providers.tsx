// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import { ChakraProvider } from '@chakra-ui/react'


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <ChakraProvider theme={{ extendTheme: {} }}>
          {children}
        </ChakraProvider>
    </ThemeProvider>
  )
}