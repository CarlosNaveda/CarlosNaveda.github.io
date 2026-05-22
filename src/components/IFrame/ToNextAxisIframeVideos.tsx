import IframeVideos from "./IframeVideosType";
import { useState } from "react";
import Image from "next/image";

const ToNextAxisIframeVideos = ({video}: {video: IframeVideos}) => {
    
    const [videoActive, setVideoActive] = useState<string | null>(null);
    const videoID = video.source.split('/embed/')[1];
    
    return (
        <>  
            {/* Últimos videos de ToNextAxis los mostraré en fotos */}
            <div className="toNextAxis-last-videos w-full max-w-3xl aspect-video cursor-pointer flex flex-col items-center justify-center gap-2" onClick={() => setVideoActive(video.source)}>                
                <h3 className="text-center items-center text-[10px] md:text-base h-auto w-full text-color-white font-bold bg-gradient-to-t from-black/70 bg-zinc-900/60 to-transparent rounded-xl">📽️ {video.title}</h3>
                <Image
                src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
                alt={`Thumbnail del video ${video.title}`}                                
                width={640}
                height={360}                
                />                   
            </div>
            

            {/* Video seleccionado */}
            {videoActive && (
              <div className="toNextAxis-video-modal">
                <div className="toNextAxis-video-overlay" onClick={() => setVideoActive(null)}/>
                <iframe className="toNextAxis-video-selected w-full max-w-3xl aspect-video" src={`${videoActive}?autoplay=1&playsinline=1`} allow="autoplay" allowFullScreen>
                </iframe>            
             </div>       
            )}            
        </>
    )
}

export default ToNextAxisIframeVideos;