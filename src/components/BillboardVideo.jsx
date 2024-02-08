import React from 'react'
import bgVideo from '../assets/quiet-place-clip.mp4'
import VideoPlayer from './BBVideoPlayer'


const BillboardVideo = () => {
    return (
        <div className='billboardVideoContainer'>

            <VideoPlayer src= {bgVideo} />
            
        </div>
    )


}

export default BillboardVideo;