import { SubscriptionCard } from "@/components/SubscriptionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const Subscribe = () => {
  // Data untuk paket langganan
  const subscriptionPlans = {
    monthly: [
      {
        title: "Silver Plan",
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
        title: "Gold Plan",
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
        title: "Platinum Plan",
        price: "Rp 180.000",
        description: "Per Tahun (diskon 10%)",
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
    ],
    yearly: [
      {
        title: "Silver Plan",
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
        title: "Gold Plan",
        price: "Rp 486.000",
        description: "Per tahun (hemat Rp 54.000)",
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
        title: "Platinum Plan",
        price: "Rp 1.944.000",
        description: "Per tahun (hemat Rp 216.000)",
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
    ]
  };

  // Diamond Plan - exclusive lifetime plan
  const diamondPlan = {
    title: "Diamond Plan",
    price: "Rp 1.000.000",
    description: "Kreator Eksklusif Literacy Community Hub",
    buttonText: "Gabung Diamond Plan",
    isLifetime: true,
    features: [
      { text: "🔓 Akses Fitur Tanpa Batas - seumur hidup", included: true },
      { text: "📝 Publikasi Tanpa Batas (infinite season)", included: true },
      { text: "💸 Pendapatan 60% dari total platform", included: true },
      { text: "🤝 Program Kolaborasi dengan tim LCH", included: true },
      { text: "🧩 Sistem Afiliasi Pribadi dengan kode unik", included: true },
      { text: "🪙 Komisi Referral Rp 250.000 untuk 5 referral", included: true },
      { text: "🛡️ Lencana Centang Emas & Bingkai Eksklusif", included: true },
      { text: "📢 Konten dipromosikan di halaman utama", included: true },
      { text: "📊 Akses Statistik & Insight Audiens Lanjutan", included: true },
      { text: "🌐 Branding Pribadi & Badge Verified Contributor", included: true },
    ]
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Pilih Paket Langganan</h1>
        <p className="text-muted-foreground md:text-lg">
          Dapatkan akses ke ribuan konten berkualitas dan fitur eksklusif. Mulai perjalanan literasi Anda dengan memilih paket yang sesuai.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="monthly" className="mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Bulanan</TabsTrigger>
              <TabsTrigger value="yearly">Tahunan</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly">
            <div className="grid gap-6 md:grid-cols-3">
              {subscriptionPlans.monthly.map((plan, i) => (
                <SubscriptionCard
                  key={i}
                  {...plan}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="yearly">
            <div className="grid gap-6 md:grid-cols-3">
              {subscriptionPlans.yearly.map((plan, i) => (
                <SubscriptionCard
                  key={i}
                  {...plan}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Diamond Plan - Special Lifetime Plan - Redesigned to be more compact */}
        <div className="mt-12 mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-2">Paket Eksklusif Kreator</h2>
          <p className="text-muted-foreground text-center mb-6">
            Sekali bayar, akses seumur hidup untuk kreator yang ingin berkembang bersama platform.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <SubscriptionCard
                {...diamondPlan}
                className="border-2 border-amber-500 bg-gradient-to-b from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent dark:border-amber-700"
              />
            </div>
            
            <div className="md:col-span-2 space-y-4">
              {/* Diamond Plan Additional Info */}
              <div className="bg-amber-50 dark:bg-amber-950/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="font-bold text-lg mb-3 text-amber-800 dark:text-amber-300">🔥 Kenapa Harus Ikut Diamond Plan?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lifetime benefit, cukup bayar sekali seumur hidup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Peluang besar untuk tumbuh bersama platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Identitas eksklusif & profesional sebagai kreator terverifikasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Penghasilan tambahan dari sistem afiliasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bergengsi & berguna untuk portofolio/branding personal</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-white dark:bg-black/40 rounded-md">
                  <h3 className="font-bold text-base mb-2 text-amber-700 dark:text-amber-400">📈 Simulasi Keuntungan</h3>
                  <div className="text-sm space-y-1">
                    <p>Platform menghasilkan Rp 100.000.000 pendapatan dari iklan + monetisasi artikel</p>
                    <p>10 kreator aktif di Diamond Plan</p>
                    <p>Jika kontribusimu signifikan (masuk kuota pendapatan):</p>
                    <p className="font-bold text-amber-700 dark:text-amber-400">60% × (kuota alokasi kreator) = hingga Rp 6.000.000+</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/10 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="font-bold text-lg mb-2 text-amber-800 dark:text-amber-300">🎯 Syarat dan Ketentuan Diamond Plan</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Berlaku untuk 1x pembayaran (akses seumur hidup)</li>
                  <li>• Harus menunjukkan kontribusi aktif dan berkelanjutan</li>
                  <li>• Sistem afiliasi hanya aktif dalam 14 hari pertama setelah aktivasi</li>
                  <li>• Feedback Rp 250.000 akan otomatis diklaim jika minimal 5 orang berhasil mendaftar menggunakan kode unik Anda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Keuntungan Berlangganan</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4">
              <div className="text-primary text-xl font-bold mb-2">Konten Premium</div>
              <p className="text-muted-foreground">Akses ke semua artikel dan video berkualitas dari penulis terbaik.</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-xl font-bold mb-2">Monetisasi</div>
              <p className="text-muted-foreground">Dapatkan penghasilan dari artikel yang Anda tulis dan publikasikan.</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-xl font-bold mb-2">Komunitas</div>
              <p className="text-muted-foreground">Bergabung dengan komunitas penulis dan pembaca berdedikasi.</p>
            </div>
            <div className="p-4">
              <div className="text-primary text-xl font-bold mb-2">Statistik</div>
              <p className="text-muted-foreground">Pantau performa artikel dan dapatkan insight mendalam.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Pertanyaan Umum</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Bagaimana cara berlangganan?</h3>
              <p className="text-muted-foreground mt-1">Pilih paket yang sesuai, klik tombol berlangganan, dan ikuti petunjuk pembayaran.</p>
            </div>
            <div>
              <h3 className="font-medium">Apakah saya bisa membatalkan langganan?</h3>
              <p className="text-muted-foreground mt-1">Ya, Anda bisa membatalkan langganan kapan saja melalui pengaturan akun.</p>
            </div>
            <div>
              <h3 className="font-medium">Bagaimana cara mendapatkan pendapatan dari artikel saya?</h3>
              <p className="text-muted-foreground mt-1">Pendapatan akan dihitung berdasarkan jumlah pembaca dan engagement artikel Anda, dan akan dibayarkan setiap bulan.</p>
            </div>
            <div>
              <h3 className="font-medium">Apakah ada periode trial?</h3>
              <p className="text-muted-foreground mt-1">Ya, semua pengguna baru mendapatkan akses gratis selama 7 hari untuk mencoba semua fitur premium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;