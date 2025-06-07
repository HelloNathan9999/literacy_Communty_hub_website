import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi proses login
    setTimeout(() => {
      setIsLoading(false);
      
      // Set login state in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", loginData.email);
      
      // Show success toast
      toast({
        title: "Login berhasil",
        description: "Anda telah berhasil masuk ke akun Anda",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (registerData.password !== registerData.confirmPassword) {
      setIsLoading(false);
      toast({
        title: "Kesalahan",
        description: "Konfirmasi password tidak cocok",
        variant: "destructive",
      });
      return;
    }
    
    // Simulasi proses registrasi
    setTimeout(() => {
      setIsLoading(false);
      
      // Set login state in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", registerData.email);
      localStorage.setItem("userName", registerData.name);
      
      // Show success toast
      toast({
        title: "Registrasi berhasil",
        description: "Akun Anda telah berhasil dibuat",
      });
      
      // Navigate to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <AnimatedLogo />
          <h2 className="mt-4 text-2xl font-bold tracking-tight">
            Selamat datang di Literacy Community Hub
          </h2>
          <p className="mt-2 text-muted-foreground">
            Login atau daftar untuk mengakses konten premium
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLoginSubmit} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="email@example.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password">Password</Label>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Lupa password?
                  </Button>
                </div>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Login"}
              </Button>

              <div className="text-center text-sm text-muted-foreground mt-4">
                <p>
                  Belum memiliki akun?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => document.getElementById("register-tab")?.click()}
                  >
                    Daftar sekarang
                  </Button>
                </p>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="register" id="register-tab">
            <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="register-name">Nama Lengkap</Label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="John Doe"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="email@example.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="register-confirm-password">Konfirmasi Password</Label>
                <Input
                  id="register-confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={registerData.agreeTerms}
                  onCheckedChange={(checked) => 
                    setRegisterData({
                      ...registerData,
                      agreeTerms: checked === true,
                    })
                  }
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Saya setuju dengan{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate("/terms")}
                  >
                    syarat dan ketentuan
                  </Button>
                </label>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading || !registerData.agreeTerms}>
                {isLoading ? "Memproses..." : "Daftar"}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground mt-4">
                <p>
                  Sudah memiliki akun?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => document.getElementById("login-tab")?.click()}
                  >
                    Login
                  </Button>
                </p>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
