import { useState } from "react";
import { crew, type CrewMember } from "../data/data";
import Button from "./ui/Button";

export default function Crew() {
  const [currentCrewMember, setCurrentCrewMember] = useState<CrewMember>(
    crew[0],
  );

  return (
    <div className="flex flex-col w-full max-w-[1110px] gap-300 my-600 mx-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          02
        </div>
        <div className="text-preset-5 uppercase">meet your crew</div>
      </div>
      <div className="flex w-full h-full gap-400">
        <div className="flex flex-col w-full h-full gap-500">
          <div className="flex flex-col h-full w-full justify-center gap-300">
            <div className="flex flex-col text-preset-8 uppercase gap-200">
              <div className="text-preset-4 uppercase text-white/50">
                {currentCrewMember.role}
              </div>
              <div className="text-preset-3 uppercase">
                {currentCrewMember.name}
              </div>
            </div>
            <div className="flex flex-col gap-200">
              <div className="text-preset-9 text-blue-300">
                {currentCrewMember.bio}
              </div>
            </div>
          </div>
          <div className="flex w-full gap-500 mb-600">
            {crew.map((item) => (
              <Button
                key={item.name}
                variant="dotIndicator"
                className={`${
                  item.name === currentCrewMember.name ? "!bg-white/100" : ""
                }`}
                onClick={() => setCurrentCrewMember(item)}
              ></Button>
            ))}
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center">
          <img
            src={currentCrewMember.image}
            alt={currentCrewMember.name}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
