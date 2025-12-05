import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
    const image = PlaceHolderImages.find(p => p.id === "about-image")!;

    return (
        <section id="product" className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">A New Kind of Soda</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Olipop is a modern functional soda brand inspired by classic flavors but made with better ingredients. We combine the classic soda taste you know and love with prebiotics, plant fiber, and botanicals for a drink that's both delicious and good for you.
                        </p>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            No artificial sweeteners, colors, or preservatives. Just real ingredients for a real-ly good time.
                        </p>
                    </div>
                    <div className="w-full h-auto rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={1200}
                            height={800}
                            data-ai-hint={image.imageHint}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
