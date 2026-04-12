export default function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-[#2c2c2c] text-center">
      <p
        className="text-2xl font-light text-white/80 mb-2 italic"
        style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)", fontWeight: 300 }}
      >
        Jinhwan &amp; Chamgyeol
      </p>
      <p
        className="text-xs text-white/30 tracking-widest"
        style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', serif)" }}
      >
        2026 · VI · XIII
      </p>
    </footer>
  );
}
