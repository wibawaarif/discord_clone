import { Link } from "react-router-dom";

import DiscordMainLogo from "../../assets/discord_main_logo.svg";

const Navbar = ({items}) => {
    return (
        <div className="px-56 py-5 flex items-center justify-between">
        <div>
          <img className="cursor-pointer" src={DiscordMainLogo} />
        </div>

        <div className="w-2/4 flex justify-between z-0">
          {items.map((x, index) => (
            <Link
              className="text-white font-semibold cursor-pointer hover:underline"
              key={`${x}-${index}`}
            >
              {x}
            </Link>
          ))}
        </div>

        <Link to="/login" className="bg-white transition duration-[400ms] px-4 py-2 rounded-full text-sm hover:text-[#5865f2] hover:shadow-2xl">
          Login
        </Link>
      </div>
    )
}

export default Navbar;