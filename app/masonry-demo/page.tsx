"use client"

import "./masonry-demo.css"
import MasonryGrid from "@/components/masonry-grid"
import { SiteHeader } from "@/components/site-header"
import  Footer  from "@/components/footer"

export default function MasonryDemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <SiteHeader />
      
      <main className="container mx-auto">
        <div className="py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Masonry Grid Demo</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pinterest-style responsive grid layout with different card sizes. 
              Resize your browser to see the responsive behavior.
            </p>
          </div>
          
          <MasonryGrid />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}