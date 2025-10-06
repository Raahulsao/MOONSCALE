"use client"

import { useState, useRef, useEffect } from "react"
import LazyVideo from "@/components/lazy-video"
import { SiteHeader } from "@/components/site-header"
import  Footer  from "@/components/footer"

const heroCards = [
  {
    id: 1,
    type: "image",
    src: "/images/art24.jpeg",
  },
  {
    id: 2,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    id: 3,
    type: "image",
    src: "/images/art23.jpeg",
  },
  {
    id: 4,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    id: 5,
    type: "image",
    src: "/images/art23.png",
  },
  {
    id: 6,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
]

const featureCards = [
  {
    id: 1,
    title: "Image",
    subtitle: "Design High-Quality Images That Impress",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Video",
    subtitle: "Craft Stunning Video Content for Your Brand",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "UI/Design",
    subtitle: "Build Clean, Modern UI with Exceptional Design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
  <path d="M13.5 6.5h0M17.5 10.5h0M6.5 12.5h0M8.5 7.5h0"/>
</svg>  
    ),
  },
  {
    id: 4,
    title: "Full Stack Websites",
    subtitle: "Build Custom Websites with Beautiful Design & Great UX",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M2 8h20M10 4v4M6 4v4M2 4h20v16H2z"/>
</svg>


    ),
  },
  {
    id: 5,
    title: "Character creation",
    subtitle: "Create Unique AI Characters for Your Brand",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "AI-Generated Animated Videos",
    subtitle: "Create stunning animations using AI for ads, stories, and explainer videos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M11 7.6l4 2.3-4 2.3V7.6zM12 17v4M8 21h8M2 3h20v14H2z"/>
</svg>

    ),
  },
  {
    id: 7,
    title: "Create Workflows",
    subtitle: "Generate content with Node based Wo...",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
        <polyline points="7.5,19.79 7.5,14.6 3,12" />
        <polyline points="21,12 16.5,14.6 16.5,19.79" />
        <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Social Media Graphics & Templates",
    subtitle: "Design eye-catching posts and templates for all social platforms.",
    legacy: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M14 2v4a2 2 0 0 0 2 2h4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9zM10 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM20 17l-1.3-1.3a2.4 2.4 0 0 0-3.4 0L9 22"/>
</svg>

    ),
  },
  {
    id: 9,
    title: "Socila Media content",
    subtitle: "reels, shorts, podcast and more content for your business",
    legacy: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Ideate AI",
    subtitle: "Design & Rendering tool",
    legacy: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "Music studio",
    subtitle: "Music generation tools",
    legacy: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Voice studio",
    subtitle: "Voice generation tools",
    legacy: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
]

const galleryImages = [
  { id: 1, src: "/images/art1.jpeg", height: "h-80" },
  { id: 2, src: "/images/art2.jpeg", height: "h-96" },
  { id: 3, src: "/images/art3.jpeg", height: "h-72" },
  { id: 4, src: "/images/art4.jpeg", height: "h-80" },
  { id: 5, src: "/images/art5.jpeg", height: "h-96" },
  { id: 6, src: "/images/art6.jpeg", height: "h-72" },
  { id: 22, src: "/images/art41.jpeg", height: "h-80" },
  { id: 23, src: "/images/art42.jpeg", height: "h-96" },
  { id: 24, src: "/images/art43.jpeg", height: "h-72" },
  { id: 25, src: "/images/art44.jpeg", height: "h-80" },
  { id: 7, src: "/images/art7.jpeg", height: "h-80" },
  { id: 8, src: "/images/art8.jpeg", height: "h-96" },
  { id: 9, src: "/images/art9.jpeg", height: "h-72" },
  { id: 10, src:"/images/art10.jpeg", height: "h-80" },
  { id: 11, src: "/images/art11.jpeg", height: "h-96" },
  { id: 12, src: "/images/art12.jpeg", height: "h-72" },
  { id: 13, src: "/images/art13.jpeg", height: "h-80" },
  { id: 14, src: "/images/art14.jpeg", height: "h-96" },
  { id: 15, src: "/images/art15.jpeg", height: "h-72" },
  { id: 16, src: "/images/art16.jpeg", height: "h-80" },
  { id: 17, src: "/images/art17.jpeg", height: "h-96" },
  { id: 18, src: "/images/art18.jpeg", height: "h-72" },
  { id: 19, src: "/images/art19.jpeg", height: "h-80" },
  { id: 20, src: "/images/art20.jpeg", height: "h-96" },
  { id: 21, src: "/images/art21.jpeg", height: "h-72" },   
  { id: "contact", type: "contact", height: "h-90" },
]

const galleryVideos = [
  { id: 1,  videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 2, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 3, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 4, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 5, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 6, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 7, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 8, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 9, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 10, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 11, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 12, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 13, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 14, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 15, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 16, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 17, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 18, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 19, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 20, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 21, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 22, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 23, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 24, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 25, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 26, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 27, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 28, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 29, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 30, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 31, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 32, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 33, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 34, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 35, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 36, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 37, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 38, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: 39, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-72" },
  { id: 40, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-80" },
  { id: 41, src: "/video-content-creation.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-96" },
  { id: 42, src: "/video-placeholder.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-72" },
  { id: 43, src: "/video-placeholder-2.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm", height: "h-80" },
  { id: 44, src: "/video-placeholder-3.png", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4", height: "h-96" },
  { id: "contact", type: "contact", height: "h-80" },
]

export default function BlogPage() {
  const [hoveredHero, setHoveredHero] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [galleryView, setGalleryView] = useState<"images" | "videos">("images")
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  
  // Multiple images for each card to cycle through (now with 4 images each)
  const cardImages: {[key: number]: string[]} = {
    1: [
      "/images/art23.jpeg",
      "/images/art24.jpeg",
      "/images/art25.jpeg",      
      "/images/art26.jpeg"
    ],
    2: [
      "/images/art30.jpeg",
      "/images/art32.jpeg",
      "/images/art34.jpeg",
      "/images/art35.jpeg"
    ],
    3: [
      "/images/art36.jpeg",
      "/images/art37.jpeg",
      "/images/art38.jpeg",
      "/images/art39.jpeg"
      
    ],
    4: [
      "/artistic-portrait-with-dramatic-lighting.jpg",
      "/cinematic-video-of-person-on-beach.jpg",
      "/portrait-of-stylish-person-with-blonde-hair.jpg",
      "/creative-portrait-with-artistic-effects.jpg"
    ],
    5: [
      "/images/art30.jpeg",
      "/images/art32.jpeg",
      "/images/art34.jpeg",
      "/images/art35.jpeg"
    ],
    6: [
      "/person-taking-selfie.png",
      "/person-with-fire-effects.jpg",
      "/person-on-escalator-in-modern-building.jpg",
      "/artistic-portrait-with-dramatic-lighting.jpg"
    ]
  }

  // Cleanup video elements on unmount
  useEffect(() => {
    return () => {
      // Pause and cleanup all video elements
      Object.values(videoRefs.current).forEach(video => {
        if (video) {
          video.pause()
          video.removeAttribute('src')
          video.load()
        }
      })
    }
  }, [])

  // Handle automatic image cycling for all cards
  useEffect(() => {
    const intervals: {[key: number]: NodeJS.Timeout} = {}
    
    // Initialize current image index for all cards
    const initialIndexState: {[key: number]: number} = {}
    for (let i = 1; i <= 6; i++) {
      if (cardImages[i]) {
        initialIndexState[i] = 0
      }
    }
    setCurrentImageIndex(initialIndexState)
    
    // Start cycling for all 6 cards
    for (let i = 1; i <= 6; i++) {
      if (cardImages[i]) {
        intervals[i] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [i]: (prev[i] + 1) % cardImages[i].length
          }))
        }, 3000) // Every 3 seconds
      }
    }
    
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [])

  const handleVideoClick = async (cardId: number) => {
    const video = videoRefs.current[cardId]
    if (video) {
      try {
        if (video.paused) {
          await video.play()
        } else {
          video.pause()
        }
      } catch (error) {
        console.log("[v0] Video play failed:", error)
      }
    }
  }

  const handleGalleryVideoClick = async (videoId: number) => {
    // Add video to playing set
    setPlayingVideos(prev => new Set(prev).add(videoId))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <main>
        {/* Hero Cards Section - Horizontal cards with left margin and hover effect only on image */}
        <div className="container mx-auto px-6 py-12 mt-24">
          {/* Added custom CSS to hide scrollbar while maintaining scrolling functionality */}
          <div className="overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-6 pb-4" style={{ minWidth: "min-content" }}>
              {heroCards.map((card, index) => (
                <div 
                  key={card.id} 
                  className="flex-shrink-0"
                  style={{ 
                    width: "500px",
                    marginLeft: index === 0 ? "100px" : "0"
                  }}
                >
                  <div
                    className="relative overflow-hidden bg-card border-border cursor-pointer transition-all duration-500"
                    onClick={() => card.type === "video" && handleVideoClick(card.id)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {card.type === "image" ? (
                        <img
                          src={cardImages[card.id] 
                            ? cardImages[card.id][currentImageIndex[card.id] || 0] 
                            : card.src || "/placeholder.svg"}
                          alt=""
                          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                        />
                      ) : (
                        <div className="w-full h-full">
                          <LazyVideo
                            ref={(el: HTMLVideoElement | null) => { videoRefs.current[card.id] = el }}
                            src={card.src}
                            poster="/video-placeholder.png"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            autoplay // Enable autoplay for hero section videos
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What will you create today? section with feature cards */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-white inline-block px-3 py-1 rounded">
            We Create, We Automate, We Scale
          </h2>

          {/* Improved grid layout for better appearance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-800/50 hover:translate-x-1 group"
                onMouseEnter={() => setHoveredFeature(card.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="text-gray-400 group-hover:text-purple-400 transition-all duration-200 flex-shrink-0 group-hover:scale-110 mt-1">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-base group-hover:text-purple-400 transition-colors duration-200">
                      {card.title}
                    </h3>
                    {card.legacy && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">LEGACY</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section with 5-column Grid Layout */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-2xl font-semibold text-white">Gallery</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setGalleryView("images")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  galleryView === "images" ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
                Images
              </button>
              <button
                onClick={() => setGalleryView("videos")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  galleryView === "videos" ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Videos
              </button>
            </div>
          </div>

          <div className="mx-5">
            {/* Masonry grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {galleryView === "images" 
                ? galleryImages.map((image) => (
                    <div 
                      key={image.id} 
                      className={`${
                        typeof image.id === "string" && image.type === "contact" 
                          ? "bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-300" 
                          : ""
                      } overflow-hidden rounded-sm`}
                    >
                      {typeof image.id === "string" && image.type === "contact" ? (
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                          Contact
                        </button>
                      ) : (
                        <div className="w-full" style={{ aspectRatio: '9/16' }}>
                          <img 
                            src={image.src || "/placeholder.svg"} 
                            alt="" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      )}
                    </div>
                  ))
                : galleryVideos.map((video) => (
                    <div 
                      key={video.id} 
                      className={`${
                        typeof video.id === "string" && video.type === "contact" 
                          ? "bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-300" 
                          : ""
                      } overflow-hidden rounded-sm`}
                    >
                      {typeof video.id === "string" && video.type === "contact" ? (
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                          Contact
                        </button>
                      ) : playingVideos.has(video.id as number) && video.videoUrl ? (
                        <div className="w-full" style={{ aspectRatio: '9/16' }}>
                          <LazyVideo
                            src={video.videoUrl}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            autoplay
                          />
                        </div>
                      ) : (
                        <div 
                          className="w-full cursor-pointer relative group"
                          onClick={() => typeof video.id === 'number' && handleGalleryVideoClick(video.id)}
                          style={{ aspectRatio: '9/16' }}
                        >
                          <img 
                            src={video.src || "/placeholder.svg"} 
                            alt="" 
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <polygon points="5,3 19,12 5,21" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}