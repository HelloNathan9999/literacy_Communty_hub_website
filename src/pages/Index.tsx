
import { ArticleCard } from "@/components/ArticleCard";
import { VideoCard } from "@/components/VideoCard";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Download, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Sample data untuk artikel
  const featuredArticles = [
    {
      id: "sukabumi-1",
      title: "Program Literasi Komunitas di Sukabumi",
      excerpt: "Literacy Community Hub Sukabumi mengadakan program literasi di beberapa sekolah dasar di Kota Sukabumi. Program ini berhasil meningkatkan minat baca anak hingga 40% dalam 3 bulan.",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Dian Sastro",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
      },
      publishedAt: "2025-05-03",
      category: "Sukabumi",
      likes: 156,
      comments: 28
    },
    {
      id: "2",
      title: "Meningkatkan Minat Baca Anak Sejak Dini",
      excerpt: "Membangun kebiasaan membaca sejak dini sangat penting untuk perkembangan kognitif anak. Simak tips-tips praktis untuk menumbuhkan minat baca pada anak-anak.",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Siti Nurhaliza",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      publishedAt: "2025-04-12",
      category: "Pendidikan",
      likes: 89,
      comments: 14
    },
    {
      id: "3",
      title: "Peran Perpustakaan dalam Mendukung Literasi Masyarakat",
      excerpt: "Perpustakaan bukan hanya tempat menyimpan buku, tapi juga pusat pembelajaran dan pengembangan literasi masyarakat. Bagaimana perpustakaan modern beradaptasi di era digital?",
      coverImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Budi Santoso",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      publishedAt: "2025-04-10",
      category: "Perpustakaan",
      likes: 76,
      comments: 9
    },
  ];

  // Sample data untuk video
  const featuredVideos = [
    {
      id: "sukabumi-video",
      title: "Festival Literasi Sukabumi 2025: Merayakan Budaya Membaca",
      thumbnailUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      duration: 52, // 52 detik
      author: {
        name: "Literacy Community Hub",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      publishedAt: "2025-05-05",
      category: "Sukabumi",
      likes: 278,
      comments: 34
    },
    {
      id: "2",
      title: "Cara Mengajarkan Anak Membaca dengan Metode Fonik",
      thumbnailUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      duration: 58, // 58 detik
      author: {
        name: "Rizky Febian",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      publishedAt: "2025-05-01",
      category: "Parenting",
      likes: 245,
      comments: 31
    },
  ];

  // Data untuk subscription plans
  const subscriptionPlans = [
    {
      title: "Free Plan",
      price: "Gratis",
      description: "Masa Uji Coba - 7 Hari",
      buttonText: "Mulai Gratis",
      features: [
        { text: "Akses penuh ke seluruh fitur premium (7 hari)", included: true },
        { text: "Publikasikan 1 artikel per hari", included: true },
        { text: "Artikel dapat dibaca & dikomentari", included: true },
        { text: "Akses 10% pendapatan potensial", included: true },
        { text: "Pendapatan dari artikel", included: false },
        { text: "Statistik lengkap", included: false },
      ]
    },
    {
      title: "Basic Plan",
      price: "Rp 45.000",
      description: "Per bulan",
      buttonText: "Berlangganan",
      isPopular: true,
      features: [
        { text: "Akses membaca artikel tanpa batas", included: true },
        { text: "Like, komentar & bagikan", included: true },
        { text: "Monetisasi artikel (50% pendapatan)", included: true },
        { text: "Publikasi hingga 20 artikel per bulan", included: true },
        { text: "Mendapatkan pendapatan dari artikel", included: true },
        { text: "Statistik lengkap", included: false },
      ]
    },
    {
      title: "Premium Plan",
      price: "Rp 180.000",
      description: "Per bulan (diskon 10%)",
      buttonText: "Berlangganan Premium",
      features: [
        { text: "Akses penuh ke seluruh fitur", included: true },
        { text: "Publikasi artikel tanpa batas", included: true },
        { text: "Monetisasi artikel (70% pendapatan)", included: true },
        { text: "Statistik lengkap artikel", included: true },
        { text: "Akses komunitas premium penulis", included: true },
        { text: "Program penghargaan bulanan", included: true },
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              #LiterasiUntukSemua
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Akses Informasi <span className="text-primary">Berkualitas</span> untuk Meningkatkan Literasi
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Bergabunglah dengan komunitas literasi terbesar di Indonesia. Temukan berita, artikel, dan video mengedukasi dari seluruh dunia.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" onClick={() => navigate("/subscribe")}>
                Mulai Sekarang
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/about")}>
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&h=600&q=80"
            alt="Literacy Community Hub"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </section>

      {/* Mobile App Promotion Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')",
        }}></div>
        
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Akses Literasi Kapan Saja dan Di Mana Saja</h2>
              <p className="mb-6 md:text-lg opacity-90">
                Unduh aplikasi nya dan nikmati akses ke seluruh konten kami di perangkat mobile Anda.
                Baca artikel, tonton video, dan tingkatkan literasi Anda dengan mudah.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">COMING SOON</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download di</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </Button>
                
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download di</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-96">
                <div className="absolute top-0 left-0 w-56 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-lg transform -rotate-6"></div>
                <div className="absolute top-0 right-0 w-56 h-80 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-lg transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl border-4 border-white/20 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">LICO</div>
                    <p className="text-sm opacity-80 mb-4">Versi 1.0</p>
                    <div className="w-16 h-16 rounded-full bg-blue-500 mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <div className="text-xs opacity-70">COMING SOON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Banner with Uploaded Image */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/RubixStudio-uploads/ee5db99d-416b-4ccf-ac3e-ea0370456d58.png" 
            alt="Literacy Community Hub Sukabumi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-2xl text-white">
            <span className="bg-primary/90 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Komunitas Sukabumi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Komunitas Literasi Terbaik di Sukabumi</h2>
            <p className="mb-6 text-lg opacity-90">
              Literacy Community Hub adalah pusat literasi yang memberdayakan dan menginspirasi. 
              Bersama, kita dapat meningkatkan minat baca dan mengembangkan budaya literasi di Sukabumi.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/community")}
            >
              Gabung Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Sukabumi Literacy Community Hub Section */}
      <section className="bg-accent/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Literacy Community Hub Sukabumi</h2>
            <p className="text-muted-foreground mt-2">
              Pusat literasi dan pendidikan untuk masyarakat Sukabumi
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Tentang Kami</h3>
                <p className="mb-4">
                  Literacy Community Hub Sukabumi didirikan pada tahun 2022 dengan misi meningkatkan minat baca dan 
                  literasi masyarakat Sukabumi. Kami berlokasi di Jl. Alun-Alun Utara No.4B, Gunungparang, Kec. Cikole, 
                  Kota Sukabumi, dan menyediakan berbagai program literasi untuk semua kalangan usia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <span className="text-2xl font-bold">24+</span>
                    <span className="text-muted-foreground">Program Literasi</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <span className="text-2xl font-bold">15+</span>
                    <span className="text-muted-foreground">Sekolah Mitra</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <span className="text-2xl font-bold">5000+</span>
                    <span className="text-muted-foreground">Peserta</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Hubungi Kami</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <a href="mailto:Info@literacycommunityhub.id" className="hover:underline">Info@literacycommunityhub.id</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <a href="tel:+6287771830212" className="hover:underline">(+62) 877-7183-0212</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <address className="not-italic">Jl. Alun-Alun Utara No.4B, Gunungparang, Kec. Cikole, Kota Sukabumi, Jawa Barat 43111</address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Program Unggulan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full mt-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Literasi Dini</h4>
                      <p className="text-sm text-muted-foreground">Program membaca untuk anak usia 3-8 tahun dengan metode yang menyenangkan.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full mt-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sudut Baca Sekolah</h4>
                      <p className="text-sm text-muted-foreground">Membangun sudut baca di sekolah-sekolah di Sukabumi dengan koleksi buku yang berkualitas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full mt-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Pelatihan Guru</h4>
                      <p className="text-sm text-muted-foreground">Workshop dan pelatihan untuk guru dalam mengajarkan literasi yang efektif.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full mt-1">
                      <Video className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Literasi Digital</h4>
                      <p className="text-sm text-muted-foreground">Pelatihan untuk remaja dan dewasa untuk meningkatkan keterampilan literasi digital.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Kegiatan Mendatang</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">Festival Literasi Sukabumi 2025</h4>
                    <p className="text-sm text-muted-foreground mb-1">15 - 17 Juli 2025</p>
                    <p className="text-sm">Alun-alun Kota Sukabumi</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">Workshop Menulis Kreatif</h4>
                    <p className="text-sm text-muted-foreground mb-1">5 Juni 2025</p>
                    <p className="text-sm">Literacy Community Hub Sukabumi</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">Seminar Literasi Digital untuk Orang Tua</h4>
                    <p className="text-sm text-muted-foreground mb-1">12 Juni 2025</p>
                    <p className="text-sm">Literacy Community Hub Sukabumi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Artikel Pilihan</h2>
            <p className="text-muted-foreground">
              Informasi terbaru dan wawasan dari komunitas literasi
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" onClick={() => navigate("/articles")}>
            Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
            />
          ))}
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Video Terbaru</h2>
            <p className="text-muted-foreground">
              Konten video pendek mengedukasi dengan durasi maksimal 60 detik
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" onClick={() => navigate("/videos")}>
            Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id}
              {...video}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Bergabunglah dengan Komunitas Kami</h2>
            <p className="text-muted-foreground mt-2">
              Ribuan orang telah meningkatkan literasi mereka bersama kami
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">10K+</div>
              <p className="text-muted-foreground">Pembaca Aktif</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">5K+</div>
              <p className="text-muted-foreground">Artikel</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">1K+</div>
              <p className="text-muted-foreground">Video</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">500+</div>
              <p className="text-muted-foreground">Kontributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Kategori Populer</h2>
          <p className="text-muted-foreground mt-2">
            Jelajahi topik-topik menarik dari berbagai bidang
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Literasi Digital", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Pendidikan", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Teknologi", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Budaya", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Parenting", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Kesehatan", icon: <BookOpen className="h-5 w-5" /> },
            { name: "Video Tutorial", icon: <Video className="h-5 w-5" /> },
            { name: "Perpustakaan", icon: <BookOpen className="h-5 w-5" /> },
          ].map((category, i) => (
            <Button key={i} variant="outline" className="h-20 justify-start gap-4">
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Pilih Paket Langganan</h2>
          <p className="text-muted-foreground mt-2">
            Dapatkan akses ke semua konten berkualitas dan fitur eksklusif
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {subscriptionPlans.map((plan, i) => (
            <SubscriptionCard
              key={i}
              {...plan}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Siap Meningkatkan Literasimu?
          </h2>
          <p className="mb-6 text-primary-foreground/90 md:text-lg">
            Bergabunglah dengan ribuan pembaca dan penulis dalam komunitas kami. Mulai perjalanan literasimu sekarang.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate("/register")}
          >
            Daftar Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
