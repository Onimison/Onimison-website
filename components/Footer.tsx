import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-rust border-t border-muted-grey/20 relative overflow-hidden mt-auto">
      {/* Contact CTA Area */}
      <div className="pt-32 pb-24 px-6 md:px-12 text-center max-w-4xl mx-auto border-b border-bg-dark/10">
        <span className="font-space-mono text-xs uppercase tracking-widest text-bg-dark/70 mb-8 block font-bold">
          05 — Contact
        </span>

        <h2 className="font-bebas text-7xl md:text-[10rem] leading-[0.85] tracking-tight mb-8 text-bg-dark">
          LET&apos;S<br />BUILD<br />SOMETHING.
        </h2>

        <p className="font-cormorant italic text-2xl text-bg-dark/80 mb-12">
          Whether it&apos;s code, copy, or systems.
        </p>

        <a href="mailto:Bashironimison@gmail.com" className="font-space-mono text-xl md:text-3xl text-bg-dark border-b-2 border-bg-dark pb-2 hover:text-off-white hover:border-off-white transition-colors duration-300 inline-block focus-visible:bg-bg-dark focus-visible:text-rust focus-visible:outline-none px-2 rounded-sm font-bold tracking-widest">
          Bashironimison@gmail.com
        </a>
      </div>

      {/* Footer Navigation Layer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 w-full">

        {/* Left Side: Brand Name & Title */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-bebas text-5xl md:text-7xl tracking-wider text-bg-dark hover:text-off-white transition-colors focus-visible:ring-2 focus-visible:ring-bg-dark focus-visible:outline-none rounded-sm w-max">
            BASHIR ONIMISI<span className="text-off-white">.</span>
          </Link>
          <p className="font-space-mono text-xs md:text-sm text-bg-dark/80 tracking-widest font-bold">
            Builder | Storyteller | Operator
          </p>
        </div>

        {/* Right Side: Links Grid */}
        <div className="flex flex-row gap-16 md:gap-24">

          <div className="flex flex-col gap-6 font-space-mono text-sm">
            <h3 className="uppercase tracking-widest font-bold text-bg-dark">EXPLORE</h3>
            <div className="flex flex-col gap-4 text-bg-dark/80">
              <Link href="/work" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">Work</Link>
              <Link href="/fiction" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">Fiction</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 font-space-mono text-sm">
            <h3 className="uppercase tracking-widest font-bold text-bg-dark">CONNECT</h3>
            <div className="flex flex-col gap-4 text-bg-dark/80">
              <a href="https://x.com/onimison" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">Twitter/X</a>
              <a href="https://www.linkedin.com/in/bashironimisi" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">LinkedIn</a>
              <a href="https://bashthebroken.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">Substack</a>
              <a href="https://instagram.com/onimison" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors p-1 -m-1 focus-visible:outline-bg-dark rounded-sm">Instagram</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="border-t border-bg-dark/20 py-8 flex flex-col md:flex-row justify-between items-center gap-4 font-space-mono text-xs text-bg-dark/60 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Bashir Onimisi. All rights reserved.</p>
          <p>onimison.com <span className="text-bg-dark">✦</span> building in the open</p>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute -bottom-1/4 -left-1/4 text-bg-dark/5 font-bebas text-[15rem] leading-none pointer-events-none select-none hidden lg:block rotate-180">
        BUILD
      </div>
    </footer>
  );
}
