import type { AppProps } from "next/app";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { NextIntlClientProvider } from "next-intl";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import Script from "next/script";
import "@/styles/globals.css";

import DefaultLayout from "@/layouts/default";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider>
          <NextIntlClientProvider
            locale={router.locale}
            messages={pageProps.messages}
            timeZone="Europe/Vienna"
          >
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </NextIntlClientProvider>
        </NextThemesProvider>
      </NextUIProvider>

      {/* Self-hosted Plausible Web Analytics */}
      <Script
        defer
        data-domain="studentiunimi.it"
        src="https://p.studentiunimi.it/js/script.js"
      />
    </>
  );
}

export const fonts = {
  sans: GeistSans.style.fontFamily,
  mono: GeistMono.style.fontFamily,
};
