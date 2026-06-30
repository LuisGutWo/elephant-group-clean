import WhatsAppButton from "@/components/Common/WhatsAppButton";
import ProgressScroll from "@/components/Common/ProgressScroll";

export default function Layout({ children }) {
  return (
    <>
      <ProgressScroll />
      <WhatsAppButton />
      {children}
    </>
  );
}
