'use client';

import { Button } from '@/components/ui/button';
import { type DrinkVariant } from '@/lib/drink-variants';
import { cn } from '@/lib/utils';
import { ChevronUp, ChevronDown, Facebook, Instagram, Twitter, Loader2 } from 'lucide-react';

type ParallaxHeroProps = {
  variant: DrinkVariant;
  onNext: () => void;
  onPrev: () => void;
  isSwitching: boolean;
  isTextVisible: boolean;
  variantIndex: number;
};

export default function ParallaxHero({
  variant,
  onNext,
  onPrev,
  isSwitching,
  isTextVisible,
  variantIndex,
}: ParallaxHeroProps) {

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center text-primary">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-12 gap-4 h-full">
        
        {/* Left Side: Text Content */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start text-left">
          <div
            className={cn('transition-all duration-500', isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5')}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter">
              {variant.name}
            </h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-wide -mt-2 md:-mt-4">
              {variant.subtitle}
            </p>
            <p className="mt-6 max-w-md text-base md:text-lg text-primary/80">
              {variant.description}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button variant="outline" size="lg" className="rounded-full border-2 bg-transparent text-primary hover:bg-primary hover:text-background px-8 text-lg">
                Add to
              </Button>
              <Button size="lg" className="rounded-full bg-primary text-background hover:bg-primary/90 px-8 text-lg" style={{backgroundColor: 'var(--theme-accent)', color: 'black'}}>
                Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side: Variant Navigation */}
        <div className="hidden md:flex col-span-6 items-center justify-end">
          <div className="flex items-center gap-6 text-right">
            <span
              className="text-8xl lg:text-9xl font-black text-accent transition-colors duration-500"
              style={{ color: 'var(--theme-accent)' }}
            >
              0{variantIndex + 1}
            </span>
            <div className="flex flex-col items-center gap-2 relative">
              <button onClick={onPrev} className="text-muted-foreground hover:text-primary transition-colors p-2">
                <ChevronUp size={24} />
              </button>
              <div className="w-px h-16 bg-border relative">
                {isSwitching && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                )}
              </div>
              <button onClick={onNext} className="text-muted-foreground hover:text-primary transition-colors p-2">
                <ChevronDown size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Social Icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
      </div>
    </div>
  );
}
