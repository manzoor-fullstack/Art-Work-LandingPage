import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Opine<span className="mx-1"><img src="/images/Footer-icon.png" alt="icon" className="inline-block w-8" /></span>Gallery
          </h2>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Community</li>
            <li className="hover:text-foreground cursor-pointer">Collection</li>
            <li className="hover:text-foreground cursor-pointer">About</li>
            <li className="hover:text-foreground cursor-pointer">Contact</li>
            <li className="hover:text-foreground cursor-pointer">FAQs</li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="mb-8 flex justify-center gap-4">
          <SocialButton>
            <Facebook className="h-4 w-4" />
          </SocialButton>
          <SocialButton>
            <Twitter className="h-4 w-4" />
          </SocialButton>
          <SocialButton>
            <span className="text-sm font-bold">G+</span>
          </SocialButton>
          <SocialButton>
            <Linkedin className="h-4 w-4" />
          </SocialButton>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © 2022 Opine Gallery. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#651FFF] to-[#3B2175] text-primary-foreground transition hover:opacity-90">
      {children}
    </button>
  );
}
