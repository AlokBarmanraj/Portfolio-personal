export default function Footer() {
  const socialLinks = ["Dribbble", "Behance", "LinkedIn", "Instagram"];

  return (
    <footer className="w-full border-t border-zinc-900 mt-20 bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-16 px-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-zinc-50 font-serif tracking-tight">ROBERT</div>
        <div className="flex gap-10">
          {socialLinks.map((link) => (
            <a
              key={link}
              className="font-serif text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="font-serif text-sm uppercase tracking-widest text-zinc-500 text-center md:text-right">
          © 2024 ROBERT DESIGN. CRAFTED FOR EXCELLENCE.
        </div>
      </div>
    </footer>
  );
}
