import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 72,
          background: "#010125",
        }}
      >
        <svg
          width="139"
          height="286"
          viewBox="67.37 56.14 88.68 183.01"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#D0502D"
            d="M82.78,139.81l26.62-68.19c.26-.67.91-1.11,1.63-1.11h1.36c.72,0,1.37.44,1.63,1.11l26.62,68.19h15.41l-29.75-76.22c-1.76-4.52-6.04-7.45-10.9-7.45h-7.38c-4.85,0-9.13,2.92-10.9,7.44l-29.75,76.22h15.41Z"
          />
          <path
            fill="#FFFFFF"
            d="M140.64,155.48l-26.62,68.19c-.26.67-.91,1.11-1.63,1.11h-1.36c-.72,0-1.37-.44-1.63-1.11l-26.62-68.19h-15.41l29.75,76.22c1.76,4.52,6.04,7.45,10.9,7.45h7.38c4.85,0,9.13-2.92,10.9-7.44l29.75-76.22h-15.41Z"
          />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 560,
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.25,
            }}
          >
            Human-centred. Data-first. AI-native.
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#D0502D",
              lineHeight: 1.4,
              marginTop: 20,
            }}
          >
            Consulting for where business is heading
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
