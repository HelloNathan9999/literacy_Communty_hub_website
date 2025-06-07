
import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data untuk artikel
  const allArticles = [
    // Sukabumi literacy articles added at the beginning for prominence
    {
      id: "sukabumi-1",
      title: "Program Literasi Komunitas di Sukabumi Tingkatkan Minat Baca Anak",
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
      id: "sukabumi-2",
      title: "Festival Literasi Sukabumi 2025: Meningkatkan Kesadaran Literasi Digital",
      excerpt: "Festival tahunan yang diselenggarakan oleh Literacy Community Hub Sukabumi bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya literasi digital di era informasi.",
      coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Ahmad Fauzi",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      publishedAt: "2025-05-01",
      category: "Sukabumi",
      likes: 134,
      comments: 19
    },
    {
      id: "sukabumi-3",
      title: "Program Pelatihan Guru: Strategi Mengajar Literasi di Sukabumi",
      excerpt: "Literacy Community Hub Sukabumi mengadakan pelatihan untuk guru-guru di Kota Sukabumi tentang strategi mengajar literasi yang efektif untuk siswa sekolah dasar hingga menengah.",
      coverImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Siti Nurhaliza",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      publishedAt: "2025-04-28",
      category: "Sukabumi",
      likes: 112,
      comments: 15
    },
    // Original articles
    {
      id: "1",
      title: "Pentingnya Literasi Digital di Era Informasi",
      excerpt: "Di era informasi saat ini, literasi digital menjadi keterampilan penting yang harus dimiliki oleh setiap individu. Artikel ini membahas bagaimana meningkatkan literasi digital untuk menghadapi tsunami informasi.",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Andi Susanto",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      publishedAt: "2025-04-15",
      category: "Literasi Digital",
      likes: 145,
      comments: 23
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
    {
      id: "4",
      title: "Literasi Keuangan: Kunci Kesejahteraan Finansial",
      excerpt: "Literasi keuangan sangat penting untuk mengelola keuangan pribadi dan keluarga. Artikel ini membahas dasar-dasar literasi keuangan dan cara menerapkannya dalam kehidupan sehari-hari.",
      coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Diana Purnama",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
      },
      publishedAt: "2025-04-08",
      category: "Keuangan",
      likes: 112,
      comments: 17
    },
    {
      id: "5",
      title: "Mengembangkan Budaya Literasi di Sekolah",
      excerpt: "Bagaimana sekolah dapat membangun budaya literasi yang kuat? Artikel ini mengeksplorasi berbagai strategi dan program yang dapat diterapkan di lingkungan sekolah.",
      coverImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Rudi Hartono",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg"
      },
      publishedAt: "2025-04-05",
      category: "Pendidikan",
      likes: 95,
      comments: 11
    },
    {
      id: "6",
      title: "Literasi Media: Mengenali Berita Palsu dan Disinformasi",
      excerpt: "Di era digital saat ini, kemampuan untuk mengenali berita palsu dan disinformasi menjadi sangat penting. Pelajari cara memverifikasi informasi yang Anda terima.",
      coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Lina Wijaya",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg"
      },
      publishedAt: "2025-04-03",
      category: "Media",
      likes: 134,
      comments: 19
    },
    {
      id: "7",
      title: "Literasi Kesehatan: Mengelola Informasi Medis dengan Bijak",
      excerpt: "Literasi kesehatan membantu kita mengakses, memahami, dan menggunakan informasi kesehatan untuk membuat keputusan yang tepat. Mari tingkatkan literasi kesehatan Anda.",
      coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Hendra Wijaya",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      publishedAt: "2025-04-01",
      category: "Kesehatan",
      likes: 88,
      comments: 13
    },
    {
      id: "8",
      title: "Menulis Kreatif untuk Pemula",
      excerpt: "Panduan langkah demi langkah untuk memulai perjalanan menulis kreatif Anda. Temukan inspirasi dan teknik dasar untuk mengembangkan keterampilan menulis.",
      coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      author: {
        name: "Maya Sari",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg"
      },
      publishedAt: "2025-03-28",
      category: "Menulis",
      likes: 105,
      comments: 21
    }
  ];

  const categories = ["Semua", "Sukabumi", "Literasi Digital", "Pendidikan", "Perpustakaan", "Keuangan", "Media", "Kesehatan", "Menulis"];
  
  // Filter artikel berdasarkan search query
  const filteredArticles = allArticles.filter(
    article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filter berdasarkan kategori yang dipilih
  const getArticlesByCategory = (category: string) => {
    if (category === "Semua") return filteredArticles;
    return filteredArticles.filter(article => article.category === category);
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Artikel</h1>
          <p className="text-muted-foreground">
            Temukan ribuan artikel bermutu dan mengedukasi
          </p>
        </div>

        <div className="relative mt-4 md:mt-0 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cari artikel..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Sukabumi Literacy Community Hub Info */}
      <div className="bg-accent rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-3">Literacy Community Hub Sukabumi</h2>
        <p className="mb-4">
          Literacy Community Hub Sukabumi adalah pusat literasi yang berlokasi di Jl. Alun-Alun Utara No.4B, 
          Gunungparang, Kec. Cikole, Kota Sukabumi. Kami berdedikasi untuk meningkatkan literasi di 
          kalangan masyarakat Sukabumi melalui berbagai program dan kegiatan.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </div>
            <a href="mailto:Info@literacycommunityhub.id" className="hover:underline">Info@literacycommunityhub.id</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <a href="tel:+6287771830212" className="hover:underline">(+62) 877-7183-0212</a>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <address className="not-italic">Jl. Alun-Alun Utara No.4B, Sukabumi</address>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="Semua" className="mb-8">
        <TabsList className="mb-4 flex h-auto flex-wrap gap-2 overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            {getArticlesByCategory(category).length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getArticlesByCategory(category).map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Tidak ada artikel ditemukan</h3>
                <p className="text-muted-foreground">
                  Silakan coba kata kunci lain atau pilih kategori berbeda
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline">Muat Lebih Banyak</Button>
      </div>
    </div>
  );
};

export default Articles;
