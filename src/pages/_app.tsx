// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <ClerkProvider>
      <div className="middle">
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>
      </div>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  );
}
