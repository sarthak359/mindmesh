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
      <div className="middle" data-aos="fade-down" data-aos-duration="1500">
        <SignedOut>
          <div style={{ marginTop: "100px" }}>
            <SignIn routing="hash" />
          </div>
        </SignedOut>
      </div>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
    </ClerkProvider>
  );
}
