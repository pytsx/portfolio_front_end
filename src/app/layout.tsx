import { Metadata } from "next";
import { PropsWithChildren } from "react";
import colorShemeScript from "./getInitialColorScript";

export const metadata: Metadata = {
  title: "mui experimental cssvars",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return ( 
    <html lang="en">
      <body>
        {colorShemeScript}
        {children}
      </body>
    </html>
  )
}