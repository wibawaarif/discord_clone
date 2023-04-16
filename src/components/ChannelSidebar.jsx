// import DiscordLogo from "../../assets/discord_logo.svg";
import GroupLogo from "../../assets/new_line.png";
import PlusLogo from "../../assets/plus.svg";
import DownloadGreen from "../../assets/download_green.svg";
import CompassLogo from "../../assets/compass.svg";

import DiscordLogo from "../../assets/discord_logo.jsx";

const ChannelSidebar = ({page, setPage}) => {
  return (
    <div className="h-screen bg-[#202225]">
            <div className="flex flex-col justify-center items-center mt-5 px-2">
                <DiscordLogo height={55} width={55} click={setPage} outside="rounded-2xl hover:cursor-pointer group" inside={page === 'dashboard' ? 'fill-[#5865F2]' : 'fill-[#2E3136] group-hover:fill-[#5865F2] transition duration-[400ms]'} />

                <img onClick={() => setPage('group-1')} width={55} height={55} className="rounded-2xl hover:cursor-pointer mt-3" src={GroupLogo} />

                <div className="bg-[#36393F] rounded-full w-[3.438rem] h-[3.438rem] mt-3 hover:cursor-pointer flex justify-center items-center transition duration-[400ms] hover:bg-[#3ba55d] group">
                    <img width={20} height={20} src={PlusLogo} />
                </div>

                <div className="bg-[#36393F] rounded-full w-[3.438rem] h-[3.438rem] mt-3 hover:cursor-pointer flex justify-center items-center transition duration-[400ms] hover:bg-[#3ba55d] group">
                    <div className="bg-[#3ba55d] transition duration-[400ms] group-hover:bg-white rounded-full w-[1.6rem] h-[1.6rem] flex justify-center items-center">
                        <img className="rotate-45" width={16} height={16} src={CompassLogo} />
                    </div>
                </div>

                <div className="bg-[#36393F] rounded-full w-[3.438rem] h-[3.438rem] mt-3 hover:cursor-pointer flex justify-center items-center transition duration-[400ms] hover:bg-[#3ba55d] group">
                    <img width={22} height={22} src={DownloadGreen} />
                </div>

                <div>
                    <img />
                </div>

            </div>
    </div>
  )
}

export default ChannelSidebar;