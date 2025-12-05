'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type WebpSequenceCanvasProps = {
  baseImageUrl: string;
  frameCount: number;
  scrollProgress: number;
  onProgress: (progress: number) => void;
  onLoadComplete: () => void;
  isVisible: boolean;
};

const getFrameUrl = (base: string, frame: number) => {
  return base.replace('frame_000', `frame_${String(frame).padStart(3, '0')}`);
};

export default function WebpSequenceCanvas({
  baseImageUrl,
  frameCount,
  scrollProgress,
  onProgress,
  onLoadComplete,
  isVisible,
}: WebpSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageCache = useRef<Map<string, HTMLImageElement[]>>(new Map());
  const animationFrameId = useRef<number>();

  useEffect(() => {
    let active = true;
    const loadImages = async () => {
      if (imageCache.current.has(baseImageUrl)) {
        const cachedImages = imageCache.current.get(baseImageUrl)!;
        setImages(cachedImages);
        setIsLoaded(true);
        onProgress(100);
        onLoadComplete();
        return;
      }

      setIsLoaded(false);
      let loadedCount = 0;
      const imagesToLoad: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        imagesToLoad.push(img);
        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount++;
            if (active) {
                onProgress((loadedCount / frameCount) * 100);
            }
            resolve();
          };
          img.onerror = () => {
            // Silently fail on error, but still resolve
            loadedCount++;
            if (active) {
                onProgress((loadedCount / frameCount) * 100);
            }
            resolve();
          };
        });
        img.src = getFrameUrl(baseImageUrl, i);
        promises.push(promise);
      }

      await Promise.all(promises);
      
      if (active) {
        setImages(imagesToLoad);
        imageCache.current.set(baseImageUrl, imagesToLoad);
        setIsLoaded(true);
        onLoadComplete();
      }
    };

    loadImages();

    return () => {
      active = false;
    };
  }, [baseImageUrl, frameCount, onProgress, onLoadComplete]);

  const drawImage = useCallback(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.floor(scrollProgress * frameCount)));
    const img = images[frameIndex];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (ctx && img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  }, [isLoaded, images, frameCount, scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImage();
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [drawImage]);

  useEffect(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(drawImage);
    return () => {
        if(animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };
  }, [drawImage]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
