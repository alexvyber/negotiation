import "@/css/tailwind.css"
import "@/css/prism.css"
import "katex/dist/katex.css"

// import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from "next-themes"
import Head from "next/head"

import { siteMetadata } from "@/data/siteData/siteMetadata"
import Analytics from "@components/analytics"
import LayoutWrapper from "@components/LayoutWrapper"
import { ClientReload } from "@components/ClientReload"

import localFont from "@next/font/local"

const customFont = localFont({
  src: [
    {
      path: "../fonts/TT Commons Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/TT Commons Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-custom",
})

const isDevelopment = process.env.NODE_ENV === "development"
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <main className={`${customFont.variable} font-sans`}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </main>
    </ThemeProvider>
  )
}
