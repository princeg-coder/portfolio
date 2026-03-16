import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center text-white text-[10px] font-black">P</div>
            <span className="font-headline font-bold text-sm tracking-widest uppercase">PORTFOLIO</span>
          </div>
          
          <div className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 Prince Gupta | Senior Backend Developer | Node.js & AWS Expert
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
