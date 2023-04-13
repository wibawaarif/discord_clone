import { Link } from "react-router-dom";

import BgRightLanding from "../../assets/right_bg_landing_header.svg";
import BgLeftLanding from "../../assets/left_bg_landing_header.svg";
import BgCenterLanding from "../../assets/center_bg_landing_header.svg";
import DiscordMainLogo from "../../assets/discord_main_logo.svg";
import Download from "../../assets/download.svg"

const Navbar = ["Download", "Nitro", "Safety", "Support", "Blog", "Careers"];

function Home() {
  return (
    <div className="container h-max">
      <div className="static bg-[#404EED]">
        {/* Navbar */}
        <div className="px-56 py-5 flex items-center justify-between">
          <div>
            <img className="cursor-pointer" src={DiscordMainLogo} />
          </div>

          <div className="w-2/4 flex justify-between">
            {Navbar.map((x, index) => (
              <Link className="text-white font-semibold cursor-pointer hover:underline" key={`${x}-${index}`}>
                {x}
              </Link>
            ))}
          </div>

          <button className="bg-white px-4 py-2 rounded-full text-sm hover:text-[#5865f2] hover:shadow-2xl">
            Login
          </button>
        </div>

        <div className="flex flex-col items-center text-center mt-[7.5rem]">
          <span style={{fontFamily: 'Seymour One'}} className="text-5xl text-white">
            IMAGINE A PLACE...
          </span>

          <div className="w-2/4 flex justify-center items-center mt-11">
            <span className="text-white text-center text-lg">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </span>
          </div>

          <div className="mt-11 flex items-center">
            <button className="bg-white transition duration-[400ms] hover:text-[#5865f2] hover:shadow-xl rounded-full px-8 py-4 mr-4">
                <div className="flex items-center">
                <img className="w-6 h-6 mr-2" src={Download} />
              <span className="text-xl">Download for Windows</span>
              </div>
            </button>
            <button className="bg-zinc-800 transition duration-[400ms] hover:bg-zinc-700 hover:shadow-xl text-white px-8 py-4 rounded-full">
              <span className="text-xl">Open Discord in your browser</span>
            </button>
          </div>
        </div>


          <img
            style={{ width: "530px", height: "400px" }}
            className="absolute"
            src={BgLeftLanding}
          />

          {/* <img src={BgCenterLanding} /> */}

          {/* <img src={BgRightLanding} /> */}

      </div>
    </div>
  );
}

export default Home;
