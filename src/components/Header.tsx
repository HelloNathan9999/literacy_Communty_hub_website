
import { AnimatedLogo } from "./AnimatedLogo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { User, Menu, X, ArrowLeft, LayoutDashboard, Languages, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const navItems = [
    { label: t("home"), path: "/" },
    { label: t("articles"), path: "/articles" },
    { label: t("videos"), path: "/videos" },
    { label: t("community"), path: "/community" },
    { label: t("store"), path: "/store" }, // Add this line for the store
    { label: t("subscribe"), path: "/subscribe" },
  ];

  const languages = [
    { code: "id", name: "Indonesia" },
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "ru", name: "Русский" },
    { code: "de", name: "Deutsch" },
    { code: "ar", name: "العربية" },
    { code: "nl", name: "Nederlands" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    console.log("Language changed to:", langCode);
  };

  const isHomePage = location.pathname === "/";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Check login state from localStorage

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <header 
      className={cn(
        "sticky top-4 z-50 w-[95%] mx-auto transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md dark:glass-blur" : "bg-background/60 dark:glass-blur",
        "rounded-xl border shadow-sm hover:shadow-md"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {!isHomePage && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)} 
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">{t("back")}</span>
            </Button>
          )}
          <AnimatedLogo size={isMobile ? "sm" : "md"} className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button 
              key={item.path}
              variant="ghost" 
              className="story-link"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Languages className="h-5 w-5" />
                <span className="sr-only">{t("language")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  className={cn(language === lang.code ? "bg-muted" : "")}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <ThemeToggle />
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t("profile")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  {t("dashboard")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  {t("logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => navigate("/login")}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">{t("login")}</span>
            </Button>
          )}
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-x-0 top-16 p-4 bg-background/90 backdrop-blur-md border-b md:hidden transition-all duration-300 ease-in-out rounded-b-xl mx-4 dark:glass-blur",
        mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0 pointer-events-none"
      )}>
        <nav className="grid gap-2">
          {navItems.map((item) => (
            <Button 
              key={item.path}
              variant="ghost" 
              className="justify-start"
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Button>
          ))}
          
          {/* Language selector in mobile menu */}
          <div className="py-2 border-t mt-2">
            <p className="text-sm text-muted-foreground mb-2">{t("language")}</p>
            <div className="grid grid-cols-2 gap-1">
              {languages.map((lang) => (
                <Button 
                  key={lang.code}
                  variant={language === lang.code ? "default" : "ghost"}
                  size="sm"
                  className="justify-start"
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                >
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>
          
          {isLoggedIn && (
            <Button 
              variant="outline" 
              className="justify-start mt-2"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              {t("logout")}
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
