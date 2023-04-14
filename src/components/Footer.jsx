import { Link } from "react-router-dom";

import Flag from "../../assets/usa_flag.png";
import YoutubeIcon from "../../assets/youtube_icon.svg";
import TwitterIcon from "../../assets/twitter_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import InstagramIcon from "../../assets/instagram_icon.svg";
import DiscordMainLogo from "../../assets/discord_main_logo.svg";

const Footer = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{ height: "575px" }}
      className="flex justify-center bg-[#23272A]"
    >
      <div className="flex flex-col">
        <div
          style={{ width: "1200px", height: "450px" }}
          className="flex justify-center pt-[5.75rem] border-b-[1px] border-[#5865F2]"
        >
          {/* column 0 */}
          <div
            style={{ height: "175px" }}
            className="mr-[8rem] flex flex-col justify-between"
          >
            <h1
              style={{ fontFamily: "Seymour One" }}
              className="font-bold text-3xl text-[#5865F2]"
            >
              IMAGINE A PLACE
            </h1>

            <div className="flex">
              <img width={32} height={18} src={Flag} />
              <p className="text-white text-sm ml-2">English, USA</p>
            </div>

            <div style={{ width: "200px" }} className="flex justify-between">
              <img width={24} height={24} src={YoutubeIcon} />
              <img width={24} height={24} src={TwitterIcon} />
              <img width={24} height={24} src={FacebookIcon} />
              <img width={24} height={24} src={InstagramIcon} />
            </div>
          </div>

          <div className="flex">
            {items.map((x, index) =>
              Object.entries(x).map((item) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      items.length === index + 1 ? "" : "mr-[8rem]"
                    }`}
                  >
                    <p className="text-[#5865F2]" key={item[0]}>
                      {item[0]}
                    </p>
                    {item[1].map((desc, index) => (
                      <Link
                        className="text-white mt-2 hover:underline hover:cursor-pointer"
                        key={desc}
                      >
                        {desc}
                      </Link>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <img className="cursor-pointer" src={DiscordMainLogo} />
          <button className="bg-[#5865F2] text-white px-4 py-2 transition duration-[400ms] rounded-full text-sm hover:bg-[#7983F5] hover:shadow-2xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
