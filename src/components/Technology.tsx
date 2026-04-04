import ImageLaunchVehicleProject from "../assets/technology/image-launch-vehicle-portrait.jpg";

export default function Technology() {
  return (
    <div className="flex flex-col w-full max-w-[1275px] my-600 gap-300 ml-600 ml-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          03
        </div>
        <div className="text-preset-5 uppercase">space launch 101</div>
      </div>
      <div className="flex flex-row items-center justify-center h-full gap-500">
        <div className="flex w-full gap-800 min-w-[635px] items-center">
          <div className="flex flex-col items-center justify-center gap-400">
            <div className="flex items-center justify-center text-preset-4 text-blue-900 h-1000 w-1000 rounded-full bg-white">
              1
            </div>
            <div className="flex items-center justify-center text-preset-4 text-white h-1000 w-1000 rounded-full border-1 border-white/25">
              2
            </div>
            <div className="flex items-center justify-center text-preset-4 text-white h-1000 w-1000 rounded-full border-1 border-white/25">
              3
            </div>
          </div>
          <div className="flex flex-col gap-300">
            <div className="flex flex-col text-preset-8 uppercase gap-200">
              <div className="text-preset-4 uppercase text-white/50">
                THE TERMINOLOGY…
              </div>
              <div className="text-preset-3 uppercase">LAUNCH VEHICLE</div>
            </div>

            <div className="flex flex-col gap-200">
              <div className="text-preset-9 text-blue-300">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-500 items-center">
          <img
            src={ImageLaunchVehicleProject}
            alt="Launch Vehicle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
