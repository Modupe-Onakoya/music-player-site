import React from 'react'
import NavBar from './NavBar'
import AlbumItem from './AblumItem'
import { albumsData, songsData } from '../assets/assets'
import Song from './Song'

const DisplayHome = () => {
    return (
        <div className='px-4'>
            <NavBar />
            <h1 className='text-bold text-[20px] pb-5'>Featured Charts</h1>

            <div className='flex ' >
                {albumsData.map((item, index) => (
                    <AlbumItem id={index} image={item.image} na={item.name} desc={item.desc} />
                ))}
            </div>
            <h1 className='pt-5 font-bold pb-5'>
                Today's biggest hits
            </h1>
            <div className='flex gap-5'>
                {songsData.map((item) => (
                    <Song image={item.image} namee={item.name} desc={item.desc} />
                ))}
            </div>

        </div>
    )
}

export default DisplayHome