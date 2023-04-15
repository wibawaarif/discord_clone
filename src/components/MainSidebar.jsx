import FriendLogo from "../../assets/friends.svg";
import StageDiscoveryLogo from "../../assets/stage_discovery.svg";
import NitroLogo from "../../assets/nitro_icon.svg";
import PlusLogo from "../../assets/plus_icon.svg";

const MainSidebar = () => {
  return (
    <div className="h-screen bg-[#2F3136] w-[20rem] flex flex-col justify-center items-center">
        <div className="w-[14.5rem] h-[2.5rem]">
            <input placeholder="Find or start a conversation" className="bg-[#202225] w-full py-1 px-2 text-[#dcddde] outline-none rounded-sm placeholder:text-sm" />
        </div>

        <span className="h-[0.5px] w-full bg-slate-950"></span>

        <div className="w-[14.5rem] h-[52rem]">
            
        <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43]">
            <img className="mr-5 fill-blue-500" width={28} height={28} src={FriendLogo} />
            <p className="text-[#8e9297] font-medium">Friends</p>
        </div>

        <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43]">
            <img className="mr-5" width={28} height={28} src={StageDiscoveryLogo} />
            <p className="text-white font-medium">Stage Discovery</p>
        </div>

        <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43]">
            <img className="mr-5" width={28} height={28} src={NitroLogo} />
            <p className="text-white font-medium">Nitro</p>
        </div>

        <div className="flex justify-between mt-6 px-2">
            <p className="font-semibold text-[11px] text-white hover:cursor-default">DIRECT MESSAGES</p>
            <img className="hover:cursor-pointer" width={18} height={18} src={PlusLogo} />
        </div>


        </div>
    </div>
  )
}

export default MainSidebar;