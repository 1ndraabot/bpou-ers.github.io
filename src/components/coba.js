// import '../index.css';
import Navbar from './landing-page/navbar';

const navbar = ()=> {
    return (

        // <div className=''>
        //     <div className=' w-full bg-abu-muda py-5 items-center flex justify-between'>
        //         <div className='container mx-[90px]'>
        //             <div className='grid grid-cols-12 gap-x-20'>
        //                 <div className='col-span-2 '>
        //                     <p className='text-putih font-bold text-lg'>BPou-ers</p>
        //                 </div>
        //                 <ul className='flex gap-6 col-span-8 justify-center'>
        //                     <li className='text-putih font-semibold text-base'>Home</li>
        //                     <li className='text-putih font-semibold text-base'>Book</li>
        //                     <li className='text-putih font-semibold text-base'>Music</li>
        //                     <li className='text-putih font-semibold text-base'>Podcast</li>
        //                     <li className='text-putih font-semibold text-base'>About</li>
        //                 </ul>
        //                 <div className='col-span-2 '>
        //                     <div className='px-1 py-2 border-solid rounded-full outline outline-2 outline-kuning'>
        //                         <div className='flex items-center justify-center'>
        //                             <ul>
        //                                 <li className='text-putih font-semibold text-[14px]'>Try For Free</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>
            {/* <Navbar/> */}
            <img src="asset/image LP.png" alt="Book-Image" className='w-full' />
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


                {/* <div className='grid grid-cols-12 bg-slate-300'>
                        <p className='bg-gray-400 col-span-12 text-center'>Collect Your Ideas in a Focused Room With Your Favorite Music</p>
                        <p className='col-span-12 '>Join and Create Your Own Music Collection</p>
                </div> */}
            </div>
            
            
            {/* <div className='absolute top-[120px] w-[1280px] h-96 ml-[90px] bg-blue-500'>
                <div className='bg-red-400 grid grid-cols-12'>
                    <div className='col-span-12 '>
                        <h1 className='flex justify-center'>Collect Your Ideas in a Focused Room With Your Favorite Music</h1>
                        <p className='flex justify-center'>Join and Create Your Own Music Collection</p>
                    </div>
                </div>
            </div> */}
        </div>
            
    )
}

export default navbar;