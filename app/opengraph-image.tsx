import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Abhijith T - Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Background with particle-like dots */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.4)",
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(124, 58, 237, 0.15), transparent 40%), " +
            "radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.15), transparent 40%)",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "0 80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left side content */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "60%" }}>
            {/* Logo and name section */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #7c3aed, #ec4899)",
                  marginRight: 24,
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-M8VDTzwJHXUO0tbFC4hMmgPhroaOMj.png"
                  width={60}
                  height={60}
                  alt="Logo"
                  style={{ borderRadius: "50%" }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontSize: 72,
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #7c3aed, #ec4899, #ef4444)",
                    backgroundClip: "text",
                    color: "transparent",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Abhijith T
                </div>
                <div
                  style={{
                    fontSize: 28,
                    color: "white",
                    opacity: 0.8,
                  }}
                >
                  Developer & MCA Student
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 32,
                color: "white",
                marginTop: 40,
                marginBottom: 40,
                lineHeight: 1.4,
                maxWidth: "90%",
              }}
            >
              Creating digital experiences with clean design and smooth interactions
            </div>

            {/* Skills tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
              {["Web Development", "UI/UX Design", "React", "Next.js", "Node.js"].map((skill, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(124, 58, 237, 0.15)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                    borderRadius: 20,
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - profile image */}
          <div
            style={{
              position: "relative",
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(124, 58, 237, 0.8)",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)",
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1x.jpg-Gqmcyq2dVnuqhcEgZOLgVANP7jZTjJ.jpeg"
              alt="Abhijith T"
              width={280}
              height={280}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Bottom URL bar */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 32px",
            background: "rgba(20, 20, 20, 0.7)",
            borderRadius: 12,
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
          }}
        >
          <div style={{ fontSize: 24, color: "white" }}>zoxilsi.vercel.app</div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Portfolio", "Projects", "Skills", "Contact"].map((item, i) => (
              <div key={i} style={{ fontSize: 20, color: "rgba(255, 255, 255, 0.7)" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
