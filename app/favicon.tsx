import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = {
  width: 32,
  height: 32,
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
        background: "transparent",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-M8VDTzwJHXUO0tbFC4hMmgPhroaOMj.png"
        width={32}
        height={32}
        alt="Favicon"
      />
    </div>,
    {
      ...size,
    },
  )
}
