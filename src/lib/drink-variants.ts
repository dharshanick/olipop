import { PlaceHolderImages } from './placeholder-images';

export type DrinkVariant = {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string; // HSL value string
  webpSequenceUrl: string;
  frameCount: number;
  productImage: string;
  productImageHint: string;
};

const cherryImage = PlaceHolderImages.find(p => p.id === "cherry-can")!;
const orangeImage = PlaceHolderImages.find(p => p.id === "orange-can")!;
const lemonImage = PlaceHolderImages.find(p => p.id === "lemon-can")!;


export const drinkVariants: DrinkVariant[] = [
  {
    id: 1,
    name: "Cherry",
    subtitle: "Cola",
    description: "A modern take on a classic cola with a perfect blend of sweet and tart cherry, full of nostalgic flavor.",
    themeColor: "350 78% 56%", // Cherry Red
    webpSequenceUrl: "https://svpwxbpfkwcfkihkhzsv.supabase.co/storage/v1/object/public/assets/frame_000_delay-0.04s.webp",
    frameCount: 192,
    productImage: cherryImage.imageUrl,
    productImageHint: cherryImage.imageHint,
  },
  {
    id: 2,
    name: "Orange",
    subtitle: "Soda",
    description: "A burst of sunny citrus flavor, our orange soda is a refreshing and zesty delight made with real fruit juice.",
    themeColor: "24 95% 53%", // Orange
    webpSequenceUrl: "https://svpwxbpfkwcfkihkhzsv.supabase.co/storage/v1/object/public/orange/frame_000_delay-0.04s.webp",
    frameCount: 192,
    productImage: orangeImage.imageUrl,
    productImageHint: orangeImage.imageHint,
  },
  {
    id: 3,
    name: "Lemon",
    subtitle: "Ginger Soda",
    description: "Bright and refreshing citrus soda with a kick of spicy ginger and crisp bubbles. A true modern classic.",
    themeColor: "54 94% 55%", // Lemon Yellow
    webpSequenceUrl: "https://svpwxbpfkwcfkihkhzsv.supabase.co/storage/v1/object/public/lemon/frame_000_delay-0.04s.webp",
    frameCount: 192,
    productImage: lemonImage.imageUrl,
    productImageHint: lemonImage.imageHint,
  },
];
