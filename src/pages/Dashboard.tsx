
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, FilePlus, Wallet, BarChart3, Heart, Settings, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [earnings, setEarnings] = useState(150000); // Example earnings in IDR

  // This would typically come from an API
  const userStats = {
    articles: 12,
    views: 1543,
    likes: 87,
    comments: 34,
    earnings: earnings
  };

  const recentArticles = [
    { id: 1, title: "Pendidikan Literasi Digital untuk Anak", views: 342, likes: 24, date: "2025-05-01" },
    { id: 2, title: "Dampak Literasi Media pada Era Modern", views: 215, likes: 18, date: "2025-04-28" },
    { id: 3, title: "Meningkatkan Kemampuan Literasi Bahasa", views: 127, likes: 9, date: "2025-04-22" }
  ];
  
  // User navigation items for sidebar
  const userNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: FilePlus, label: "Buat Konten", path: "/create-content" },
    { icon: BarChart3, label: "Analitik", path: "/analytics" },
    { icon: Wallet, label: "Pendapatan", path: "/withdrawal" },
    { icon: Users, label: "Komunitas", path: "/community" },
    { icon: Settings, label: "Pengaturan", path: "/settings" },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar / Navigation */}
        <div className="hidden md:block">
          <Card>
            <CardHeader>
              <CardTitle>Menu Pengguna</CardTitle>
              <CardDescription>Navigasi dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <nav className="grid gap-2">
                {userNavItems.map((item) => (
                  <Button 
                    key={item.path}
                    variant={location.pathname === item.path ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => navigate(item.path)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="col-span-1 md:col-span-3">
          <h1 className="text-3xl font-bold mb-8">Dashboard Pengguna</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Artikel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.articles}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.views}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Likes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.likes}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pendapatan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Rp {userStats.earnings.toLocaleString('id-ID')}</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs for different dashboard views */}
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="articles">Artikel Saya</TabsTrigger>
              <TabsTrigger value="stats">Statistik</TabsTrigger>
              <TabsTrigger value="earnings">Pendapatan</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Artikel Terbaru</CardTitle>
                    <CardDescription>Artikel yang telah Anda publikasikan.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentArticles.map(article => (
                        <div key={article.id} className="border-b pb-3 last:border-0">
                          <h3 className="font-medium">{article.title}</h3>
                          <div className="text-sm text-muted-foreground flex justify-between mt-1">
                            <span>Diterbitkan: {article.date}</span>
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Heart className="h-3 w-3" /> {article.likes}
                              </span>
                              <span>{article.views} views</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => navigate("/create-content")}
                    >
                      <FilePlus className="mr-2 h-4 w-4" /> Buat Artikel Baru
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Penarikan Dana</CardTitle>
                    <CardDescription>Saldo dan penarikan pendapatan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Pendapatan</p>
                      <h3 className="text-3xl font-bold">Rp {earnings.toLocaleString('id-ID')}</h3>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">Status: Tersedia untuk penarikan</p>
                      <p>Periode: Mei 2025</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => navigate("/withdrawal")}
                    >
                      <Wallet className="mr-2 h-4 w-4" /> Tarik Dana
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Menu Cepat</CardTitle>
                    <CardDescription>Akses fitur populer dengan cepat</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <Button 
                        variant="outline" 
                        className="h-auto py-6 flex flex-col items-center justify-center"
                        onClick={() => navigate("/create-content")}
                      >
                        <FilePlus className="h-6 w-6 mb-2" />
                        <span>Buat Artikel</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="h-auto py-6 flex flex-col items-center justify-center"
                        onClick={() => navigate("/withdrawal")}
                      >
                        <Wallet className="h-6 w-6 mb-2" />
                        <span>Tarik Dana</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="h-auto py-6 flex flex-col items-center justify-center"
                        onClick={() => navigate("/analytics")}
                      >
                        <BarChart3 className="h-6 w-6 mb-2" />
                        <span>Analitik</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="articles" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Artikel Saya</CardTitle>
                  <CardDescription>Semua artikel yang telah Anda publikasikan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...recentArticles, ...recentArticles].map((article, index) => (
                      <div key={`${article.id}-${index}`} className="border-b pb-3 last:border-0">
                        <h3 className="font-medium">{article.title}</h3>
                        <div className="text-sm text-muted-foreground flex justify-between mt-1">
                          <span>Diterbitkan: {article.date}</span>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" /> {article.likes}
                            </span>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Lihat Lebih Banyak</Button>
                  <Button 
                    variant="default" 
                    onClick={() => navigate("/create-content")}
                  >
                    <FilePlus className="mr-2 h-4 w-4" /> Buat Artikel Baru
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistik Performa</CardTitle>
                  <CardDescription>Performa artikel Anda dalam 30 hari terakhir</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Grafik statistik akan ditampilkan di sini</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="earnings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pendapatan</CardTitle>
                  <CardDescription>Riwayat pendapatan dan penarikan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Total Pendapatan</p>
                      <p className="text-2xl font-bold mt-1">Rp {(earnings + 50000).toLocaleString('id-ID')}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Tersedia</p>
                      <p className="text-2xl font-bold mt-1">Rp {earnings.toLocaleString('id-ID')}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Tertunda</p>
                      <p className="text-2xl font-bold mt-1">Rp 50.000</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Riwayat Penarikan</h3>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <div>
                          <p className="font-medium">Penarikan ke Bank BCA</p>
                          <p className="text-sm text-muted-foreground">10 April 2025</p>
                        </div>
                        <p className="font-medium">Rp 100.000</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Penarikan ke Bank Mandiri</p>
                          <p className="text-sm text-muted-foreground">15 Maret 2025</p>
                        </div>
                        <p className="font-medium">Rp 75.000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full" 
                    onClick={() => navigate("/withdrawal")}
                  >
                    <Wallet className="mr-2 h-4 w-4" /> Tarik Dana
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
