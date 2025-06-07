
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, MessageSquare, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ArticleCard } from "@/components/ArticleCard";

const Community = () => {
  // Sample data untuk komunitas
  const topContributors = [
    {
      id: "1",
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Penulis literasi digital dan teknologi pendidikan",
      articles: 45,
      followers: 1240
    },
    {
      id: "2",
      name: "Siti Nurhaliza",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Pendidik dan pemerhati literasi anak",
      articles: 38,
      followers: 980
    },
    {
      id: "3",
      name: "Hendra Wijaya",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Spesialis literasi kesehatan",
      articles: 32,
      followers: 875
    },
    {
      id: "4",
      name: "Maya Sari",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "Penulis kreatif dan mentor literasi",
      articles: 27,
      followers: 760
    },
  ];

  const discussionTopics = [
    {
      id: "1",
      title: "Bagaimana mengajarkan literasi digital kepada orang tua?",
      author: {
        name: "Ahmad Rizki",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      replies: 24,
      lastActive: "2 jam yang lalu"
    },
    {
      id: "2",
      title: "Rekomendasi buku literasi finansial untuk pemula",
      author: {
        name: "Dewi Lestari",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
      },
      replies: 18,
      lastActive: "5 jam yang lalu"
    },
    {
      id: "3",
      title: "Tips menarik minat anak untuk membaca buku non-fiksi",
      author: {
        name: "Rudi Hartono",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg"
      },
      replies: 15,
      lastActive: "1 hari yang lalu"
    },
    {
      id: "4",
      title: "Diskusi: Literasi media di era berita palsu",
      author: {
        name: "Lina Wijaya",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg"
      },
      replies: 32,
      lastActive: "8 jam yang lalu"
    },
    {
      id: "5",
      title: "Program literasi untuk daerah terpencil",
      author: {
        name: "Agus Salim",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      replies: 12,
      lastActive: "2 hari yang lalu"
    },
  ];

  const popularArticles = [
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
  ];

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Komunitas</h1>
        <p className="text-muted-foreground">
          Bergabung dengan komunitas literasi, berdiskusi, dan bagikan pengetahuan
        </p>
      </div>
      
      <Tabs defaultValue="contributors">
        <TabsList className="mb-8 flex h-auto flex-wrap gap-2 overflow-x-auto">
          <TabsTrigger value="contributors" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Kontributor
          </TabsTrigger>
          <TabsTrigger value="discussions" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Diskusi
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> Artikel Populer
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="contributors">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Kontributor Teratas</h2>
            <div className="relative max-w-sm">
              <Input
                type="search"
                placeholder="Cari kontributor..."
                className="pl-8"
              />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topContributors.map((contributor) => (
              <div 
                key={contributor.id} 
                className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={contributor.avatar} alt={contributor.name} />
                  <AvatarFallback>{contributor.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{contributor.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{contributor.bio}</p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="font-medium">{contributor.articles}</p>
                    <p className="text-muted-foreground">Artikel</p>
                  </div>
                  <div>
                    <p className="font-medium">{contributor.followers}</p>
                    <p className="text-muted-foreground">Pengikut</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">Ikuti</Button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Lihat Lebih Banyak</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="discussions">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Topik Diskusi Terbaru</h2>
            <Button>Buat Diskusi Baru</Button>
          </div>
          
          <div className="space-y-4">
            {discussionTopics.map((topic) => (
              <div 
                key={topic.id} 
                className="p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{topic.title}</h3>
                  <span className="text-sm text-muted-foreground">{topic.lastActive}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                      <AvatarFallback>{topic.author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{topic.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">{topic.replies} balasan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Lihat Lebih Banyak</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="articles">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Artikel Populer Minggu Ini</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {popularArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Lihat Lebih Banyak</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 p-6 bg-muted rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Bergabung dengan Komunitas Kami</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Bersama-sama kita dapat meningkatkan literasi di Indonesia. Bergabunglah dengan ribuan penulis, pendidik, dan pencinta literasi lainnya.
        </p>
        <Button>Bergabung Sekarang</Button>
      </div>
    </div>
  );
};

export default Community;
