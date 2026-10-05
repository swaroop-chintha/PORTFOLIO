import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';

const SENSITIVITY = 0.8;

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure initial frame is ready
    const handleLoadedMetadata = () => {
      if (video && video.duration) {
        // Set to a cinematic starting position
        video.currentTime = Math.min(0.5, video.duration * 0.1);
        targetTimeRef.current = video.currentTime;
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleMouseMove = (e: MouseEvent) => {
      if (!video || !video.duration) return;

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      if (delta === 0) return;

      // targetTime step based on horizontal cursor delta
      const duration = video.duration;
      const timeDelta = (delta / window.innerWidth) * SENSITIVITY * duration;
      let newTarget = targetTimeRef.current + timeDelta;

      // Clamp targetTime between 0 and video.duration
      newTarget = Math.max(0, Math.min(duration, newTarget));
      targetTimeRef.current = newTarget;

      // Prevent seek flooding: only seek if not already seeking
      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      } else {
        pendingSeekRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    // Mobile touch scrubbing support
    let touchStartX: number | null = null;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!video || !video.duration || e.touches.length === 0 || touchStartX === null) return;
      const currentX = e.touches[0].clientX;
      const delta = currentX - touchStartX;
      touchStartX = currentX;

      const duration = video.duration;
      const timeDelta = (delta / window.innerWidth) * SENSITIVITY * duration;
      let newTarget = targetTimeRef.current + timeDelta;
      newTarget = Math.max(0, Math.min(duration, newTarget));
      targetTimeRef.current = newTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = newTarget;
      } else {
        pendingSeekRef.current = true;
      }
    };

    const handleTouchEnd = () => {
      touchStartX = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) {
      isSeekingRef.current = false;
      return;
    }

    // If pending target changed while seeking, seek to the latest target
    if (pendingSeekRef.current || Math.abs(video.currentTime - targetTimeRef.current) > 0.05) {
      pendingSeekRef.current = false;
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-auto"
        style={{ objectPosition: '70% center' }}
      />
      {/* Cinematic subtle contrast grade to guarantee readable typography across light & dark scenes */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent sm:w-[65%] w-full pointer-events-none" />
      <div className="absolute inset-0 bg-white/20 sm:hidden pointer-events-none" />
    </div>
  );
}
