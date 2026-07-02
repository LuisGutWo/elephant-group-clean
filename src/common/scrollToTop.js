export default function scrollToTop() {
  if (typeof window === "undefined") return () => {};

  const onClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const els = Array.from(document.querySelectorAll(".progress-wrap"));
  if (!els.length) return () => {};

  const rings = els.map((el) => {
    const ring = el.querySelector(".progress-circle path");
    if (!ring) return null;

    const length = ring.getTotalLength();
    ring.style.transition = "stroke-dashoffset 100ms linear";
    ring.style.strokeDasharray = `${length} ${length}`;
    ring.style.strokeDashoffset = `${length}`;
    ring.style.stroke = "var(--color-accent)";
    ring.style.strokeWidth = "4";
    return { ring, length };
  });

  const updateProgress = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const progress =
      scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0;

    els.forEach((el) => {
      if (scrollTop > 140) {
        el.classList.add("active-progress");
      } else {
        el.classList.remove("active-progress");
      }
    });

    rings.forEach((item) => {
      if (!item) return;
      item.ring.style.strokeDashoffset = `${
        item.length - progress * item.length
      }`;
    });
  };

  els.forEach((el) => el.addEventListener("click", onClick));
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  return () => {
    els.forEach((el) => el.removeEventListener("click", onClick));
    window.removeEventListener("scroll", updateProgress);
    window.removeEventListener("resize", updateProgress);
  };
}
