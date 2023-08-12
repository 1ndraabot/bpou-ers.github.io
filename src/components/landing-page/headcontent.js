const headcontent = ()=> {
    return (
        <div>
            <img src="asset/image-LP.svg" alt="Book-Image" className='w-full max-sm:hidden' />
            <img src="asset/image-home-sm.svg" alt="Book Image" className="w-full max-sm:block max-md:hidden lg:hidden" />
            <div className='absolute container mx-[90px] top-[120px] max-sm:mx-0'>
                <div className='flex justify-center'>
                    <div className='w-[840px]'>
                        <div className='flex flex-col gap-10 max-sm:gap-[15px]'>
                            <h1 className='font-semibold text-putih text-[64px] text-center max-sm:text-[30px]'>Collect Your Ideas in a Focused Room With Your Favorite Music</h1>
                            <p className='font-normal text-putih text-[16px] text-center max-sm:text-xs'>Join and Create Your Own Music Collection</p>
                            <div className='flex justify-center gap-[25px] max-sm:gap-[15px]'>
                                <button className='text-kuning font-semibold text-base border-solid border-[3px] border-kuning rounded-full px-14 py-4 hover:bg-kuning hover:text-abu-gelap max-sm:text-[10px] max-sm:px-9 max-sm:border-[1px] max-sm:py-2 '>Login</button>
                                <button className='text-abu-gelap font-semibold text-base bg-kuning rounded-full px-8 py-4 hover:font-bold max-sm:text-[10px] max-sm:px-5 max-sm:py-1 '>Try For Free</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* flex image */}
                <div className='h-[455px] mt-32 max-sm:mx-[14px]'>
                    <div className='grid grid-cols-12 gap-x-5 max-sm:grid-cols-2 max-sm:gap-x-5'>
                        <div className='col-span-3 max-sm:col-span-1 '>
                            <img src="asset/man-with-guitar.svg" alt="" className="max-sm:w-44" />
                        </div>
                        <div className='col-span-3 mt-[91px] max-sm:col-span-1'>
                            <img src="asset/Podcast.svg" alt="" className='flex items-end max-sm:w-44' />
                        </div>
                        <div className='col-span-3 max-sm:col-span-1'>
                            <img src="asset/book-with-lamp.svg" alt="" className="max-sm:w-44" />
                        </div>
                        <div className='col-span-3 mt-[91px] max-sm:col-span-1'>
                            <img src="asset/headphone.svg" alt="" className="max-sm:w-44" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default headcontent;