"use client"

import { useState } from "react"

interface CardProps {
  id: number
  type: "image" | "text" | "mixed"
  src?: string
  title?: string
  description?: string
  width: number
  height: number
}

const Card = ({ id, type, src, title, description, width, height }: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1
        border border-gray-200 dark:border-gray-700
        h-full
      `}
    >
      {type !== "text" && src && (
        <div className="relative overflow-hidden w-full" style={{ aspectRatio: '9/16' }}>
          {!imageLoaded && (
            <div className="bg-gray-200 dark:bg-gray-700 animate-pulse w-full h-full absolute inset-0" />
          )}
          <img
            src={src}
            alt={title || "Card image"}
            className={`
              w-full h-full object-cover transition-opacity duration-500 absolute inset-0
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={handleImageLoad}
          />
        </div>
      )}
      
      {(title || description) && (
        <div className="p-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          
          {description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default Card