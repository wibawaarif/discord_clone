import { Link } from "react-router-dom";
const Login = () => {

    return (
        <div className="container h-screen bg-cover w-screen bg-[url('../../assets/login_bg.svg')] flex justify-center items-center">

            <div className="bg-[#313338] h-[25rem] w-[48rem] rounded-md flex justify-center items-center">
                <div className="w-[26rem] h-[21rem]">
                    <p>Welcome back!</p>
                    <p>We're so excited to see you again!</p>
                    <div className="flex flex-col justify-left mt-6">
                        <p className="text-[#dcddde] text-xs font-bold">EMAIL</p>
                        <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                    </div>
                    <div className="flex flex-col justify-left mt-6">
                        <p className="text-[#dcddde] text-xs font-bold">EMAIL</p>
                        <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                    </div>
                    <Link to="/login" className="text-[#049CEA] text-sm hover:underline hover:cursor-pointer">Already have an account?</Link>
                    <button className="transition duration-[200ms] h-[2.5rem] w-[26rem] py-6 bg-[#5865F2] hover:bg-[#424ec2] flex items-center justify-center text-[#dcddde] font-bold rounded-sm">Log In</button>
                    <p className="text-[0.7rem] text-[#b9bbbe] text-xs hover:underline hover:cursor-pointer mt-5">By registering, you agree to Discord's <span className="text-[#049CEA] hover:underline">Terms of Service</span> and <span className="text-[#049CEA] hover:underline">Privacy Policy</span></p>
                </div>

                <div className="bg-white w-72 flex flex-col items-center">
                    <p>test</p>
                </div>
            </div>

        </div>
    )
}


export default Login;