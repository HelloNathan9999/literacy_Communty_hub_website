
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  category: string;
  className?: string;
  likes?: number;
  comments?: number;
  isSaved?: boolean;
}

export function VideoCard({
  id,
  title,
  thumbnailUrl,
  duration,
  author,
  publishedAt,
  category,
  className,
  likes = 0,
  comments = 0,
  isSaved = false,
}: VideoCardProps) {
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
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col",
        className
      )}
      onClick={() => navigate(`/video/${id}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
            {category}
          </span>
        </div>
        <div className="absolute bottom-2 right-2">
          <span className="px-2 py-1 text-xs font-medium bg-black/70 text-white rounded flex items-center gap-1">
            <Video className="h-3 w-3" />
            {formatDuration(duration)}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h3>
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
