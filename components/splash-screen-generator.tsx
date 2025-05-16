"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Common device sizes for splash screens
const DEVICE_SIZES = [
  { width: 640, height: 1136, name: "iPhone SE" },
  { width: 750, height: 1334, name: "iPhone 8, SE 2" },
  { width: 1125, height: 2436, name: "iPhone X/XS/11 Pro" },
  { width: 1242, height: 2208, name: "iPhone 8 Plus" },
  { width: 1536, height: 2048, name: "iPad Mini/Air" },
  { width: 1668, height: 2224, name: "iPad Pro 10.5-inch" },
  { width: 2048, height: 2732, name: "iPad Pro 12.9-inch" },
]

export default function SplashScreenGenerator() {
  const [selectedSize, setSelectedSize] = useState(DEVICE_SIZES[2])
  const [previewUrl, setPreviewUrl] = useState("")

  useEffect(() => {
    // Generate the preview URL when the selected size changes
    setPreviewUrl(`/splash-screen?width=${selectedSize.width}&height=${selectedSize.height}`)
  }, [selectedSize])

  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-4">Splash Screen Generator</h2>
      <p className="text-gray-400 mb-6">
        Generate custom splash screens for different device sizes. Select a device and click "Generate" to create a
        splash screen.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Select Device Size</label>
        <select
          value={`${selectedSize.width}x${selectedSize.height}`}
          onChange={(e) => {
            const [width, height] = e.target.value.split("x").map(Number)
            setSelectedSize(
              DEVICE_SIZES.find((size) => size.width === width && size.height === height) || DEVICE_SIZES[0],
            )
          }}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
        >
          {DEVICE_SIZES.map((size) => (
            <option key={`${size.width}x${size.height}`} value={`${size.width}x${size.height}`}>
              {size.name} ({size.width}x{size.height})
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Preview</h3>
        <div className="relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div
            style={{
              width: "100%",
              paddingTop: `${(selectedSize.height / selectedSize.width) * 100}%`,
              position: "relative",
            }}
          >
            {previewUrl && (
              <iframe
                src={previewUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                title="Splash Screen Preview"
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={() => window.open(previewUrl, "_blank")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Open Full Size
        </Button>
        <Button
          onClick={() => {
            const link = document.createElement("a")
            link.href = previewUrl
            link.download = `splash-${selectedSize.width}x${selectedSize.height}.png`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          variant="outline"
        >
          Download
        </Button>
      </div>
    </div>
  )
}
