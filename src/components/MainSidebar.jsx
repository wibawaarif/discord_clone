import PlusLogo from "../../assets/plus_icon.svg";
import EmptyList from "../../assets/empty_dm_list.svg";
import CloseLogo from "../../assets/close_icon.svg";
import HashtagLogo from "../../assets/hashtag.svg";
import ArrowLogo from "../../assets/arrow.svg";

const MainSidebar = ({ page, channels }) => {
  return (
    <div className="h-screen bg-[#2F3136] w-[20rem] flex flex-col justify-center items-center">
      {page === 'dashboard' ? (
        <>
          <div className="w-[14.5rem] h-[2.5rem]">
            <input
              placeholder="Find or start a conversation"
              className="bg-[#202225] w-full py-1 px-2 text-[#dcddde] outline-none rounded-sm placeholder:text-sm"
            />
          </div>

          <span className="h-[0.5px] w-full bg-slate-950"></span>

          <div className="w-[14.5rem] h-[52rem]">
            <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
              {/* Friend svg */}
              <svg
                className="text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>

              <p className="text-[#8e9297] font-medium group-hover:text-white">
                Friends
              </p>
            </div>

            <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
              {/* Stage Discovery svg */}
              <svg
                className="text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>

              <p className="text-[#8e9297] font-medium group-hover:text-white">
                Stage Discovery
              </p>
            </div>

            <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
              {/* Nitro svg */}
              <svg
                className="text-[#8e9297] w-[1.75rem] mr-5 group-hover:text-white"
                aria-hidden="false"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                ></path>
              </svg>

              <p className="text-[#8e9297] font-medium group-hover:text-white">
                Nitro
              </p>
            </div>

            <div className="flex justify-between mt-6 px-2">
              <p className="font-semibold text-[11px] text-white hover:cursor-default">
                DIRECT MESSAGES
              </p>
              <img
                className="hover:cursor-pointer"
                width={18}
                height={18}
                src={PlusLogo}
              />
            </div>
            <img className="mt-6" src={EmptyList} />
          </div>
        </>
      ) : (
        <>
            <div className="w-[14.5rem] h-[54.5rem]">

                <div className="flex justify-between px-2 mt-2">
                    <p className="text-white font-bold">React Lovers</p>
                    <img className="hover:cursor-pointer" width={20} height={20} src={CloseLogo} />
                </div>

                <div className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
                    <img className="mr-3" width={22} height={22} src={HashtagLogo} />
                    <p className="text-[#8e9297] font-medium group-hover:text-white">rules</p>
                </div>

                <div className="flex mt-6">
                  <img className="mr-1" width={12} height={12} src={ArrowLogo} />
                  <p className="text-white text-sm font-medium">TEXT CHANNELS</p>
                </div>

                {
                  channels.map(x => (
                    <div  className="flex rounded-md px-2 py-2 items-center mt-2 hover:cursor-pointer hover:bg-[#393C43] group">
                        <img className="mr-3" width={22} height={22} src={HashtagLogo} />
                        <p className="text-[#8e9297] font-medium group-hover:text-white">{x}</p>
                    </div>
                  ))
                }

            </div>
        </>
      )}
    </div>
  );
};

export default MainSidebar;
