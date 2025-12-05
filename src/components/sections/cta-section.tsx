import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { type DrinkVariant } from '@/lib/drink-variants';

type CtaSectionProps = {
  variant: DrinkVariant;
}

export default function CtaSection({ variant }: CtaSectionProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary">
              Ready to Try a <span style={{color: 'var(--theme-accent)'}}>{variant.name}</span>?
            </h2>
            <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-muted-foreground">
              Experience the soda revolution. Your taste buds (and your gut) will thank you.
            </p>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="rounded-full bg-accent text-background hover:bg-accent/90 px-10 text-lg font-bold" style={{backgroundColor: 'var(--theme-accent)', color: 'black'}}>
                Shop Now
              </Button>
               <Button variant="outline" size="lg" className="rounded-full border-2 bg-transparent text-primary hover:bg-primary hover:text-background px-10 text-lg font-bold">
                Find a Store
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                    src={variant.productImage}
                    alt={variant.name + " can"}
                    width={600}
                    height={600}
                    data-ai-hint={variant.productImageHint}
                    className="object-contain w-full h-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
