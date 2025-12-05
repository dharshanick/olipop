'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { summarizeCustomerReviews, type SummarizeCustomerReviewsOutput } from '@/ai/flows/summarize-customer-reviews';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2, MessageSquareQuote, Smile, Frown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type FormValues = {
  reviews: string;
};

export default function ReviewSummarizer() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeCustomerReviewsOutput | null>(null);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const summaryResult = await summarizeCustomerReviews({ reviews: data.reviews });
      setResult(summaryResult);
    } catch (error) {
      console.error("Error summarizing reviews:", error);
      toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Failed to summarize reviews. Please try again.",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="max-w-3xl mx-auto bg-background border-border">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Wand2 className="w-8 h-8 text-accent" />
            <div>
                <CardTitle>AI Review Summarizer</CardTitle>
                <CardDescription>Paste in customer reviews to get an instant summary and sentiment analysis.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="reviews">Customer Reviews</Label>
            <Textarea
              id="reviews"
              placeholder="e.g., 'I love this drink! It's so refreshing.'\n'Not my favorite, a bit too sweet for me.'"
              className="min-h-[150px]"
              {...register('reviews', { required: 'Please enter at least one review.' })}
            />
            {errors.reviews && <p className="text-sm text-destructive">{errors.reviews.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Summarize'
            )}
          </Button>
        </CardFooter>
      </form>

      {result && (
        <CardContent className="border-t border-border pt-6">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2"><MessageSquareQuote className="w-5 h-5 text-accent"/> Summary</h3>
                    <p className="text-muted-foreground mt-2">{result.summary}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        {result.sentiment.toLowerCase().includes('positive') ? <Smile className="w-5 h-5 text-green-500"/> : <Frown className="w-5 h-5 text-red-500" />}
                        Overall Sentiment
                    </h3>
                    <p className="text-muted-foreground mt-2 font-medium capitalize">{result.sentiment}</p>
                </div>
            </div>
        </CardContent>
      )}
    </Card>
  );
}
