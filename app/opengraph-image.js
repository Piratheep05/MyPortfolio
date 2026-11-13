import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 50% -20%, #4c2fb0 0%, #09090b 60%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#7c5cf0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 700 }}>
            PR
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa" }}>piratheep.vercel.app</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#c4b5fd", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 20 }}>{profile.tagline}</div>
        </div>
      </div>
    ),
    size
  );
}
