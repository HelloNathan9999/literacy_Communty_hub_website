
import { useState } from "react";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data untuk video
  const allVideos = [
    {
      id: "1",
      title: "Teknik Speed Reading untuk Efisiensi Membaca",
      thumbnailUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      duration: 45, // 45 detik
      author: {
        name: "Dian Sastro",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
      },
      publishedAt: "2025-05-03",
      category: "Tutorial",
      likes: 320,
      comments: 42
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
    {
      id: "3",
      title: "5 Tips Memilih Buku yang Tepat Sesuai Minat",
      thumbnailUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
      duration: 52, // 52 detik
      author: {
        name: "Angga Dwimas",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      publishedAt: "2025-04-28",
      category: "Tips",
      likes: 178,
      comments: 23
    },
    {
      id: "4",
      title: "Sejarah Perkembangan Literasi di Indonesia",
      thumbnailUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      duration: 60, // 60 detik
      author: {
        name: "Putri Marino",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg"
      },
      publishedAt: "2025-04-25",
      category: "Sejarah",
      likes: 132,
      comments: 19
    },
    {
      id: "5",
      title: "Membedakan Berita Faktual dan Opini",
      thumbnailUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      duration: 55, // 55 detik
      author: {
        name: "Reza Rahadian",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg"
      },
      publishedAt: "2025-04-22",
      category: "Media",
      likes: 203,
      comments: 27
    },
    {
      id: "6",
      title: "Cara Efektif Membaca dan Memahami Jurnal Ilmiah",
      thumbnailUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
      duration: 59, // 59 detik
      author: {
        name: "Nicholas Saputra",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg"
      },
      publishedAt: "2025-04-20",
      category: "Akademik",
      likes: 187,
      comments: 25
    },
    {
      id: "7",
      title: "Meningkatkan Literasi Kesehatan Melalui Media Sosial",
      thumbnailUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      duration: 47, // 47 detik
      author: {
        name: "Chelsea Islan",
        avatar: "https://randomuser.me/api/portraits/women/39.jpg"
      },
      publishedAt: "2025-04-18",
      category: "Kesehatan",
      likes: 156,
      comments: 18
    },
    {
      id: "8",
      title: "Pentingnya Literasi Keuangan untuk Generasi Muda",
      thumbnailUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      duration: 54, // 54 detik
      author: {
        name: "Hamish Daud",
        avatar: "https://randomuser.me/api/portraits/men/57.jpg"
      },
      publishedAt: "2025-04-15",
      category: "Keuangan",
      likes: 211,
      comments: 29
    }
  ];

  const categories = ["Semua", "Tutorial", "Parenting", "Tips", "Sejarah", "Media", "Akademik", "Kesehatan", "Keuangan"];
  
  // Filter video berdasarkan search query
  const filteredVideos = allVideos.filter(
    video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filter berdasarkan kategori yang dipilih
  const getVideosByCategory = (category: string) => {
    if (category === "Semua") return filteredVideos;
    return filteredVideos.filter(video => video.category === category);
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Video</h1>
          <p className="text-muted-foreground">
            Video pendek mengedukasi dengan durasi maksimal 60 detik
          </p>
        </div>

        <div className="relative mt-4 md:mt-0 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cari video..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
            {getVideosByCategory(category).length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getVideosByCategory(category).map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Tidak ada video ditemukan</h3>
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

export default Videos;
