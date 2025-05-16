import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #7c3aed, #ec4899)",
        borderRadius: "22%",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-M8VDTzwJHXUO0tbFC4hMmgPhroaOMj.png"
        width={140}
        height={140}
        alt="App Icon"
        style={{
          borderRadius: "18%",
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
