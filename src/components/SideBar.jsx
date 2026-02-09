
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const Navigate = useNavigate()
    return (
        <div className='h-screen px-4 max-sm:px-1 max-sm:pt-1 space-y-2 sm:pt-2 overflow-hidden w-[50%]  max-sm:w-[50%] hidden sm:block'>

            <div className='h-[10%] max-sm:h-[10%] w-[100%] max-sm:w-[100%] bg-gray-300 '>
                <div onClick={() => { Navigate("/") }} className='flex items-center p-1 gap-2'>
                    <img src={assets.home_icon} className='size-4' />
                    <p>Home</p>
                </div>
                <div className='flex items-center p-1 gap-2'>
                    <img src={assets.search_icon} alt="" className='size-4' />
                    <p>
                        Search
                    </p>
                </div>
            </div>
            <div className='h-[78%] max-sm:h-[90%] w-[100] max-sm:w-[100%] bg-gray-300 space-y-5 sm:pt-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.stack_icon} alt="" className='size-3' />
                        <p className='max-sm:text-sm'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.arrow_icon} alt="" className='size-3' />
                        <img src={assets.plus_icon} alt="" className='size-3' />
                    </div>

                </div>

                <div className='px-1 space-y-5 px-2'>
                    <div className='sm:bg-gray-200 sm:p-2 space-y-2'>
                        <p className='max-sm:hidden'>Create Your first playlist</p>
                        <p className='max-sm:hidden'>
                            Its easy we'll help you
                        </p>
                        <p className='bg-white  rounded-lg max-sm:w-[80%] text-sm text-center w-fit sm:px-4 sm:py-1'>Create Playlist</p>
                    </div>
                    <div className='sm:bg-gray-200 sm:p-2 space-y-2 ' >
                        <p className='max-sm:hidden'>Create Your first playlist</p>
                        <p className='max-sm:hidden'>
                            Its easy we'll help you
                        </p>
                        <p className='bg-white  rounded-lg max-sm:w-[80%] text-sm text-center w-fit sm:px-4 sm:py-1'>Browse Podcast</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SideBar