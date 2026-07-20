export default function LogoVertical({
  className,
  topColor = "var(--terracotta)",
  bottomColor = "currentColor",
}: {
  className?: string;
  topColor?: string;
  bottomColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 143.87 286.44"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ADV"
    >
      <g transform="translate(-64.44, -64.64)">
        <path
          fill={topColor}
          d="M89.45,200.36l43.19-110.63c.42-1.09,1.47-1.8,2.64-1.8h2.2c1.17,0,2.22.72,2.64,1.8l43.19,110.63h25l-48.27-123.64c-2.86-7.34-9.8-12.08-17.68-12.08h-11.97c-7.87,0-14.81,4.74-17.68,12.07l-48.27,123.64h25Z"
        />
      </g>
      <g transform="translate(-374.65, 86.08)">
        <path
          fill={bottomColor}
          d="M493.51,64.64l-43.19,110.63c-.42,1.09-1.47,1.8-2.64,1.8h-2.2c-1.17,0-2.22-.72-2.64-1.8l-43.19-110.63h-25l48.26,123.64c2.86,7.34,9.8,12.08,17.68,12.08h11.97c7.87,0,14.81-4.74,17.68-12.07l48.27-123.64h-25Z"
        />
      </g>
    </svg>
  );
}
