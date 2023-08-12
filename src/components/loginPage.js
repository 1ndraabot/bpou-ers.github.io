import { useNavigate } from "react-router-dom";

const LoginPage = ()=> {
    
    return(
        <div className="mt-[150px] mx-[90px]">
            <div className="grid grid-cols-12 gap-x-5">
                <h1 className="col-start-5 col-span-4 pb-[91px] text-putih text-center text-[64px] font-semibold">Log In to <span className="text-kuning">BPou-ers</span></h1>
                <div className="col-start-4 col-span-6 ">
                    <div className="flex flex-col gap-[57px]">
                        <div className="flex flex-col gap-[30px]">
                            <div >
                                <p className="text-putih text-[28px] ">Email or username</p>
                                <input type="text" placeholder="Email or username" className="text-putih text-lg border-0 rounded-[10px] bg-abu-mateng w-full px-7 py-[25px]" />
                            </div>
                            <div>
                                <p className="text-putih text-[28px] ">Password</p>
                                <input type="text" placeholder="Password" className="text-putih text-lg border-0 rounded-[10px] bg-abu-mateng w-full px-7 py-[25px]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[30px] items-center">
                            <button className="w-52 py-3 text-abu-gelap font-medium text-[28px] bg-kuning border-0 rounded-full"> Login </button>
                            <a href="#" className="text-putih text-xl font-light underline ">Forgot your password?</a>
                        </div>

                        <p className="text-abu-mateng text-center">or</p>

                        <div className="flex flex-col gap-[30px]">
                            <button className="w-full py-[14px] text-abu-gelap text-[28px] font-medium border-0 rounded-full bg-kuning flex items-center justify-center gap-x-5"><img src="asset/fb-icon.svg" alt="Facebook Image" /> Continue with Facebook</button>
                            <button className="w-full py-[14px] text-abu-gelap text-[28px] font-medium border-0 rounded-full bg-kuning flex items-center justify-center gap-x-5"><img src="asset/google-icon.svg" alt="Google Image" /> Continue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;