import React from "react";
import {
  HeroCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./herocard.tsx";

export function HeroCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black h-screen w-full">
      <HeroCard text="Anyone Can Do Our Job" revealText="But No One Can Be US! ">
        <TextRevealCardTitle>
          At Leifii, our work reflects our commitment to growing businesses <br /> through creativity and strategy.
        </TextRevealCardTitle>
        {/* <TextRevealCardDescription>
          Hover over the card to reveal the hidden text.
        </TextRevealCardDescription> */}
      </HeroCard>
    </div>
  );
}
