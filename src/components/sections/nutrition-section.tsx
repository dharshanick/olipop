import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function NutritionSection() {
  return (
    <section id="nutrition" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-12 text-center">
          Nutrition Facts
        </h2>
        <Card className="w-full max-w-md bg-primary text-background p-2 border-4 border-background shadow-none rounded-lg">
          <CardHeader className="p-4">
            <CardTitle className="text-4xl font-extrabold tracking-tight">Nutrition Facts</CardTitle>
            <p className="text-sm">Serving Size 1 can (12 fl oz)</p>
          </CardHeader>
          <Separator className="bg-background h-2" />
          <CardContent className="p-4 font-mono">
            <div className="flex justify-between font-bold">
              <span>Amount per serving</span>
            </div>
            <div className="flex justify-between items-end font-extrabold text-3xl">
              <span>Calories</span>
              <span>35</span>
            </div>
            <Separator className="bg-background h-1 my-2"/>
            <div className="flex justify-end font-bold text-sm mb-1">% Daily Value*</div>
            <Separator className="bg-background/50 h-px"/>
            
            <div className="flex justify-between py-1"><span><span className="font-bold">Total Fat</span> 0g</span> <span className="font-bold">0%</span></div>
            <Separator className="bg-background/50 h-px"/>
            <div className="flex justify-between py-1"><span><span className="font-bold">Sodium</span> 35mg</span> <span className="font-bold">2%</span></div>
            <Separator className="bg-background/50 h-px"/>
            <div className="flex justify-between py-1"><span><span className="font-bold">Total Carbohydrate</span> 16g</span> <span className="font-bold">6%</span></div>
            <Separator className="bg-background/50 h-px"/>
            <div className="pl-4 flex justify-between py-1"><span>Dietary Fiber 9g</span> <span className="font-bold">32%</span></div>
            <Separator className="bg-background/50 h-px"/>
            <div className="pl-4 flex justify-between py-1"><span>Total Sugars 2-5g</span></div>
             <Separator className="bg-background/50 h-px"/>
            <div className="pl-8 flex justify-between py-1"><span>Includes 0g Added Sugars</span> <span className="font-bold">0%</span></div>
            <Separator className="bg-background h-2 mt-2"/>
            <div className="flex justify-between py-1"><span><span className="font-bold">Protein</span> 0g</span></div>
            <Separator className="bg-background/50 h-px"/>
            <p className="text-xs mt-4">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
