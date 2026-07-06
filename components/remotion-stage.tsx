"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { HeroPipeline } from "@/remotion/HeroPipeline";

// Player is browser-only — load it without SSR.
const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false }
);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function RemotionStage({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={className}>
      <Player
        component={HeroPipeline}
        durationInFrames={300}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        // Pause to a static poster frame when reduced motion is requested.
        autoPlay={!reduced}
        loop
        controls={false}
        clickToPlay={false}
        doubleClickToFullscreen={false}
        acknowledgeRemotionLicense
        initialFrame={reduced ? 90 : 0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
