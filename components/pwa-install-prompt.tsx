"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Store the event for later use
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show our custom install prompt
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice

    // We no longer need the prompt regardless of outcome
    setDeferredPrompt(null)
    setShowPrompt(false)

    // Log the outcome for analytics
    console.log(`User ${outcome} the install prompt`)
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-lg z-50 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <img src="/icons/icon-192x192.png" alt="App Icon" className="w-10 h-10 mr-3" />
          <h3 className="font-bold text-lg">Install App</h3>
        </div>
        <button onClick={dismissPrompt} className="text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>
      <p className="text-gray-300 text-sm mb-3">
        Install this app on your device for quick access to my portfolio, even when offline.
      </p>
      <div className="flex space-x-2">
        <Button
          onClick={handleInstallClick}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Install
        </Button>
        <Button onClick={dismissPrompt} variant="outline" className="flex-1">
          Not Now
        </Button>
      </div>
    </div>
  )
}
