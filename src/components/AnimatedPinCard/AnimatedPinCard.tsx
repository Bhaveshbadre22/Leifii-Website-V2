import React from "react";
import { PinContainer } from "./3dpin";
import map from "../../assets/map.jpg";

export function AnimatedPinCard() {
  return (
    <div className=" md:h-[20rem] flex items-center justify-end ">
      <PinContainer
        title="Click here to open maps"
        href="https://maps.app.goo.gl/KaUPD26bf7CADsAk8"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[20rem] md:w-[15rem] md:h-[18rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Find us on
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Shop no. 1 & 2, Mangalmurti Apartment, Pune - Satara Rd,
              <br /> Chhatrapati Sambhaji Nagar, Dhankawadi, Pune, Maharashtra
              411043
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img src={map} />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
