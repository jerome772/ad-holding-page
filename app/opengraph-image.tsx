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
          viewBox="392.238281 11.726562 715.53125 1476.605469"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#D0502D"
            d="M 516.574219 686.738281 L 731.359375 136.464844 C 733.457031 131.058594 738.699219 127.507812 744.511719 127.507812 L 755.484375 127.507812 C 761.292969 127.507812 766.539062 131.058594 768.636719 136.464844 L 983.417969 686.738281 L 1107.753906 686.738281 L 867.714844 71.835938 C 853.433594 35.285156 818.984375 11.726562 779.769531 11.726562 L 720.222656 11.726562 C 681.09375 11.726562 646.558594 35.285156 632.277344 71.753906 L 392.238281 686.738281 Z"
          />
          <path
            fill="#FFFFFF"
            d="M 983.433594 813.238281 L 768.648438 1363.511719 C 766.550781 1368.917969 761.304688 1372.464844 755.496094 1372.464844 L 744.523438 1372.464844 C 738.714844 1372.464844 733.46875 1368.917969 731.371094 1363.511719 L 516.585938 813.238281 L 392.25 813.238281 L 632.289062 1428.21875 C 646.492188 1464.691406 681.023438 1488.332031 720.238281 1488.332031 L 779.78125 1488.332031 C 818.914062 1488.332031 853.449219 1464.769531 867.730469 1428.300781 L 1107.769531 813.238281 Z"
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
