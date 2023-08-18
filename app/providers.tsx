// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </ThemeProvider>
  )
}