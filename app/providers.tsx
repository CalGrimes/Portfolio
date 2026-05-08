'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import * as React from 'react'

// Suppress the React 19 script injection warning in development
// This is a known issue with next-themes injecting a script for theme detection
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    orig.apply(console, args);
  };
}

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider enableSystem={true} attribute="class">
        <ChakraProvider value={defaultSystem}>
          {children}
        </ChakraProvider>
    </NextThemesProvider>
  )
}