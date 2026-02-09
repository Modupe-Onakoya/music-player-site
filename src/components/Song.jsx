import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Song = ({ image, namee, desc }) => {
    const { playWithId } = useContext(PlayerContext)

    return (
        <div onClick={() => { playWithId(id) }} className='max-sm:'>

            <img src={image} alt="" className='size-20' />
            <p className='text-[13px]'>
                {namee}
            </p>
            <p className='max-sm:w-30 text-[13px]'>
                {desc}
            </p>
        </div>
    )
}

export default Song