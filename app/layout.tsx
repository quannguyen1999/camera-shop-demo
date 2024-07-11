"use client";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={roboto.className}>
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
