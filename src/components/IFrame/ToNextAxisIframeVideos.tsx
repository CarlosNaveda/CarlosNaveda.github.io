import iframeVideos from "./iframeVideos";


const ToNextAxisIframeVideos = ({video}: {video: iframeVideos}) => {
    return (
        <iframe className="w-full max-w-3xl aspect-video" src={video.source} title={video.title}></iframe>                
    )
}

export default ToNextAxisIframeVideos;