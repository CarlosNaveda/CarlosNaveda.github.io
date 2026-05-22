import IframeVideos from "./IframeVideosType";
import { useState } from "react";


const ToNextAxisIframeVideos = ({video}: {video: IframeVideos}) => {
    
    const [videoActive, setVideoActive] = useState<string | null>(null);
    
    return (
        <>  
            {/* Últimos videos de ToNextAxis */}
            <div onClick={() => setVideoActive(`${video.source}?autoplay=1&vq=hd1080`)}> 
                <iframe className="toNextAxis-last-videos w-full max-w-3xl aspect-video" src={video.source} title={video.title}>
                </iframe>                
            </div>               

            {/* Video seleccionado */}
            {videoActive && (
              <div className="toNextAxis-video-modal">
                <div className="toNextAxis-video-overlay" onClick={() => setVideoActive(null)}/>
                <iframe className="toNextAxis-video-selected w-full max-w-3xl aspect-video" src={videoActive} allow="autoplay" allowFullScreen>
                </iframe>            
             </div>       
            )}            
        </>
    )
}

export default ToNextAxisIframeVideos;