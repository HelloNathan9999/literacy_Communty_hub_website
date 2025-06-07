
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Wallet, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Withdrawal() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Example balance and transactions
  const balance = 150000; // In IDR
  const transactions = [
    { id: 1, date: "2025-05-01", amount: 75000, status: "success", method: "Bank Transfer" },
    { id: 2, date: "2025-04-15", amount: 50000, status: "success", method: "E-Wallet" },
    { id: 3, date: "2025-03-28", amount: 25000, status: "success", method: "Bank Transfer" }
  ];
  
  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!amount || !paymentMethod) {
      toast.error("Mohon isi semua informasi penarikan");
      return;
    }
    
    const withdrawalAmount = parseFloat(amount);
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      toast.error("Jumlah penarikan tidak valid");
      return;
    }
    
    if (withdrawalAmount > balance) {
      toast.error("Jumlah penarikan melebihi saldo Anda");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Permintaan penarikan berhasil diajukan!");
      setAmount("");
      setPaymentMethod("");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Penarikan Dana</h1>
        <p className="text-muted-foreground mt-2">
          Kelola dan tarik pendapatan dari konten Anda
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Penarikan Dana</CardTitle>
              <CardDescription>
                Tarik pendapatan Anda ke rekening bank atau e-wallet
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleWithdrawal}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="balance" className="mb-2 block">Saldo Tersedia</Label>
                  <div className="text-3xl font-bold">
                    Rp {balance.toLocaleString('id-ID')}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="amount" className="mb-2 block">Jumlah Penarikan</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      Rp
                    </span>
                    <Input 
                      id="amount"
                      type="number" 
                      placeholder="0"
                      className="pl-9" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="payment-method" className="mb-2 block">Metode Pembayaran</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger id="payment-method">
                      <SelectValue placeholder="Pilih metode pembayaran" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank_transfer">Transfer Bank</SelectItem>
                      <SelectItem value="e_wallet">E-Wallet</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {paymentMethod && (
                  <div className="space-y-4 border rounded-md p-4">
                    {paymentMethod === 'bank_transfer' && (
                      <>
                        <div>
                          <Label htmlFor="bank-name">Nama Bank</Label>
                          <Input id="bank-name" placeholder="Masukkan nama bank" />
                        </div>
                        <div>
                          <Label htmlFor="account-number">Nomor Rekening</Label>
                          <Input id="account-number" placeholder="Masukkan nomor rekening" />
                        </div>
                        <div>
                          <Label htmlFor="account-name">Nama Pemilik Rekening</Label>
                          <Input id="account-name" placeholder="Masukkan nama pemilik rekening" />
                        </div>
                      </>
                    )}
                    
                    {paymentMethod === 'e_wallet' && (
                      <>
                        <div>
                          <Label htmlFor="wallet-provider">Penyedia E-Wallet</Label>
                          <Select>
                            <SelectTrigger id="wallet-provider">
                              <SelectValue placeholder="Pilih penyedia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gopay">GoPay</SelectItem>
                              <SelectItem value="ovo">OVO</SelectItem>
                              <SelectItem value="dana">DANA</SelectItem>
                              <SelectItem value="linkaja">LinkAja</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="wallet-number">Nomor Telepon/ID</Label>
                          <Input id="wallet-number" placeholder="Contoh: 08123456789" />
                        </div>
                      </>
                    )}
                    
                    {paymentMethod === 'paypal' && (
                      <div>
                        <Label htmlFor="paypal-email">Email PayPal</Label>
                        <Input id="paypal-email" type="email" placeholder="nama@email.com" />
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent" />
                      <span>Memproses...</span>
                    </div>
                  ) : (
                    <>
                      <Wallet className="mr-2 h-4 w-4" /> 
                      Ajukan Penarikan
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Riwayat Penarikan</CardTitle>
              <CardDescription>
                Transaksi penarikan terakhir Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              {transactions.length > 0 ? (
                <div className="space-y-4">
                  {transactions.map(transaction => (
                    <div 
                      key={transaction.id}
                      className="flex justify-between items-center border-b pb-3 last:border-0"
                    >
                      <div>
                        <p className="font-medium">
                          Rp {transaction.amount.toLocaleString('id-ID')}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.date} <span className="mx-1">•</span> {transaction.method}
                        </p>
                      </div>
                      <span className="text-sm px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Berhasil
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">
                  Belum ada riwayat penarikan
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full flex items-center justify-center">
                Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
