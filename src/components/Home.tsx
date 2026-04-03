import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-end max-w-[1110px] my-1600 mx-auto h-full">
      <div className="flex w-full gap-auto">
        <div className="flex flex-col w-full gap-300">
          <div className="text-preset-5 text-blue-300 uppercase">
            So, you want to travel to
          </div>
          <div className="text-preset-1 uppercase">Space</div>
          <div className="text-preset-9 text-blue-300">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="w-full items-center flex justify-end">
          <Link
            to="/destination"
            className="text-preset-4 text-blue-900 uppercase 
              bg-white rounded-full h-[272px] w-[272px] 
              flex items-center justify-center 
              hover:outline-[88px] hover:outline-white/10 hover:text-blue-900/50
            "
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}
