import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Song = ({ image, namee }) => {
    const { playWithId } = useContext(PlayerContext)

    return (
        <div onClick={() => { playWithId(id) }}>

            <img src={image} alt="" className='size-40' />
            <p>
                {namee}
            </p>
        </div>
    )
}

export default Song