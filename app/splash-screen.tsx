import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const width = searchParams.get("width") ? Number.parseInt(searchParams.get("width") as string) : 1200
    const height = searchParams.get("height") ? Number.parseInt(searchParams.get("height") as string) : 1200

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #000000, #121212)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              borderRadius: "50%",
              background: "rgba(124, 58, 237, 0.3)",
            }}
          />
        ))}

        {/* Radial gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 50%)",
          }}
        />

        {/* Logo container with glow effect */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: Math.min(width, height) * 0.4,
            height: Math.min(width, height) * 0.4,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #ec4899)",
            boxShadow: "0 0 60px rgba(124, 58, 237, 0.6)",
            marginBottom: 40,
          }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-M8VDTzwJHXUO0tbFC4hMmgPhroaOMj.png"
            width={Math.min(width, height) * 0.3}
            height={Math.min(width, height) * 0.3}
            alt="Zoxilsi Logo"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: Math.min(width, height) * 0.08,
            fontWeight: "bold",
            background: "linear-gradient(to right, #7c3aed, #ec4899, #ef4444)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Abhijith T
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: Math.min(width, height) * 0.03,
            color: "white",
            opacity: 0.8,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Developer & MCA Student
        </div>
      </div>,
      {
        width,
        height,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate splash screen", { status: 500 })
  }
}
