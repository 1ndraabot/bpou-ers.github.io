import Headcontent from './headcontent';

const popularTop = ()=> {

    return(
        
        <div>
            <div className="container mt-96 mx-[90px] max-sm:mt-[550px] max-sm:mx-[14px] max-sm:w-auto">
                <div className='grid grid-cols-12 gap-x-5 max-sm:grid-cols-2 max-sm:gap-14'>
                    <div className='col-span-4  flex flex-col gap-9'>
                        <h1 className='text-2xl font-semibold text-putih text-center'>Most Popular Book</h1>
                        <div className='flex flex-col gap-4 divide-y-2 divide-bor-color bg-abu-mateng border-0 rounded-[10px]'>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/dunia-yang-disembunyikan.svg" alt="Sejarah Dunia yang Disembunyikan" />
                                <div className='flex flex-col gap-[14px] max-sm:gap-0'>
                                    <div className='flex flex-col gap-1 max-sm:gap-[2px]'>
                                        <h1 className='text-putih text-base font-semibold'>Sejarah Dunia yang Disembunyikan</h1>
                                        <p className='text-putih text-[10px]'>Jonathan Black/2015</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See book</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/hujan-tere-liye.svg" alt="Hujan" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Hujan</h1>
                                        <p className='text-putih text-[10px]'>Tere Liye/2016</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See book</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/ancika-1995.svg" alt="Ancika:Dia yang Bersamaku Tahun 1995" />
                                <div className='flex flex-col'>
                                    <div className='flex flex-col gap-[2px]'>
                                        <h1 className='text-putih text-base font-semibold leading-5'>Ancika : Dia Yang Bersamaku Tahun 1995</h1>
                                        <p className='text-putih text-[10px]'>Pidi Baiq/2021</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See book</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/shaka-oh-shaka.svg" alt="Shaka Oh Shaka" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Shaka Oh Shaka</h1>
                                        <p className='text-putih text-[10px]'>Jocelyn Suherman/2022</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See book</h1>
                                </div>
                            </div>
                            <h1 className='py-[10px] text-kuning font-semibold text-sm text-center'>See All Book</h1>
                        </div>
                    </div>

                    <div className='col-span-4  flex flex-col gap-9 '>
                        <h1 className='text-2xl font-semibold text-putih text-center'>Most Popular Music</h1>
                        <div className='flex flex-col gap-4 divide-y-2 divide-bor-color bg-abu-mateng border-0 rounded-[10px]'>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/nadin-rpg.svg" alt="Nadin Amizah - Rayuan Perempuan Gila" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Rayuan Perempuan Gila</h1>
                                        <p className='text-putih text-[10px]'>Nadin Amizah</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Music</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/billie-ellish.svg" alt="What Was I Made For? - Billie Ellish" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>What Was I Made For?</h1>
                                        <p className='text-putih text-[10px]'>Billie Ellish</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Music</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/louren-spencer-smith.svg" alt="Fingers Crossed - Lauren Spencer Smith" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Fingers Crossed</h1>
                                        <p className='text-putih text-[10px]'>Lauren Spencer Smith</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Music</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/d4vd.svg" alt="Sleep Well - D4vd" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Sleep Well</h1>
                                        <p className='text-putih text-[10px]'>D4vd</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Music</h1>
                                </div>
                            </div>
                            <h1 className='py-[10px] text-kuning font-semibold text-sm text-center'>See All Music</h1>
                        </div>
                    </div>

                    <div className='col-span-4  flex flex-col gap-9 '>
                        <h1 className='text-2xl font-semibold text-putih text-center'>Most Popular Podcaster</h1>
                        <div className='flex flex-col gap-4 divide-y-2 divide-bor-color bg-abu-mateng border-0 rounded-[10px]'>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/past-romance.svg" alt="Past Romance Story Podcast" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Past Romance Story</h1>
                                        <p className='text-putih text-[10px]'>Rama Project</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Podcast</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/kpop-circle.svg" alt="KPOP Circle Podcast" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>KPOP Circle</h1>
                                        <p className='text-putih text-[10px]'>Wintersss</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Podcast</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/alam-seberang.svg" alt="Alam Seberang Podcast" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Alam Seberang</h1>
                                        <p className='text-putih text-[10px]'>Haunted Project</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Podcast</h1>
                                </div>
                            </div>
                            <div className='pt-[10px] pl-[7px] flex items-center gap-[30px]'>
                                <img src="asset/cipukacipiki.svg" alt="Cipukacipaki Podcast" />
                                <div className='flex flex-col gap-[14px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='text-putih text-base font-semibold'>Cipukacipaki</h1>
                                        <p className='text-putih text-[10px]'>Wkwkwk</p>
                                    </div>
                                <h1 className='text-kuning text-sm'>See Podcast</h1>
                                </div>
                            </div>
                            <h1 className='py-[10px] text-kuning font-semibold text-sm text-center'>See All Podcast</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default popularTop;