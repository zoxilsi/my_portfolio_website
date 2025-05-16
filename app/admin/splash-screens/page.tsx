import SplashScreenGenerator from "@/components/splash-screen-generator"

export default function SplashScreensPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Splash Screen Generator</h1>
      <p className="text-gray-400 mb-8">
        Use this tool to generate custom splash screens for your portfolio PWA. These splash screens will be shown when
        users launch your app from their home screens.
      </p>
      <SplashScreenGenerator />
    </div>
  )
}
