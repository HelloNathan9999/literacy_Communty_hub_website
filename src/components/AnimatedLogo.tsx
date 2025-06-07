
import { useEffect, useRef } from 'react';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function AnimatedLogo({ className = "", size = 'md', onClick }: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add('animate-spin-slow');
      }
    }, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className={`relative flex items-center ${className}`}
      onClick={onClick}
    >
      <div 
        ref={containerRef}
        className={`relative ${sizeClasses[size]} transition-all duration-1000 ease-in-out`}
      >
        <img 
          src="/RubixStudio-uploads/864e169f-12e5-4d53-a735-99dd12f69d49.png" 
          alt="Literacy Community Hub"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-3 flex flex-col">
        <span className="text-foreground font-bold leading-tight">Literacy</span>
        <span className="text-foreground font-bold leading-tight">Community</span>
        <span className="text-red-600 dark:text-red-500 font-bold leading-tight">Hub</span>
      </div>
    </div>
  );
}
