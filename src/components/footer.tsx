import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const OlipopLogo = () => (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4"/>
      <path d="M30 70C35 50, 65 50, 70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 40C40 30, 60 30, 65 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="42" cy="55" r="5" fill="currentColor"/>
      <circle cx="58" cy="55" r="5" fill="currentColor"/>
    </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground border-t border-border">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <OlipopLogo />
              <span className="text-xl font-bold">Olipop</span>
            </Link>
            <p className="text-muted-foreground text-sm">A new kind of soda.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Links</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
             <h4 className="font-semibold mb-2">Newsletter</h4>
             <p className="text-sm text-muted-foreground">Get the latest updates and offers.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Olipop Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
