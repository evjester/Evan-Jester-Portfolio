import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

const BRAND_1 = "#5b6cff";
const BRAND_2 = "#22d3ee";
const BRAND_3 = "#a855f7";

const STAGES = [
  { key: "INGEST", label: "ingest" },
  { key: "EMBED", label: "embed" },
  { key: "RETRIEVE", label: "retrieve" },
  { key: "REASON", label: "reason" },
  { key: "SCALE", label: "scale" },
];

// A seamless-looping "AI pipeline" motion graphic.
// All animation is frame-based (no CSS transitions) per Remotion rules.
export const HeroPipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const loop = frame / durationInFrames; // 0..1

  const padX = width * 0.1;
  const usableW = width - padX * 2;
  const cy = height * 0.5;
  const nodeR = 30;

  const nodes = STAGES.map((s, i) => ({
    ...s,
    x: padX + (usableW * i) / (STAGES.length - 1),
    y: cy,
  }));

  return (
    <AbsoluteFill style={{ backgroundColor: "#08080c", overflow: "hidden" }}>
      {/* faint grid */}
      <svg width={width} height={height} style={{ position: "absolute" }}>
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="rgba(255,255,255,0.045)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={BRAND_1} />
            <stop offset="50%" stopColor={BRAND_3} />
            <stop offset="100%" stopColor={BRAND_2} />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={BRAND_3} stopOpacity="0.5" />
            <stop offset="100%" stopColor={BRAND_3} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={width} height={height} fill="url(#grid)" />
        {/* ambient drifting glow */}
        <circle
          cx={width * 0.5 + Math.sin(loop * Math.PI * 2) * width * 0.18}
          cy={height * 0.5 + Math.cos(loop * Math.PI * 2) * height * 0.12}
          r={width * 0.32}
          fill="url(#glow)"
        />

        {/* connectors */}
        {nodes.slice(0, -1).map((n, i) => {
          const next = nodes[i + 1];
          return (
            <line
              key={`c-${i}`}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#wire)"
              strokeWidth={2}
              strokeOpacity={0.35}
            />
          );
        })}

        {/* traveling pulses (seamless loop via modulo) */}
        {nodes.slice(0, -1).map((n, i) => {
          const next = nodes[i + 1];
          const offset = i * 0.18;
          const t = (loop * 2 + offset) % 1;
          const px = interpolate(t, [0, 1], [n.x, next.x]);
          const fade = Math.sin(t * Math.PI); // bright in middle, fades at ends
          return (
            <circle key={`p-${i}`} cx={px} cy={cy} r={5} fill={BRAND_2} opacity={fade}>
            </circle>
          );
        })}

        {/* nodes with sequenced activation glow */}
        {nodes.map((n, i) => {
          // activation sweeps left->right and loops
          const phase = (loop * 1 - i / nodes.length + 1) % 1;
          const active = Math.max(0, Math.sin(phase * Math.PI * 2)) ;
          const pulseR = nodeR + active * 10;
          return (
            <g key={`n-${i}`}>
              <circle cx={n.x} cy={n.y} r={pulseR} fill={BRAND_1} opacity={active * 0.18} />
              <circle
                cx={n.x}
                cy={n.y}
                r={nodeR}
                fill="#0d0d14"
                stroke="url(#wire)"
                strokeWidth={2}
              />
              <circle cx={n.x} cy={n.y} r={6} fill={BRAND_2} opacity={0.6 + active * 0.4} />
              <text
                x={n.x}
                y={n.y + nodeR + 26}
                textAnchor="middle"
                fontFamily="monospace"
                fontSize={16}
                letterSpacing={2}
                fill="rgba(255,255,255,0.55)"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* floating data tokens */}
      {Array.from({ length: 16 }).map((_, i) => {
        const seed = i * 0.137;
        const t = (loop + seed) % 1;
        const x = (seed * 9301 + 49297) % 1;
        const tokenX = x * width;
        const tokenY = interpolate(t, [0, 1], [height + 20, -20]);
        const op = Math.sin(t * Math.PI) * 0.5;
        return (
          <div
            key={`t-${i}`}
            style={{
              position: "absolute",
              left: tokenX,
              top: tokenY,
              color: i % 2 ? BRAND_2 : BRAND_1,
              fontFamily: "monospace",
              fontSize: 13,
              opacity: op,
            }}
          >
            {i % 3 === 0 ? "</>" : i % 3 === 1 ? "0.84" : "vec"}
          </div>
        );
      })}

      {/* caption */}
      <div
        style={{
          position: "absolute",
          left: padX,
          top: height * 0.16,
          fontFamily: "monospace",
          fontSize: 18,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        ai pipeline
      </div>
      <div
        style={{
          position: "absolute",
          right: padX,
          bottom: height * 0.14,
          fontFamily: "monospace",
          fontSize: 16,
          color: BRAND_2,
          opacity: interpolate(
            Math.sin(loop * Math.PI * 2),
            [-1, 1],
            [0.3, 1],
            { easing: Easing.ease }
          ),
        }}
      >
        ● live
      </div>
    </AbsoluteFill>
  );
};
