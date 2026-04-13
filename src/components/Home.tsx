import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-end p-300 md:px-500 md:py-1600 lg:px-800">
      <div className="flex flex-col flex-1 items-center w-full lg:max-w-[1110px] lg:mx-auto">
        <div className="flex flex-1 flex-col items-center w-full justify-between lg:flex-none lg:mt-auto lg:flex-row">
          <div className="flex flex-col gap-300 max-w-[540px] lg:w-full md:w-[512px]">
            <div className="text-center lg:text-start text-preset-5 md:text-preset-5-desktop text-blue-300 uppercase">
              So, you want to travel to
            </div>
            <div className="text-center lg:text-start text-preset-1 md:text-preset-1-desktop uppercase">
              Space
            </div>
            <div className="text-center lg:text-start text-preset-9 text-blue-300 md:text-preset-9-tablet lg:text-preset-9-desktop">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="flex flex-1 w-full items-center justify-center md:mt-800 md:flex-none md:h-fit lg:mt-0 lg:flex-1 lg:max-w-[540px] lg:justify-end">
            <Link
              to="/destination"
              className="text-preset-4 text-blue-900 uppercase 
                bg-white rounded-full h-[144px] w-[144px] md:h-[272px] md:w-[272px] 
                flex items-center justify-center 
                outline-0 outline-white/50
                hover:outline-[88px] hover:outline-white/10 hover:text-blue-900/50
                md:text-preset-4-desktop
                transition-all duration-500
              "
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
