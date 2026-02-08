
import React from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />

            </Routes>
        </div>
    )
}

export default Display