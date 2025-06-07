
import { AnimatedLogo } from "./AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Youtube, Globe } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <AnimatedLogo />
          <p className="text-muted-foreground text-sm">
            Platform komunitas literasi terkemuka, menyediakan berita dan informasi mengedukasi dari seluruh dunia, terutama Indonesia.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <div className="grid gap-2">
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/")}>Beranda</Button>
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/articles")}>Artikel</Button>
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/videos")}>Video</Button>
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/community")}>Komunitas</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Langganan</h4>
          <div className="grid gap-2">
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/subscribe")}>Paket Langganan</Button>
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/terms")}>Syarat & Ketentuan</Button>
            <Button variant="link" className="justify-start p-0 h-auto" onClick={() => navigate("/privacy")}>Kebijakan Privasi</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Kontak</h4>
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">Info@literacycommunityhub.id</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">(+62) 877-7183-0212</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm">
                Jl. Alun-Alun Utara No.4B, Gunungparang, Kec. Cikole, Kota Sukabumi, Jawa Barat 43111
              </p>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg pt-2">Social Media</h4>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/lch_sukabumi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://youtube.com/c/LiteracyCommunityHub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </a>
            <a href="https://www.literacycommunityhub.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Literacy Community Hub. All rights reserved. || Design By : RUBIXSTUDIO
        </p>
      </div>
    </footer>
  );
}
