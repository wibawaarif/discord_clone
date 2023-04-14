import BgRegister from "../../assets/login_bg.svg";
function Register() {

    return (
        <div className="container h-screen object-fill w-screen bg-[url('../../assets/login_bg.svg')] flex justify-center items-center">

            <div className="bg-[#313338] h-[37rem] w-[30rem] rounded-md flex justify-center items-center">
                <div className="h-[30rem] w-[28] flex flex-col justify-between items-center">
                <p className="text-2xl font-bold text-[#dcddde]">Create an account</p>

                <div className="flex flex-col justify-left">
                    <p className="text-[#dcddde] text-xs font-bold">EMAIL</p>
                    <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>
                <div className="flex flex-col justify-left">
                    <p className="text-[#dcddde] text-xs font-bold">USERNAME</p>
                    <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>
                <div className="flex flex-col justify-left">
                    <p className="text-[#dcddde] text-xs font-bold">PASSWORD</p>
                    <input type="password" className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>
                <button className="transition duration-[200ms] h-[2.5rem] w-[26rem] py-6 bg-[#5865F2] hover:bg-[#424ec2] flex items-center justify-center text-[#dcddde] font-bold rounded-sm">Continue</button>

                <div className="text-left w-[26rem]">
                <p className="text-[#049CEA] text-sm hover:underline hover:cursor-pointer">Already have an account?</p>
                </div>

                </div>
            </div>

        </div>
    )
}


export default Register;