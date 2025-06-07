
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/pages/Store';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { 
    name, 
    price, 
    imageUrl, 
    rating, 
    seller, 
    discount,
    stock
  } = product;

  const discountedPrice = discount 
    ? price - (price * discount / 100) 
    : price;

  return (
    <Card className="overflow-hidden group h-full flex flex-col hover:shadow-md transition-all">
      <div className="relative pt-[100%]">
        <img 
          src={imageUrl} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            -{discount}%
          </Badge>
        )}
        {stock <= 10 && (
          <Badge variant="outline" className="absolute top-2 right-2 bg-yellow-500/80 hover:bg-yellow-600">
            Stok terbatas
          </Badge>
        )}
      </div>
      
      <CardContent className="flex-1 p-4">
        <h3 className="font-medium line-clamp-2 mb-1 hover:text-primary cursor-pointer">
          {name}
        </h3>
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg">
              Rp {discountedPrice.toLocaleString('id-ID')}
            </span>
            {discount && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {price.toLocaleString('id-ID')}
              </span>
            )}
          </div>
          <div className="text-sm text-muted-foreground">{seller}</div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          size="sm"
          onClick={onAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Beli
        </Button>
      </CardFooter>
    </Card>
  );
}
