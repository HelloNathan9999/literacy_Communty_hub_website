
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Terms = () => {
  return (
    <div className="container py-8 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Syarat dan Ketentuan</h1>
      
      <Tabs defaultValue="terms" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="terms">Syarat & Ketentuan</TabsTrigger>
          <TabsTrigger value="publishing">Ketentuan Publikasi</TabsTrigger>
          <TabsTrigger value="privacy">Kebijakan Privasi</TabsTrigger>
        </TabsList>
        
        <TabsContent value="terms" className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Ketentuan Umum</h2>
            <p className="text-muted-foreground">
              Dengan mengakses dan menggunakan platform Literacy Community Hub, Anda setuju untuk terikat dengan Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan sebagian atau seluruh syarat dan ketentuan ini, Anda tidak diperkenankan untuk menggunakan layanan kami.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Definisi</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>"Platform" merujuk pada Literacy Community Hub, termasuk semua layanan yang disediakan melalui website.</li>
              <li>"Pengguna" merujuk pada setiap individu yang mengakses dan menggunakan Platform.</li>
              <li>"Konten" merujuk pada semua informasi, teks, gambar, video, dan materi lain yang tersedia di Platform.</li>
              <li>"Kontributor" merujuk pada Pengguna yang menciptakan dan mempublikasikan Konten di Platform.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Akun Pengguna</h2>
            <p className="text-muted-foreground mb-2">
              Untuk mengakses fitur tertentu di Platform, Anda perlu membuat akun pengguna. Anda bertanggung jawab untuk:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Menjaga kerahasiaan informasi akun Anda, termasuk kata sandi.</li>
              <li>Memberikan informasi yang akurat dan lengkap saat mendaftar.</li>
              <li>Memperbarui informasi akun Anda untuk memastikan ketepatannya.</li>
              <li>Memberi tahu kami segera jika ada penggunaan akun Anda yang tidak sah.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Paket Langganan</h2>
            <p className="text-muted-foreground mb-2">
              Platform menawarkan berbagai paket langganan dengan fitur dan harga berbeda:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Free Plan (7 Hari):</strong> Akses gratis ke fitur premium selama 7 hari dengan batasan tertentu.</li>
              <li><strong>Basic Plan:</strong> Akses ke fitur dasar dengan biaya berlangganan bulanan.</li>
              <li><strong>Premium Plan:</strong> Akses penuh ke semua fitur dengan biaya berlangganan premium.</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Pembayaran langganan dilakukan di muka dan tidak dapat dikembalikan. Langganan akan diperpanjang secara otomatis kecuali dibatalkan sebelum periode berakhir.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Perubahan Syarat dan Ketentuan</h2>
            <p className="text-muted-foreground">
              Kami berhak untuk mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku segera setelah dipublikasikan di Platform. Penggunaan berkelanjutan Anda terhadap Platform setelah perubahan tersebut merupakan persetujuan Anda terhadap Syarat dan Ketentuan yang telah diperbarui.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="publishing" className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Pedoman Konten</h2>
            <p className="text-muted-foreground mb-2">
              Semua konten yang dipublikasikan di Platform harus:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Asli dan tidak melanggar hak kekayaan intelektual pihak lain.</li>
              <li>Faktual, akurat, dan tidak menyesatkan.</li>
              <li>Tidak mengandung ujaran kebencian, pelecehan, atau diskriminasi.</li>
              <li>Tidak mengandung konten dewasa, pornografi, atau kekerasan eksplisit.</li>
              <li>Tidak mempromosikan aktivitas ilegal atau berbahaya.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Hak dan Lisensi Konten</h2>
            <p className="text-muted-foreground">
              Dengan mempublikasikan konten di Platform, Anda tetap mempertahankan hak kepemilikan atas konten tersebut, tetapi Anda memberikan kepada kami lisensi non-eksklusif, bebas royalti, dapat dialihkan, dan dapat disublisensikan untuk menggunakan, mereproduksi, mendistribusikan, menyiapkan karya turunan, menampilkan, dan melakukan konten tersebut sehubungan dengan layanan Platform kami dan bisnis kami.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Kualitas dan Format Konten</h2>
            <p className="text-muted-foreground mb-2">
              Untuk memastikan standar kualitas yang tinggi:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Artikel harus memiliki minimal 500 kata.</li>
              <li>Video harus berdurasi tidak lebih dari 60 detik dan berkualitas HD.</li>
              <li>Konten harus terkait dengan tema literasi dan pendidikan.</li>
              <li>Judul harus jelas, deskriptif, dan tidak bersifat clickbait.</li>
              <li>Gambar yang digunakan harus berkualitas tinggi dan memiliki izin penggunaan yang tepat.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Proses Moderasi</h2>
            <p className="text-muted-foreground">
              Semua konten yang diserahkan akan melewati proses moderasi sebelum dipublikasikan untuk memastikan kepatuhan terhadap pedoman konten kami. Kami berhak untuk menolak, mengedit, atau menghapus konten yang tidak memenuhi standar kami. Keputusan tim moderasi bersifat final.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Monetisasi Konten</h2>
            <p className="text-muted-foreground mb-2">
              Untuk konten yang memenuhi syarat untuk monetisasi:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Pembayaran akan dilakukan sesuai dengan paket langganan yang Anda pilih.</li>
              <li>Pendapatan dihitung berdasarkan jumlah pembaca/penonton dan tingkat engagement.</li>
              <li>Pembayaran dilakukan setiap bulan setelah mencapai ambang batas minimum.</li>
              <li>Anda bertanggung jawab untuk membayar pajak yang berlaku atas pendapatan dari konten Anda.</li>
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="privacy" className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-muted-foreground mb-2">
              Kami mengumpulkan berbagai jenis informasi, termasuk:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Informasi pribadi:</strong> Nama, alamat email, foto profil, dan informasi kontak lainnya yang Anda berikan saat mendaftar.</li>
              <li><strong>Informasi penggunaan:</strong> Detail tentang bagaimana Anda berinteraksi dengan Platform, termasuk artikel yang Anda baca, video yang Anda tonton, dan fitur yang Anda gunakan.</li>
              <li><strong>Informasi perangkat:</strong> Data tentang perangkat yang Anda gunakan untuk mengakses Platform, termasuk model, sistem operasi, browser, dan alamat IP.</li>
              <li><strong>Informasi pembayaran:</strong> Detail pembayaran yang diperlukan untuk berlangganan atau menerima pendapatan dari konten Anda.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p className="text-muted-foreground mb-2">
              Informasi yang kami kumpulkan digunakan untuk:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Menyediakan, memelihara, dan meningkatkan Platform.</li>
              <li>Memproses transaksi dan mengelola akun pengguna.</li>
              <li>Mengirimkan pemberitahuan, pembaruan, dan informasi penting.</li>
              <li>Menganalisis penggunaan Platform untuk meningkatkan layanan kami.</li>
              <li>Menyesuaikan pengalaman Anda dengan menampilkan konten yang relevan.</li>
              <li>Mencegah aktivitas penipuan dan penyalahgunaan Platform.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Berbagi Informasi</h2>
            <p className="text-muted-foreground mb-2">
              Kami mungkin berbagi informasi Anda dengan:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Penyedia layanan:</strong> Perusahaan yang membantu kami menjalankan Platform (pemrosesan pembayaran, hosting, analitik, dll).</li>
              <li><strong>Mitra bisnis:</strong> Untuk menawarkan produk atau layanan bersama.</li>
              <li><strong>Pengguna lain:</strong> Informasi profil publik Anda akan terlihat oleh pengguna lain di Platform.</li>
              <li><strong>Otoritas hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi hak dan keamanan.</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Kami tidak akan menjual informasi pribadi Anda kepada pihak ketiga.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Hak Privasi Anda</h2>
            <p className="text-muted-foreground mb-2">
              Anda memiliki hak untuk:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Mengakses dan mendownload informasi pribadi Anda.</li>
              <li>Memperbaiki informasi yang tidak akurat.</li>
              <li>Menghapus informasi pribadi Anda (dengan batasan tertentu).</li>
              <li>Membatasi atau menolak pemrosesan informasi Anda.</li>
              <li>Menarik persetujuan untuk penggunaan data Anda.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Keamanan Data</h2>
            <p className="text-muted-foreground">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi informasi Anda dari akses tidak sah, hilang, atau dicuri. Langkah-langkah ini termasuk enkripsi, akses terbatas, dan audit keamanan reguler. Namun, tidak ada sistem yang benar-benar aman, dan kami tidak dapat menjamin keamanan absolut.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Terms;
