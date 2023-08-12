const pricelist = ()=> {
    return(

        <div className="container mx-[90px] mt-[95px] max-sm:mx-[14px] ">
            <div className="grid grid-cols-12 gap-x-5 gap-y-9 max-sm:grid-cols-2 ">
                <h1 className="col-span-12 text-putih text-center text-[64px] font-bold max-sm:col-span-2 max-sm:text-2xl bg-white ">Choose Your <span className="text-kuning">Choice</span></h1>
                
                <div className="col-span-4 border-0 px-[30px] pt-3 pb-[50px] rounded-[10px] bg-abu-mateng flex justify-center items-center flex-col gap-[42px] sm:col-span-1 max-sm:px-6 ">
                    <div className=" py-4 px-16  border-b-2 bg-black border-bor-color flex flex-col items-center justify-center max-sm:px-0 ">
                        <h1 className="text-putih text-5xl font-semibold ">Standart</h1>
                        <p className="text-kuning text-2xl ">$ 3.99 / Month</p>
                    </div>
                    <div className="flex flex-col gap-6 bg-black" >
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Access all book</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Enjoying music with no ads</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Create a group with friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Shared your favorite page to friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Joined to live podcast</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-abu-gelap text-xl font-semibold px-9 py-4 border-0 rounded-[10px] bg-kuning">Buy and Start</button>
                    </div>
                </div>

                <div className="col-span-4 border-0 px-[30px] pt-3 pb-[50px] rounded-[10px] bg-abu-mateng flex justify-center items-center flex-col gap-[42px]">
                    <div className=" py-4 px-6   border-b-2 border-bor-color flex flex-col items-center justify-center ">
                        <h1 className="text-putih text-5xl font-semibold ">Still a Long</h1>
                        <p className="text-kuning text-2xl ">$ 23.59 / 6 Month</p>
                    </div>
                    <div className="flex flex-col gap-6" >
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Access all book</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Enjoying music with no ads</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Create a group with friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Shared your favorite page to friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Joined to live podcast</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-abu-gelap text-xl font-semibold px-9 py-4 border-0 rounded-[10px] bg-kuning">Buy and Start</button>
                    </div>
                </div>

                <div className="col-span-4 border-0 px-[30px] pt-3 pb-[50px] rounded-[10px] bg-abu-mateng flex justify-center items-center flex-col gap-[42px]">
                    <div className=" py-4 px-16  border-b-2 border-bor-color flex flex-col items-center justify-center ">
                        <h1 className="text-putih text-5xl font-semibold ">Always</h1>
                        <p className="text-kuning text-2xl ">$ 46.99 / Years</p>
                    </div>
                    <div className="flex flex-col gap-6" >
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Access all book</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Enjoying music with no ads</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Create a group with friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Shared your favorite page to friends</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="asset/cek-icon.svg" alt="Checked List Icon" />
                            <p className="text-putih text-base font-medium">Joined to live podcast</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-abu-gelap text-xl font-semibold px-9 py-4 border-0 rounded-[10px] bg-kuning">Buy and Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricelist;