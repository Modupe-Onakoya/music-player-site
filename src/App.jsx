import React, { useContext } from 'react'
import SideBar from './components/SideBar'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import Player from './components/Player'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'

const App = () => {

  const { audioRef, track } = useContext(PlayerContext)
  return (
    <div className='h-screen '>



      <div className='h-[90%] flex'>

        <SideBar />
        <Display />

      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>

    </div>
  )
}

export default App