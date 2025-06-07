
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, ImageIcon, SquarePlay, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateContent() {
  const [selectedTab, setSelectedTab] = useState("article");
  const [uploading, setUploading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: "",
      mediaFile: null as File | null,
    },
  });

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Update form value
    form.setValue("mediaFile", file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setMediaPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: any) => {
    setUploading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUploading(false);
      toast.success("Konten berhasil disimpan!");
      console.log("Submitted data:", data);
      
      // In a real app, we'd send this to the backend
      // For now just log it and show success message
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Buat Konten Baru</h1>
        <p className="text-muted-foreground mt-2">
          Buatlah artikel atau video yang menginspirasi dan mengedukasi
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="article">Artikel</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TabsContent value="article">
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Judul Artikel</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan judul artikel..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Konten</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tulis artikel Anda di sini..." 
                          className="min-h-[300px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid gap-6 md:grid-cols-2">
                  <FormItem>
                    <FormLabel>Gambar Utama</FormLabel>
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center justify-center py-6 cursor-pointer">
                        <div className="mb-4 mt-2">
                          {mediaPreview ? (
                            <div className="relative w-full h-48">
                              <img 
                                src={mediaPreview} 
                                alt="Media preview" 
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                          ) : (
                            <div className="bg-muted/30 w-full h-48 rounded-md flex items-center justify-center">
                              <ImageIcon className="h-10 w-10 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                        <Label htmlFor="image-upload" className="cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            <span>Unggah Gambar</span>
                          </div>
                        </Label>
                        <Input 
                          id="image-upload"
                          type="file" 
                          accept="image/*"
                          className="hidden" 
                          onChange={handleMediaChange}
                        />
                      </CardContent>
                    </Card>
                  </FormItem>
                  
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <Input placeholder="Literasi, Pendidikan, Teknologi..." {...field} />
                        </FormControl>
                        <FormDescription>
                          Pisahkan tag dengan koma
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Judul Video</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan judul video..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deskripsi</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Deskripsikan video Anda..." 
                          className="min-h-[150px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormItem>
                  <FormLabel>Upload Video</FormLabel>
                  <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center py-6 cursor-pointer">
                      <div className="mb-4 mt-2">
                        {mediaPreview ? (
                          <div className="relative w-full h-48">
                            <video 
                              src={mediaPreview} 
                              controls
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                        ) : (
                          <div className="bg-muted/30 w-full h-48 rounded-md flex items-center justify-center">
                            <SquarePlay className="h-10 w-10 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <Label htmlFor="video-upload" className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          <span>Unggah Video (Maks. 60 detik)</span>
                        </div>
                      </Label>
                      <Input 
                        id="video-upload"
                        type="file" 
                        accept="video/*"
                        className="hidden" 
                        onChange={handleMediaChange}
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Format: MP4, MOV, AVI. Ukuran maks: 50MB
                      </p>
                    </CardContent>
                  </Card>
                </FormItem>
                
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input placeholder="Literasi, Pendidikan, Teknologi..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Pisahkan tag dengan koma
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
            
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">
                Simpan Draft
              </Button>
              <Button type="submit" disabled={uploading}>
                {uploading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent" />
                    <span>Menyimpan...</span>
                  </div>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Publikasikan
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Tabs>
    </div>
  );
}
