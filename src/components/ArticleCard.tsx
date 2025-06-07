
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  category: string;
  className?: string;
  isFeatured?: boolean;
  likes?: number;
  comments?: number;
  isSaved?: boolean;
}

export function ArticleCard({
  id,
  title,
  excerpt,
  coverImage,
  author,
  publishedAt,
  category,
  className,
  isFeatured = false,
  likes = 0,
  comments = 0,
  isSaved = false,
}: ArticleCardProps) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(isSaved);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col",
        isFeatured && "md:col-span-2 md:row-span-2",
        className
      )}
      onClick={() => navigate(`/article/${id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
            {category}
          </span>
        </div>
      </div>
      
      <CardHeader className="p-4">
        <h3 className={cn(
          "font-semibold leading-tight line-clamp-2 hover:text-primary transition-colors",
          isFeatured ? "text-2xl" : "text-lg"
        )}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-grow">
        <p className={cn(
          "text-muted-foreground line-clamp-3 text-sm",
          isFeatured && "md:line-clamp-4"
        )}>
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 border-t flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <p className="font-medium">{author.name}</p>
            <p className="text-muted-foreground">{formatDate(publishedAt)}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-muted-foreground">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-2 gap-1" 
            onClick={handleLike}
          >
            <Heart 
              className={cn(
                "h-4 w-4", 
                isLiked && "fill-destructive text-destructive"
              )} 
            />
            <span className="text-xs">{likeCount}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{comments}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
