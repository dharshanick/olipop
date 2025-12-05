import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
    "Supports Digestive Health",
    "No Artificial Sweeteners",
    "Packed with Prebiotics & Fiber",
    "Gluten-Free & Vegan",
];

export default function IngredientsSection() {
    const image = PlaceHolderImages.find(p => p.id === "ingredients-image")!;

    return (
        <section id="ingredients" className="py-24 sm:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="w-full h-auto rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={800}
                            height={600}
                            data-ai-hint={image.imageHint}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Good for You Ingredients</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                           We've spent years crafting a soda that's as good for your body as it is for your taste buds. Each can is packed with high-quality, functional ingredients.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-accent" />
                                    <span className="text-lg font-medium text-primary">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
