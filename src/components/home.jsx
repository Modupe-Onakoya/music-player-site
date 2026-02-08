
import React from 'react'
import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import Player from './components/Player'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'

const home = () => {

    const { audioRef, track } = useContext(PlayerContext)
    return (
        <div className='h-screen '>



            <div className='h-[90%] flex'>
                <SignUp />
                <SideBar />
                <Display />

            </div>
            <Player />
            <audio ref={audioRef} src={track.filea} preload='auto'></audio>
        </div>
    )


}

export default home