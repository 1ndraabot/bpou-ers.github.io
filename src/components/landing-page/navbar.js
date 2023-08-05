

const navbar = ()=> {
    
    return (
        <div className=' w-full bg-abu-muda py-5 flex justify-between'>
                <div className='container mx-[90px]'>
                    <div className='grid grid-cols-12 gap-x-20'>
                        <div className='col-span-2 flex items-center'>
                            <p className='text-putih font-bold text-lg'>BPou-ers</p>
                        </div>
                        <ul className='flex gap-6 col-span-8 justify-center items-center'>
                            <li className='text-putih font-semibold text-base'>Home</li>
                            <li className='text-putih font-semibold text-base'>Book</li>
                            <li className='text-putih font-semibold text-base'>Music</li>
                            <li className='text-putih font-semibold text-base'>Podcast</li>
                            <li className='text-putih font-semibold text-base'>About</li>
                        </ul>
                        <div className='col-span-2 '>
                            <button  className="w-full py-2 border-[3px] border-kuning rounded-full  text-kuning font-semibold  ">Try For Free</button>
                        </div>
                    </div>
                </div>
        </div>

            
    )
}

export default navbar;