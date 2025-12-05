import ReviewSummarizer from "@/components/review-summarizer";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    quote: "I'm obsessed! The Cherry Cola is my absolute favorite. It's the perfect guilt-free treat.",
    rating: 5,
  },
  {
    name: "Mike D.",
    quote: "Finally, a soda that I can feel good about drinking. The Orange Soda is so refreshing after a workout.",
    rating: 5,
  },
  {
    name: "Jessica P.",
    quote: "The Lemon Ginger is a game-changer. It's so crisp and has just the right amount of spice. My new go-to.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            What People Are Saying
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-xl">
            We're not the only ones who love it. See what our customers have to say about their favorite flavors.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg text-primary leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="mt-4 font-semibold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
            <ReviewSummarizer />
        </div>
      </div>
    </section>
  );
}
