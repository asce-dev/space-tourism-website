import ImageMoon from "../assets/destination/image-moon.png";

export default function Destination() {
  return (
    <div className="flex flex-col w-full max-w-[1110px] gap-300 my-600 mx-auto h-full">
      <div className="flex gap-300">
        <div className="text-preset-5 text-white/25 uppercase font-bold">
          01
        </div>
        <div className="text-preset-5 uppercase">PICK YOUR DESTINATION</div>
      </div>
      <div className="flex w-full h-full gap-400">
        <div className="flex w-full h-full items-center justify-center">
          <img src={ImageMoon} alt="Moon" />
        </div>
        <div className="flex w-full h-full items-center justify-center min-w-[445px]">
          <div className="flex flex-col w-full max-w-[445px] gap-500">
            <div className="flex text-preset-8 uppercase gap-400">
              <div className="flex h-400 border-b-3 border-white">Moon</div>
              <div className="flex h-400 text-blue-300 hover:text-white hover:border-b-3 hover:border-white/50">
                Mars
              </div>
              <div className="flex h-400 text-blue-300 hover:text-white hover:border-b-3 hover:border-white/50">
                Europa
              </div>
              <div className="flex h-400 text-blue-300 hover:text-white hover:border-b-3 hover:border-white/50">
                Titan
              </div>
            </div>
            <div className="flex flex-col gap-200">
              <div className="text-preset-2 uppercase">moon</div>
              <div className="text-preset-9 text-blue-300">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
            </div>
            <hr className="border-white/25" />
            <div className="flex w-full gap-300 uppercase">
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-blue-300">Avg. Distance</div>
                <div className="text-preset-6">384.400KM</div>
              </div>
              <div className="flex flex-col gap-150 w-full">
                <div className="text-preset-7 text-blue-300">
                  EST. Travel Time
                </div>
                <div className="text-preset-6">3 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
