import { Link } from "react-router-dom";
import BarcodeImage from "../../assets/qr_code.png";
import { useEffect } from "react";

const Login = () => {

    useEffect(() => {
        document.title = "Login | Discord";
      }, []);

    return (
        <div className="container h-screen bg-cover w-screen bg-[url('../../assets/login_bg.svg')] flex justify-center items-center">

            <div className="bg-[#313338] h-[26rem] w-[49rem] rounded-md flex justify-center items-center">

                <div className="w-[26rem] h-[21rem] text-center mb-7">
                    <p className="text-[#F2F3F5] text-2xl font-semibold">Welcome back!</p>
                    <p className="text-[#b9bbbe] mt-2">We're so excited to see you again!</p>
                    <div className="flex flex-col justify-left text-left mt-6">
                        <p className="text-[#b9bbbe] text-xs font-bold">EMAIL OR PHONE NUMBER <span className="text-red-600">*</span></p>
                        <input className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                    </div>
                    <div className="flex flex-col justify-left text-left mt-6">
                        <p className="text-[#b9bbbe] text-xs font-bold">PASSWORD <span className="text-red-600">*</span></p>
                        <input type="password" className="bg-[#1E1F22] h-[2.5rem] w-[26rem] text-[#dcddde] p-2 outline-none mt-2" />
                    </div>

                    <div className="text-left">
                    <Link to="/login" className="text-[#049CEA] text-sm font-semibold hover:underline hover:cursor-pointer">Forgot your password?</Link>

                    <button className="mt-4 transition duration-[200ms] h-[2.5rem] w-[26rem] py-6 bg-[#5865F2] hover:bg-[#424ec2] flex items-center justify-center text-[#dcddde] font-bold rounded-sm">Log In</button>
                    <p className="text-[0.7rem] text-[#b9bbbe] text-sm hover:cursor-pointer mt-3">Need an account? <Link to="/register" className="text-[#049CEA] hover:underline font-semibold">Register</Link></p>
                    </div>
                </div>


                <div className="w-72 flex flex-col items-center pl-8 ml-4">
                   <img className="border-8" src={BarcodeImage} />
                   <div className="w-64 text-center mt-7">
                   <p className="text-[#F2F3F5] text-2xl font-semibold">Log in with QR Code</p>
                   <p className="text-[#b9bbbe] mt-2 leading-5">Scan this with the <span className="font-bold">Discord mobile app</span> to log in instantly.</p>
                   </div>
                </div>
            </div>

        </div>
    )
}


export default Login;