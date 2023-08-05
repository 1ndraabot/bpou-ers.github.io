const headcontent = ()=> {
    return (
        <div>
            <img src="asset/image-LP.svg" alt="Book-Image" className='w-full' />
            <div className='absolute container mx-[90px] top-[120px]'>
                <div className='flex justify-center'>
                    <div className='w-[840px]'>
                        <div className='flex flex-col gap-10'>
                            <h1 className='font-semibold text-putih text-[64px] text-center'>Collect Your Ideas in a Focused Room With Your Favorite Music</h1>
                            <p className='font-normal text-putih text-[16px] text-center'>Join and Create Your Own Music Collection</p>
                            <div className='flex justify-center gap-[25px]'>
                                <button className='text-kuning font-semibold text-base border-solid border-[3px] border-kuning rounded-full px-14 py-4  '>Login</button>
                                <button className='text-abu-gelap font-semibold text-base bg-kuning rounded-full px-8 py-4 '>Try For Free</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* flex image */}
                <div className='h-[455px] mt-32'>
                    <div className='grid grid-cols-12 gap-x-5'>
                        <div className='col-span-3'>
                            <img src="asset/man-with-guitar.svg" alt="" />
                        </div>
                        <div className='col-span-3 mt-[91px]'>
                            <img src="asset/Podcast.svg" alt="" className='flex items-end' />
                        </div>
                        <div className='col-span-3'>
                            <img src="asset/book-with-lamp.svg" alt="" />
                        </div>
                        <div className='col-span-3 mt-[91px]'>
                            <img src="asset/headphone.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default headcontent;