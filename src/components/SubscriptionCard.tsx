
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Feature {
  text: string;
  included: boolean;
}

interface SubscriptionCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline";
  className?: string;
}

export function SubscriptionCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Pilih Paket",
  buttonVariant = "default",
  className,
}: SubscriptionCardProps) {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Berlangganan berhasil!",
      description: `Anda telah berhasil berlangganan paket ${title}. Terima kasih!`,
      duration: 5000,
    });
    
    // In a real application, you would redirect to a payment gateway
    // or start the subscription process here
    console.log(`User subscribed to ${title} plan`);
    
    // Save subscription info in localStorage for demo purposes
    localStorage.setItem('subscription', JSON.stringify({
      plan: title,
      price,
      subscribedAt: new Date().toISOString(),
      active: true
    }));
  };

  return (
    <Card className={cn(
      "flex flex-col h-full relative overflow-hidden",
      isPopular && "border-primary shadow-md",
      className
    )}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="w-32 text-center transform rotate-45 translate-y-3 translate-x-6 bg-primary text-xs font-semibold text-primary-foreground py-1">
            Popular
          </div>
        </div>
      )}
      
      <CardHeader className="flex flex-col gap-4">
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
        <div>
          <div className="text-3xl font-bold">{price}</div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check 
                className={cn(
                  "h-5 w-5 mt-0.5",
                  feature.included ? "text-primary" : "text-muted-foreground"
                )} 
              />
              <span className={cn(
                "text-sm",
                !feature.included && "text-muted-foreground line-through"
              )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant={buttonVariant} 
          className={cn("w-full", isPopular && buttonVariant === "default" && "bg-primary")}
          onClick={handleSubscribe}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
