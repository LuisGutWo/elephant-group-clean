export default function scrollToTop() {
  if (typeof window === "undefined") return () => {};

  const onClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  // Bind click handler to all matching elements.
  const els = document.querySelectorAll(".progress-wrap");
  els.forEach((el) => el.addEventListener("click", onClick));

  return () => {
    els.forEach((el) => el.removeEventListener("click", onClick));
  };
}
