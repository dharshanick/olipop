import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Olipop?",
    answer:
      "Olipop is a deliciously fizzy tonic that combines the benefits of prebiotics, plant fiber, and botanicals to support your digestive health.",
  },
  {
    question: "Is there sugar in Olipop?",
    answer:
      "Our sodas contain 2-5 grams of sugar, which is significantly less than traditional sodas that often contain over 30 grams. We use natural ingredients like fruit juice and cassava root syrup for sweetness.",
  },
  {
    question: "Is Olipop gluten-free, vegan, and paleo?",
    answer:
      "Yes! All of our products are gluten-free, vegan, and paleo-friendly. They are also free from artificial sweeteners, colors, and preservatives.",
  },
  {
    question: "Where can I buy Olipop?",
    answer:
      "You can buy Olipop directly from our website or find us in major retailers across the country. Check our store locator for a location near you.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground md:text-xl">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
