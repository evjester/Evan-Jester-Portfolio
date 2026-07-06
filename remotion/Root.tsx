import React from "react";
import { Composition } from "remotion";
import { HeroPipeline } from "./HeroPipeline";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HeroPipeline"
      component={HeroPipeline}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
