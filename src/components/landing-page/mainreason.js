import Popular from './popular';

const reason = ()=> {

    return(
        
        <div className='mt-[95px] mx-[90px] max-sm:mx-[14px]'>
            <div className='container grid grid-cols-12 gap-x-5 max-sm:grid-cols-2'>
                <h1 className='col-span-12 text-putih text-3xl text-center font-semibold max-sm:col-span-2 max-sm:text-2xl'>What Makes Us Different From Other?</h1>
                <div className='col-span-3 border-0 rounded-[10px] bg-abu-mateng mt-9 max-sm:col-span-1'>
                    <div className='py-6 px-[39px] flex items-center flex-col gap-7 max-sm:gap-5 max-sm:px-5'>
                        <h1 className='text-putih text-center text-[32px] font-bold max-sm:text-base'>Used By <br /> <span className='text-kuning'>180k+</span> People</h1>
                        <img src="asset/profile-user-img.svg" alt="Profile User Image" className='w-40 max-sm:w-28' />
                    </div>
                </div>

                <div className='col-span-3 border-0 rounded-[10px] bg-abu-mateng mt-9 max-sm:col-span-1'>
                    <div className='px-[39px] flex items-center flex-col max-sm:px-5'>
                        <h1 className='pt-6 text-putih text-center text-[32px] font-bold max-sm:text-base'>Update <br /> <span className='text-kuning'>Every Day</span></h1>
                        <img src="asset/update-icon.svg" alt="Update Icon Image" className='w-[136px] mb-[-100%] max-sm:w-[105px]' />
                    </div>
                </div>
                
                <div className='col-span-3 border-0 rounded-[10px] bg-abu-mateng mt-9 max-sm:col-span-1'>
                    <div className='py-6 px-[39px] flex items-center flex-col gap-4 max-sm:px-5'>
                        <h1 className='text-putih text-center text-[32px] font-bold max-sm:text-base'><span className='text-kuning'>Compatibility</span> Usage</h1>
                        <img src="asset/compatibility-icon.svg" alt="Profile User Image" className='w-[84px] mb-[-100%] max-sm:mb-[-20%] max-sm:w-14'/>
                    </div>
                </div>
                
                <div className='col-span-3 border-0 rounded-[10px] bg-abu-mateng mt-9 max-sm:col-span-1'>
                    <div className='py-6 px-[39px] flex items-center flex-col max-sm:px-5'>
                        <h1 className='text-putih text-center text-[32px] font-bold max-sm:text-base w-60'><span className='text-kuning'>Read & Listen</span> <br /> with Friends</h1>
                        <img src="asset/read-icon.svg" alt="Profile User Image" className='w-[138px] mb-[-100%] max-sm:mb-[-33%] max-sm:w-[94px]' />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default reason;