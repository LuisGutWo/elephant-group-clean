import ProgressScroll from "@/components/Common/ProgressScroll";
import WhatsAppButton from "@/components/Common/WhatsAppButton";

export default function Layout({ children }) {
  return (
    <>
      <ProgressScroll />
      <WhatsAppButton />
      {children}
    </>
  );
}
