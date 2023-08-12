

const promotion = ()=> {
    return(

        <div className="container mx-[90px] mt-[95px] max-sm:mx-[14px]">
            <div className="grid grid-cols-12 gap-x-5 max-sm:grid-cols-2">
                <div className="col-start-3 col-span-4 max-sm:col-span-2 max-sm:h-80 max-sm:w-full max-sm:overflow-hidden">
                    <img src="asset/cover-album-img.svg" alt="Album Group Image" className="border-0 rounded-[10px] max-sm:w-full max-sm:h-full object-cover object-center"/>
                </div>
                <div className="col-span-4 max-sm:col-span-2 max-sm:hidden ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-putih text-[56px] font-bold leading-[70px]">Joined Your Favorite Music Into One</h1>
                        <p className="text-putih text-base text-justify leading-5 ">In here, already more than hundreds of Book, Music, and Podcast. And already a few genre, you can mix several genre favorite into one. Most different from other is you can listening music or podcast while reading your favorite book. Not just mix genre and reading simultaneously, now you can reading together with your friends.</p>
                        <button className="py-3 px-[29px] w-52 border-0 bg-kuning rounded-full text-abu-gelap text-lg font-bold ">Try It For Free</button>
                    </div>
                </div>
                <h1 className="md:hidden lg:hidden max-sm:col-span-1 text-putih text-[42px] font-bold leading-snug">Joined Your Favorite Music Into One</h1>
                <div className="md:hidden lg:hidden flex flex-col gap-3">
                    <p className="md:hidden lg:hidden text-putih text-[12px] text-justify leading-normal ">In here, already more than hundreds of Book, Music, and Podcast. And already a few genre, you can mix several genre favorite into one. Most different from other is you can listening music or podcast while reading your favorite book. Not just mix genre and reading simultaneously, now you can reading together with your friends.</p>
                    <button className="md:hidden lg:hidden py-3 px-[29px] w-52 border-0 bg-kuning rounded-full text-abu-gelap text-lg font-bold ">Try It For Free</button>
                </div>
            </div>

        </div>
    )
}

export default promotion;