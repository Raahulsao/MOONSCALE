"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Play, Plus, Monitor, Smartphone, Square } from "lucide-react"

const ACCENT = "#7B68EE"

type ExamplesDialogProps = {
  open: boolean
  onOpenChange: (v: boolean) => void
  planName: string
  price: string
  videoIds: string[]
}

type AspectRatio = "16:9" | "9:16" | "1:1"

// Sample images for different aspect ratios
const sampleImages = {
  "16:9": [
    "/product-animation-horizontal-1.jpg",
    "/product-animation-horizontal-2.jpg",
    "/product-animation-horizontal-3.jpg",
    "/3d-product-animation-horizontal-1.jpg",
    "/3d-product-animation-horizontal-2.jpg",
    "/3d-product-animation-horizontal-3.jpg",
    "/3d-product-animation-horizontal-4.jpg",
    "/3d-product-animation-horizontal-5.jpg",
    "/3d-product-animation-horizontal-6.jpg",
  ],
  "9:16": [
    "/product-animation-vertical-1.jpg",
    "/product-animation-vertical-2.jpg",
    "/product-animation-vertical-3.jpg",
    "/3d-product-animation-vertical-1.jpg",
    "/3d-product-animation-vertical-2.jpg",
    "/3d-product-animation-vertical-3.jpg",
    "/3d-product-animation-vertical-4.jpg",
    "/3d-product-animation-vertical-5.jpg",
    "/3d-product-animation-vertical-6.jpg",
  ],
  "1:1": [
    "/product-animation-square.jpg",
    "/3d-product-animation-square-1.jpg",
    "/3d-product-animation-square-2.jpg",
    "/3d-product-animation-square-3.jpg",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
}

export function ExamplesDialog({ open, onOpenChange, planName, price, videoIds }: ExamplesDialogProps) {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId)
  }

  const handleRatioSelect = (ratio: AspectRatio) => {
    setSelectedRatio(ratio)
  }

  const handleBackToRatios = () => {
    setSelectedRatio(null)
  }

  const getRatioIcon = (ratio: AspectRatio) => {
    switch (ratio) {
      case "16:9":
        return <Monitor className="w-5 h-5" />
      case "9:16":
        return <Smartphone className="w-5 h-5" />
      case "1:1":
        return <Square className="w-5 h-5" />
    }
  }

  const getGridClass = (ratio: AspectRatio) => {
    switch (ratio) {
      case "16:9":
        return "grid-cols-3 gap-4"
      case "9:16":
        return "grid-cols-3 gap-4"
      case "1:1":
        return "grid-cols-3 gap-4"
    }
  }

  const getAspectClass = (ratio: AspectRatio) => {
    switch (ratio) {
      case "16:9":
        return "aspect-video"
      case "9:16":
        return "aspect-[9/16]"
      case "1:1":
        return "aspect-square"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[98vw] xl:max-w-[1600px] border-neutral-800 bg-[#0b0b0b] p-0 text-white sm:rounded-2xl">
        <div className="border-b border-neutral-900 bg-neutral-900/50 px-5 py-4">
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-base font-semibold" style={{ color: ACCENT }}>
              {planName}
            </DialogTitle>
            <DialogDescription className="text-sm text-neutral-400">Pricing: {price}</DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex border-b border-neutral-800">
          <Button
            variant="ghost"
            className={`flex-1 rounded-none py-3 px-6 ${
              activeTab === "images" ? "border-b-2 text-white" : "text-neutral-400 hover:text-white"
            }`}
            style={{ borderBottomColor: activeTab === "images" ? ACCENT : "transparent" }}
            onClick={() => setActiveTab("images")}
          >
            Images
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 rounded-none py-3 px-6 ${
              activeTab === "videos" ? "border-b-2 text-white" : "text-neutral-400 hover:text-white"
            }`}
            style={{ borderBottomColor: activeTab === "videos" ? ACCENT : "transparent" }}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </Button>
        </div>

        <div className="max-h-[80vh] overflow-auto px-5 py-5 lg:px-6 lg:py-6">
          {activeTab === "images" && (
            <div>
              {!selectedRatio ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-6 text-neutral-200">Select Image Format</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      {(["16:9", "9:16", "1:1"] as AspectRatio[]).map((ratio) => (
                        <Button
                          key={ratio}
                          onClick={() => handleRatioSelect(ratio)}
                          className="h-24 flex flex-col items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-all"
                        >
                          <div style={{ color: ACCENT }}>{getRatioIcon(ratio)}</div>
                          <span className="text-white font-medium">{ratio}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleBackToRatios}
                      variant="outline"
                      className="rounded-full px-4 py-2 border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent"
                    >
                      ← Back to Formats
                    </Button>
                    <h3 className="text-xl font-semibold text-neutral-200 flex items-center gap-2">
                      <span style={{ color: ACCENT }}>{getRatioIcon(selectedRatio)}</span>
                      {selectedRatio} Format Images
                    </h3>
                  </div>

                  <div className={`grid ${getGridClass(selectedRatio)}`}>
                    {sampleImages[selectedRatio].map((src, index) => (
                      <div
                        key={index}
                        className={`${getAspectClass(selectedRatio)} rounded-lg overflow-hidden bg-neutral-800 hover:scale-105 transition-transform duration-300 cursor-pointer`}
                      >
                        <img
                          src={src || "/placeholder.svg"}
                          alt={`${selectedRatio} example ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      variant="outline"
                      className="rounded-full px-6 py-2 border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Load More Images
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div>
              {!selectedRatio ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-6 text-neutral-200">Select Video Format</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      {(["16:9", "9:16", "1:1"] as AspectRatio[]).map((ratio) => (
                        <Button
                          key={ratio}
                          onClick={() => handleRatioSelect(ratio)}
                          className="h-24 flex flex-col items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl transition-all"
                        >
                          <div style={{ color: ACCENT }}>{getRatioIcon(ratio)}</div>
                          <span className="text-white font-medium">{ratio}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleBackToRatios}
                      variant="outline"
                      className="rounded-full px-4 py-2 border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent"
                    >
                      ← Back to Formats
                    </Button>
                    <h3 className="text-xl font-semibold text-neutral-200 flex items-center gap-2">
                      <span style={{ color: ACCENT }}>{getRatioIcon(selectedRatio)}</span>
                      {selectedRatio} Format Videos
                    </h3>
                  </div>

                  <div className={`grid ${getGridClass(selectedRatio)}`}>
                    {videoIds.slice(0, 9).map((videoId, index) => (
                      <div
                        key={index}
                        className={`${getAspectClass(selectedRatio)} rounded-lg overflow-hidden bg-neutral-800 relative group`}
                      >
                        {playingVideo === `${selectedRatio}-${videoId}` ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                              alt={`${selectedRatio} video ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => handleVideoPlay(`${selectedRatio}-${videoId}`)}
                              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
                            >
                              <div
                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: ACCENT }}
                              >
                                <Play className="w-6 h-6 text-white ml-1" />
                              </div>
                            </button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      variant="outline"
                      className="rounded-full px-6 py-2 border-neutral-600 text-neutral-300 hover:text-white hover:border-neutral-500 bg-transparent"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Load More Videos
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
