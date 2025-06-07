
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Tag, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { ProductCard } from '@/components/ProductCard';
import { CartItem, useCart } from '@/hooks/use-cart';

// Product interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  stock: number;
  seller: string;
  discount?: number;
}

const Store = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popularity');
  const { addToCart, getCartItemCount } = useCart();
  const productsPerPage = 12;

  // Mock product data
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Kaos Literasi Community Hub',
        description: 'Kaos cotton combed 30s dengan desain eksklusif Literacy Community Hub',
        price: 129000,
        category: 'clothing',
        imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        stock: 25,
        seller: 'LCH Official Shop',
      },
      {
        id: '2',
        name: 'Totebag Kanvas Premium LCH',
        description: 'Totebag kanvas premium dengan motif #LiterasiUntukSemua',
        price: 89000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        stock: 18,
        seller: 'LCH Official Shop',
        discount: 10,
      },
      {
        id: '3',
        name: 'Mug Keramik LCH',
        description: 'Mug keramik berkualitas tinggi dengan desain logo LCH',
        price: 65000,
        category: 'housewares',
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        stock: 30,
        seller: 'LCH Official Shop',
      },
      {
        id: '4',
        name: 'Stiker Set LCH',
        description: 'Set stiker vinyl tahan air dengan 10 desain berbeda',
        price: 25000,
        category: 'stationery',
        imageUrl: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        stock: 50,
        seller: 'LCH Official Shop',
        discount: 5,
      },
      {
        id: '5',
        name: 'Notebook Premium LCH',
        description: 'Notebook dengan cover hardcase dan kertas berkualitas',
        price: 75000,
        category: 'stationery',
        imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        stock: 20,
        seller: 'LCH Official Shop',
      },
      {
        id: '6',
        name: 'Pullover Hoodie LCH',
        description: 'Hoodie nyaman dengan desain khas LCH',
        price: 249000,
        category: 'clothing',
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        stock: 15,
        seller: 'LCH Official Shop',
        discount: 15,
      },
      {
        id: '7',
        name: 'Pin Set LCH',
        description: 'Set pin logam dengan 5 desain berbeda',
        price: 35000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1607250149983-5b4985b93614?auto=format&fit=crop&w=800&q=80',
        rating: 4.4,
        stock: 40,
        seller: 'LCH Official Shop',
      },
      {
        id: '8',
        name: 'Tumbler LCH',
        description: 'Tumbler stainless steel berkualitas tinggi dengan logo LCH',
        price: 115000,
        category: 'housewares',
        imageUrl: 'https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        stock: 22,
        seller: 'LCH Official Shop',
        discount: 8,
      },
      {
        id: '9',
        name: 'Lanyard LCH',
        description: 'Lanyard premium dengan logo LCH',
        price: 35000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        stock: 35,
        seller: 'LCH Official Shop',
      },
      {
        id: '10',
        name: 'Masker Kain LCH',
        description: 'Masker kain 3 lapis dengan desain LCH',
        price: 25000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1586448983289-ff9199fdb8e5?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        stock: 45,
        seller: 'LCH Official Shop',
      },
      {
        id: '11',
        name: 'Gantungan Kunci LCH',
        description: 'Gantungan kunci akrilik dengan desain LCH',
        price: 20000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1597334948330-56204dbd684c?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        stock: 50,
        seller: 'LCH Official Shop',
      },
      {
        id: '12',
        name: 'Topi Bucket LCH',
        description: 'Topi bucket dengan bordir logo LCH',
        price: 95000,
        category: 'clothing',
        imageUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        stock: 20,
        seller: 'LCH Official Shop',
        discount: 10,
      },
      {
        id: '13',
        name: 'Pouch Kanvas LCH',
        description: 'Pouch kanvas multifungsi dengan desain LCH',
        price: 55000,
        category: 'accessories',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        stock: 25,
        seller: 'LCH Official Shop',
      },
      {
        id: '14',
        name: 'Kaos Polo LCH',
        description: 'Kaos polo dengan bordir logo LCH',
        price: 159000,
        category: 'clothing',
        imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        stock: 18,
        seller: 'LCH Official Shop',
      },
      {
        id: '15',
        name: 'Planner Tahunan LCH',
        description: 'Planner tahunan dengan desain khusus LCH',
        price: 85000,
        category: 'stationery',
        imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        stock: 15,
        seller: 'LCH Official Shop',
        discount: 12,
      },
    ];
    setProducts(mockProducts);
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default: // popularity (by rating)
        return b.rating - a.rating;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discount 
        ? product.price - (product.price * product.discount / 100) 
        : product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
      seller: product.seller
    });
    
    toast({
      title: t('productAddedToCart'),
      description: product.name,
    });
  };

  // Categories
  const categories = [
    { id: 'all', name: t('allCategories') },
    { id: 'clothing', name: t('clothing') },
    { id: 'accessories', name: t('accessories') },
    { id: 'stationery', name: t('stationery') },
    { id: 'housewares', name: t('housewares') },
  ];

  return (
    <div className="container py-8">
      {/* Store header */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{t('lchStore')}</h1>
          
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-5 h-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </Badge>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <CartSheet />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search and filter bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('searchProducts')}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t('sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">{t('popularity')}</SelectItem>
                <SelectItem value="newest">{t('newest')}</SelectItem>
                <SelectItem value="price-low">{t('priceLowToHigh')}</SelectItem>
                <SelectItem value="price-high">{t('priceHighToLow')}</SelectItem>
              </SelectContent>
            </Select>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>{t('filters')}</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <h3 className="font-medium mb-2">{t('categories')}</h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={currentCategory === category.id ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setCurrentCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge 
              key={category.id}
              variant={currentCategory === category.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setCurrentCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      {/* Empty state */}
      {currentProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold mb-2">{t('noProductsFound')}</h2>
          <p className="text-muted-foreground mb-4">{t('tryDifferentSearch')}</p>
          <Button onClick={() => {
            setSearchQuery('');
            setCurrentCategory('all');
          }}>
            {t('clearFilters')}
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                if (totalPages <= 5) return true;
                return page === 1 || 
                       page === totalPages || 
                       (page >= currentPage - 1 && page <= currentPage + 1);
              })
              .map((page, index, array) => {
                // Add ellipsis if there are gaps
                if (index > 0 && page > array[index - 1] + 1) {
                  return (
                    <React.Fragment key={`ellipsis-${page}`}>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink 
                          isActive={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    </React.Fragment>
                  );
                }
                return (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

// Cart sheet component
const CartSheet = () => {
  const { t } = useLanguage();
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>{t('shoppingCart')}</SheetTitle>
      </SheetHeader>
      
      {cart.length > 0 ? (
        <>
          <div className="flex-1 overflow-auto py-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start gap-3 py-3 border-b">
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.seller}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="font-semibold">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-7 w-7 text-muted-foreground"
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </Button>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>{t('subtotal')}</span>
              <span className="font-semibold">
                Rp {getTotal().toLocaleString('id-ID')}
              </span>
            </div>
            <Button className="w-full">{t('checkout')}</Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full py-8">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium mb-2">{t('cartEmpty')}</h3>
          <p className="text-muted-foreground text-center">
            {t('browseProductsToAdd')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Store;
