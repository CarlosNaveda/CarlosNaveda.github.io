import IframeVideos from "./IframeVideos";


const ToNextAxisIframeVideos = ({video}: {video: IframeVideos}) => {
    return (
        <iframe className="w-full max-w-3xl aspect-video" src={video.source} title={video.title}></iframe>                
    )
}

export default ToNextAxisIframeVideos;