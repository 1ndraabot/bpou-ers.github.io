const SignUp = ()=> {
    
    return(
        <div className="mt-[150px] mx-[90px]">
            <div className="grid grid-cols-12 gap-x-5">
                <h1 className="col-span-12 pb-[91px] text-putih text-center text-4xl font-semibold">Sign Up and Start Your Productivity</h1>
                <div className="col-start-4 col-span-6 ">
                    <div className="flex flex-col gap-[57px]">
                        <div className="flex flex-col gap-[30px]">
                            <div >
                                <p className="text-putih text-[28px] ">Enter Your Email</p>
                                <input type="text" placeholder="Masukkan Email" className="text-putih text-lg border-0 rounded-[10px] bg-abu-mateng w-full px-7 py-[25px]" />
                            </div>
                            <div>
                                <p className="text-putih text-[28px] ">Create a Password</p>
                                <input type="text" placeholder="Password" className="text-putih text-lg border-0 rounded-[10px] bg-abu-mateng w-full px-7 py-[25px]" />
                            </div>
                            <div>
                                <p className="text-putih text-[28px] ">Confirm Your Password</p>
                                <input type="text" placeholder="Confirm password" className="text-putih text-lg border-0 rounded-[10px] bg-abu-mateng w-full px-7 py-[25px]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[30px] items-center">
                            <button className="w-52 py-3 text-abu-gelap font-medium text-[28px] bg-kuning border-0 rounded-full"> Sign Up </button>
                            <p className="text-putih text-xl font-light">Have an Account? <a href="#" className="text-kuning ">Login</a></p>
                        </div>

                        <p className="text-putih text-center">or</p>

                        <div className="flex flex-col gap-[30px]">
                            <button className="w-full py-[14px] text-abu-gelap text-[28px] font-medium border-0 rounded-full bg-kuning flex items-center justify-center gap-x-5"><img src="asset/fb-icon.svg" alt="Facebook Image" /> Sign up with Facebook</button>
                            <button className="w-full py-[14px] text-abu-gelap text-[28px] font-medium border-0 rounded-full bg-kuning flex items-center justify-center gap-x-5"><img src="asset/google-icon.svg" alt="Google Image" /> Sign up with Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;