import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Evan Jester · AI Systems Builder";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080c",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#a1a1aa",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: "#2563eb",
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            EJ
          </div>
          Evan Jester
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>I help businesses scale</span>
          <span style={{ color: "#3b82f6" }}>using AI</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#a1a1aa" }}>
          Founder @ Hoosier AI Solutions · Co-Founder @ Plaibook
        </div>
      </div>
    ),
    { ...size }
  );
}
