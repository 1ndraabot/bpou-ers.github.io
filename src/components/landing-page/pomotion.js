

const promotion = ()=> {
    return(

        <div className="container mx-[90px] mt-[95px]">
            <div className="grid grid-cols-12 gap-x-5">
                <div className="col-start-3 col-span-4">
                    <img src="asset/cover-album-img.svg" alt="Album Group Image" className="border-0 rounded-[10px]"/>
                </div>
                <div className="col-span-4 ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-putih text-[56px] font-bold leading-[70px] ">Joined Your Favorite Music Into One</h1>
                        <p className="text-putih text-base text-justify leading-5 ">In here, already more than hundreds of Book, Music, and Podcast. And already a few genre, you can mix several genre favorite into one. Most different from other is you can listening music or podcast while reading your favorite book. Not just mix genre and reading simultaneously, now you can reading together with your friends.</p>
                        <button className="py-3 px-[29px] w-52 border-0 bg-kuning rounded-full text-abu-gelap text-lg font-bold ">Try It For Free</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default promotion;