'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { drinkVariants, type DrinkVariant } from '@/lib/drink-variants';
import LoadingScreen from '@/components/loading-screen';
import Header from '@/components/header';
import ParallaxHero from '@/components/parallax-hero';
import WebpSequenceCanvas from '@/components/webp-sequence-canvas';
import AboutSection from '@/components/sections/about-section';
import IngredientsSection from '@/components/sections/ingredients-section';
import NutritionSection from '@/components/sections/nutrition-section';
import ReviewsSection from '@/components/sections/reviews-section';
import FaqSection from '@/components/sections/faq-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/footer';

const SECTION_IDS = ['product', 'ingredients', 'nutrition', 'reviews', 'faq', 'contact'];

export default function Home() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const currentVariant = useMemo(() => drinkVariants[currentVariantIndex], [currentVariantIndex]);

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-accent-hsl', currentVariant.themeColor);
  }, [currentVariant]);

  const changeVariant = (newIndex: number) => {
    if (newIndex === currentVariantIndex || isSwitching) return;

    setIsTextVisible(false);
    setIsSwitching(true);
    setLoadingProgress(0);

    setTimeout(() => {
      setCurrentVariantIndex(newIndex);
    }, 500); // Wait for fade out animation
  };

  const handleNext = () => {
    changeVariant((currentVariantIndex + 1) % drinkVariants.length);
  };

  const handlePrev = () => {
    changeVariant((currentVariantIndex - 1 + drinkVariants.length) % drinkVariants.length);
  };

  const handleSequenceLoadComplete = () => {
    setIsLoading(false);
    setIsSwitching(false);
    setIsTextVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroAnimationHeight = window.innerHeight * 2;
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / heroAnimationHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --theme-accent: hsl(var(--theme-accent-hsl));
        }
      `}</style>

      {isLoading && <LoadingScreen progress={loadingProgress} />}
      
      <WebpSequenceCanvas
        baseImageUrl={currentVariant.webpSequenceUrl}
        frameCount={currentVariant.frameCount}
        scrollProgress={scrollProgress}
        onProgress={setLoadingProgress}
        onLoadComplete={handleSequenceLoadComplete}
        isVisible={!isLoading}
      />
      
      <Header sectionIds={SECTION_IDS} />
      
      <main className="relative z-10">
        <div style={{ height: '200vh' }}>
          <ParallaxHero
            variant={currentVariant}
            onNext={handleNext}
            onPrev={handlePrev}
            isSwitching={isSwitching}
            isTextVisible={isTextVisible}
            variantIndex={currentVariantIndex}
          />
        </div>
        
        <AboutSection />
        <IngredientsSection />
        <NutritionSection />
        <ReviewsSection />
        <FaqSection />
        <CtaSection variant={currentVariant} />
      </main>
      
      <Footer />
    </>
  );
}
