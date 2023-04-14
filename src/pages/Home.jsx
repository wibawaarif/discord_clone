import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import BgRightLanding from "../../assets/right_bg_landing_header.svg";
import BgLeftLanding from "../../assets/left_bg_landing_header.svg";
import BgCenterLanding from "../../assets/center_bg_landing_header.svg";
import DiscordMain2Logo from "../../assets/invite_only_landing.svg";
import DiscordMain3Logo from "../../assets/hanging_out_easy_landing.svg";
import DiscordMain4Logo from "../../assets/fandom_landing.svg";
import DiscordMain5Logo from "../../assets/just_chiling_landing.svg";
import TinyStarsLanding from "../../assets/tiny_stars_landing.svg";
import Download from "../../assets/download.svg";
import Download_White from "../../assets/download_white.svg";

function Home() {
  const navbar = ["Download", "Nitro", "Safety", "Support", "Blog", "Careers"];
  const footer = [
    { Product: ["Download", "Nitro", "Status"] },
    { Company: ["About", "Jobs", "Branding", "Newsroom"] },
    {
      Resources: [
        "College",
        "Support",
        "Safety",
        "Blog",
        "Feedback",
        "Build",
        "StreamKit",
        "Creators",
        "Community",
      ],
    },
    {
      Policies: [
        "Terms",
        "Privacy",
        "Cookie Settings",
        "Guidelines",
        "Acknowledgements",
        "Licenses",
        "Moderation",
      ],
    },
  ];

  return (
    <div className="container">
      <div style={{ height: "625px" }} className="static bg-[#404EED] z-0">
        {/* Navbar */}
        <Navbar items={navbar} />

        {/* Hero 1 */}
        <div className="flex flex-col items-center text-center mt-[7.5rem]">
          <span
            style={{ fontFamily: "Seymour One" }}
            className="text-5xl text-white"
          >
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

          <div className="mt-11 flex items-center z-40">
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
          style={{ width: "700px" }}
          className="absolute top-[16.7rem] left-[-17rem] z-20"
          src={BgLeftLanding}
        />

        <img
          style={{ width: "650px", overflow: "hidden" }}
          className="absolute top-[15.25rem] right-[-14.5rem] z-20"
          src={BgRightLanding}
        />

        <img
          style={{ width: "1500px", height: "500px" }}
          className="absolute top-[11.95rem] z-10"
          src={BgCenterLanding}
        />
      </div>

      {/* Hero 2 */}
      <div
        style={{ height: "625px", width: "1500px" }}
        className="flex justify-center mx-auto items-center"
      >
        <img className="mr-10" width={700} src={DiscordMain2Logo} />

        <div
          style={{ width: "400px", height: "500px" }}
          className="flex flex-col ml-16 leading-8 justify-center"
        >
          <span
            style={{ fontFamily: "Lato" }}
            className="text-5xl text-[#23272a] leading-[3.9rem]"
          >
            Create an invite- only place where you belong
          </span>

          <span className="text-lg text-[#23272a] mt-6 leading-8">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </span>
        </div>
      </div>

      {/* Hero 3 */}
      <div
        style={{ height: "625px" }}
        className="flex flex-row-reverse justify-center mx-auto items-center bg-[#f6f6f6]"
      >
        <img className="ml-10" width={700} src={DiscordMain3Logo} />

        <div
          style={{ width: "400px", height: "500px" }}
          className="flex flex-col mr-8 ml-8 leading-8 justify-center"
        >
          <span
            style={{ fontFamily: "Lato" }}
            className="text-5xl text-[#23272a] leading-[3.9rem]"
          >
            Where hanging out is easy
          </span>

          <span className="text-lg text-[#23272a] mt-6 leading-8">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </span>
        </div>
      </div>

      {/* Hero 4 */}
      <div
        style={{ height: "625px" }}
        className="flex justify-center mx-auto items-center"
      >
        <img className="ml-4 mr-10" width={700} src={DiscordMain4Logo} />

        <div
          style={{ width: "380px", height: "500px" }}
          className="flex flex-col ml-16 leading-8 justify-center"
        >
          <span
            style={{ fontFamily: "Lato" }}
            className="text-5xl text-[#23272a] leading-[3.9rem]"
          >
            From few to a fandom
          </span>

          <span className="text-lg text-[#23272a] mt-6 leading-8">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </span>
        </div>
      </div>

      {/* Hero 3 */}
      <div
        style={{ height: "1325px" }}
        className="relative flex flex-col justify-start items-center bg-[#f6f6f6]"
      >
        <h1
          style={{ fontFamily: "Seymour One" }}
          className="text-4xl text-[#23272a] font-bold -indent-8 mt-[8rem]"
        >
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <span className="text-center text-xl mt-6 text-[#23272a]">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their
          <p className="break-words">
            {" "}
            games, or gather up and have a drawing session with screen share.
          </p>
        </span>
        <img className="mt-4" width={1180} src={DiscordMain5Logo} />
        <div className="absolute bottom-[14rem]">
          <img width={531} src={TinyStarsLanding} />
        </div>
        <h2 className="text-[32px] text-[#23272a] font-bold mt-[6.25rem]">
          Ready to start your journey?
        </h2>
        <button className="bg-[#5865F2] hover:bg-[#7983F5] text-white transition duration-[400ms] hover:text-[#5865f2] hover:shadow-xl rounded-full px-14 py-4 mr-4 mt-10">
          <div className="flex items-center">
            <img className="w-6 h-6 mr-2" src={Download_White} />
            <span className="text-xl text-white">Download for Mac</span>
          </div>
        </button>
      </div>

      <Footer items={footer} />
    </div>
  );
}

export default Home;
