

import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ id, image, na, desc }) => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div key={id} className='space-y-2'>
                <img src={image} alt="" className='size-40 max-sm:size-20' onClick={() => { navigate(`/album/${id}`) }} />
                <p>{na}</p>
                <p className='w-45 max-sm:w-30'>
                    {desc}
                </p>
            </div>

        </div>
    )
}

export default AlbumItem