import React from "react";

type Props = {
  size?: number | string;    // e.g. 256 or "2em"
  outlineColor?: string;     // stroke color
  fillColor?: string;        // inner fill color
  strokeWidth?: number;      // outline thickness
  className?: string;
  title?: string;
};

export default function VirusIcon({
  size = 256,
  outlineColor = "#032B7A",
  fillColor = "#E6EAF6",
  strokeWidth = 16,
  className,
  title = "virus icon",
}: Props) {
  const s = typeof size === "number" ? `${size}` : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* outer ring + spikes */}
      <g stroke={outlineColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* spikes drawn as short rounded rectangles radiating from circle */}
        <g transform="translate(128,128)">
          {/* draw 8 spikes rotated */}
          {/*
            We'll render as path elements placed via transforms. JSX won't allow dynamic loops here without runtime code,
            but this component is static. For clarity we include explicit <g> with transforms.
          */}
        </g>
        {/* outer circular ring */}
        <circle cx="128" cy="128" r="74" />
      </g>

      {/* fill inner disk */}
      <circle cx="128" cy="128" r="66" fill={fillColor} stroke={outlineColor} strokeWidth={strokeWidth * 0.6} />

      {/* inner spots */}
      <circle cx="96" cy="104" r="18" fill="none" stroke={outlineColor} strokeWidth={strokeWidth * 0.6} />
      <circle cx="160" cy="84" r="28" fill={outlineColor} stroke={outlineColor} strokeWidth={strokeWidth * 0.6} />
      <circle cx="168" cy="152" r="10" fill={outlineColor} />
      <circle cx="88" cy="160" r="8" fill={outlineColor} />
      
      {/* Spikes (drawn on top with rounded caps) */}
      <g stroke={outlineColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line x1="128" y1="22" x2="128" y2="54" />
        <line x1="128" y1="234" x2="128" y2="202" />
        <line x1="22" y1="128" x2="54" y2="128" />
        <line x1="234" y1="128" x2="202" y2="128" />
        <line x1="44" y1="44" x2="68" y2="68" />
        <line x1="212" y1="212" x2="188" y2="188" />
        <line x1="44" y1="212" x2="68" y2="188" />
        <line x1="212" y1="44" x2="188" y2="68" />
      </g>
    </svg>
  );
}