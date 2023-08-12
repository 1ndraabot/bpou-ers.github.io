
import { useNavigate } from "react-router-dom";
const Navbar = ()=> {
    const navigate = useNavigate();

    return (
        <div className=' w-full bg-abu-muda py-5 flex justify-between '>
                <div className='container mx-[90px] max-sm:mx-[14px]'>
                    <div className='grid grid-cols-12 gap-x-20 max-sm:grid-cols-2'>
                        <div className='col-span-2 flex items-center max-sm:col-span-1'>
                            <p className='text-putih font-bold text-lg max-sm:text-base max-md:text-base'>BPou-ers</p>
                        </div>
                        <ul className='flex gap-6 col-span-8 justify-center items-center max-sm:hidden max-md:hidden'>
                            <li className='text-putih font-semibold text-base'>Home</li>
                            <li className='text-putih font-semibold text-base'>Book</li>
                            <li className='text-putih font-semibold text-base'>Music</li>
                            <li className='text-putih font-semibold text-base'>Podcast</li>
                            <li className='text-putih font-semibold text-base'>About</li>
                        </ul>
                        <div className='col-span-2 max-sm:hidden max-md:col-span-3'>
                            <button onClick={()=> navigate('/SignUP')} className="w-full py-2 border-[3px] border-kuning rounded-full  text-kuning font-semibold hover:bg-kuning hover:text-abu-gelap">Try For Free</button>
                        </div>

                        <div className="col-span-1 flex justify-end md:order-1">
                            <img src="asset/icon/Toogle.svg" alt="" className="lg:hidden w-3" />
                        </div>
                    </div>
                </div>
        </div>

            
    )
}

export default Navbar;