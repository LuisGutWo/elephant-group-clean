import React from "react";
import { ProgressScroll, WhatsAppButton } from "@/components/layout";

export default function Layout({ children }) {
  return (
    <>
      <ProgressScroll />
      <WhatsAppButton />
      {children}
    </>
  );
}
