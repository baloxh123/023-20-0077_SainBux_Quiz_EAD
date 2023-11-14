import image from '../assets/Hero.png'
import profile from '../assets/profile.png'

export default function Welcome() {
    return (
        <div className="flex justify-center gap-16 mt-28 mb-28">
            <div className="w-[30%]">
                <h2 className="text-5xl font-bold my-6">Discover, collect,  and charity in extraordinary NFT marketplace</h2>
                <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
                <div className="text-white flex flex-row gap-6 my-6">
                    <button className="border rounded px-8 py-1">Explore</button>
                    <button className="border rounded px-8   py-1">create</button>
                </div>
            </div>
            <div className="w-[30%] border p-4  rounded-2xl">
                <div >
                    <img src={image} alt="Image" srcset="" />
                    <div className='flex my-3'>
                        <img src={profile} alt="" srcset="" />
                        <div className='flex justify-between items-center mx-2 w-[100%]'>
                            <div>
                                <p className='m-0 font-semibold'>Laura</p>
                                <p className='m-0'>0.21 weth</p>
                            </div>
                            <div>
                                <p className='m-0 font-semibold'>WE ARE HERE</p>
                                <p className='m-0'>0.21 weth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
