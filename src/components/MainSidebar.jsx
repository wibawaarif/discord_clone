import FriendLogo from "../../assets/friends.svg";
import StageDiscoveryLogo from "../../assets/stage_discovery.svg";
import NitroLogo from "../../assets/nitro_icon.svg";

const MainSidebar = () => {
  return (
    <div className="h-screen bg-[#2F3136] w-[20rem] flex flex-col justify-center items-center">
        <div className="w-[14.5rem] h-[2.5rem]">
            <input placeholder="Find or start a conversation" className="bg-[#202225] w-full py-1 px-2 text-[#dcddde] outline-none rounded-sm placeholder:text-sm" />
        </div>

        <span className="h-[0.5px] w-full bg-slate-950"></span>

        <div className="w-[14.5rem] h-[52rem]">
            
        <div className="flex">
            <img src={FriendLogo} />
            <p>Friends</p>
        </div>


        </div>
    </div>
  )
}

export default MainSidebar;