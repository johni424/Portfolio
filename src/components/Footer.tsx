export default function Footer() {
  return (
    <footer className="h-24 md:h-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 border-t border-white/5 bg-[#100E11] mt-24">
      <div className="flex gap-6 items-center mb-4 md:mb-0">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Current Status: Available for Projects</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Twitter</a>
        <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Github</a>
        <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Dribbble</a>
      </div>
    </footer>
  );
}
