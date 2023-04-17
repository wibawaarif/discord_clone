import { Link } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {

    useEffect(() => {
        document.title = "Register | Discord";
      }, []);

    return (
        <div className="container h-screen bg-cover w-screen bg-[url('../../assets/login_bg.svg')] flex justify-center items-center">

            <div className="bg-[#313338] h-[37rem] w-[30rem] rounded-md flex justify-center items-center">
                <div className="h-[30rem] w-[28] flex flex-col items-center">
                <p className="text-2xl font-bold text-[#dcddde]">Create an account</p>

                <div className="flex flex-col justify-left mt-6">
                    <p className="text-[#dcddde] text-xs font-bold">EMAIL</p>
                    <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>
                <div className="flex flex-col justify-left mt-6">
                    <p className="text-[#dcddde] text-xs font-bold">USERNAME</p>
                    <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>
                <div className="flex flex-col justify-left mt-6 mb-10">
                    <p className="text-[#dcddde] text-xs font-bold">PASSWORD</p>
                    <input type="password" className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                </div>

                <button className="transition duration-[200ms] h-[2.5rem] w-[26rem] py-6 bg-[#5865F2] hover:bg-[#424ec2] flex items-center justify-center text-[#dcddde] font-bold rounded-sm">Continue</button>

                <div className="text-left w-[26rem] mt-2">
                <Link to="/login" className="text-[#049CEA] font-semibold text-sm hover:underline hover:cursor-pointer">Already have an account?</Link>
                <p className="text-[0.7rem] text-[#b9bbbe] text-xs hover:underline hover:cursor-pointer mt-5">By registering, you agree to Discord's <span className="text-[#049CEA] hover:underline">Terms of Service</span> and <span className="text-[#049CEA] hover:underline">Privacy Policy</span></p>
                </div>

                </div>
            </div>

        </div>
    )
}


export default Register;