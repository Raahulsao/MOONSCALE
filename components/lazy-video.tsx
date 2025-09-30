"use client"

import { useEffect, useRef, useState, forwardRef } from "react"

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  playsInline?: boolean
  preload?: string
  "aria-label"?: string
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({
  src,
  className = "",
  poster,
  autoplay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true,
  preload,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Forward ref to the internal video element
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(videoRef.current)
      } else {
        ref.current = videoRef.current
      }
    }
  }, [ref])

  // Load and play video function
  const loadAndPlayVideo = async () => {
    const el = videoRef.current
    if (!el || !src) return

    try {
      // Set video attributes
      el.loop = loop
      el.muted = muted
      el.controls = controls
      el.playsInline = playsInline
      if (preload) {
        el.preload = preload as any
      }
      
      // Load the video
      el.src = src
      el.load()

      // If autoplay is enabled, try to play when ready
      if (autoplay) {
        const playVideo = async () => {
          try {
            // Check if we can play the video
            if (el.readyState >= 2) {
              await el.play()
            }
          } catch (playError) {
            console.log("Autoplay blocked or failed:", playError)
            // Don't treat autoplay failure as a critical error
          }
        }

        if (el.readyState >= 2) {
          // Video is already loaded enough to play
          await playVideo()
        } else {
          // Wait for video to load enough data
          const canPlayHandler = async () => {
            await playVideo()
            el.removeEventListener("canplay", canPlayHandler)
          }
          el.addEventListener("canplay", canPlayHandler)
        }
      }

      setLoaded(true)
    } catch (loadError) {
      console.error("Error loading video:", loadError)
      setError("Failed to load video")
    }
  }

  useEffect(() => {
    const el = videoRef.current
    if (!el || !src) return

    // Reset error state when src changes
    setError(null)

    // If autoplay is enabled and this is not a lazy load scenario, 
    // load and play the video immediately
    if (autoplay) {
      loadAndPlayVideo()
      setLoaded(true)
      return
    }

    let observer: IntersectionObserver | null = null

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loaded && !error) {
          loadAndPlayVideo()
        }
      })
    }

    observer = new IntersectionObserver(onIntersect, {
      rootMargin: "50px", // Start loading 50px before entering viewport
      threshold: 0.1,
    })
    observer.observe(el)

    // Cleanup function
    return () => {
      observer?.disconnect()
      // Clean up video element
      if (el) {
        el.pause()
        el.removeAttribute('src')
        el.load()
      }
    }
  }, [src, loaded, autoplay, loop, muted, controls, playsInline, preload, error])

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      const el = videoRef.current
      if (!el) return

      if (document.hidden) {
        // Page is hidden, pause video
        el.pause()
      } else if (autoplay && loaded) {
        // Page is visible again, try to resume
        el.play().catch(error => {
          console.log("Error resuming video:", error)
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [autoplay, loaded])

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-900 text-white`}>
        <div className="text-center">
          <div className="text-sm">Video failed to load</div>
        </div>
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={preload}
      aria-label={ariaLabel}
      {...props}
    />
  )
})

LazyVideo.displayName = 'LazyVideo'

export default LazyVideo