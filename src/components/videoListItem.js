import React from "react";
import VideoDetail from "./videoListItem";

const VideoListItem = ({video, onVideoSelect}) => {
    const videoUrl = video.snippet.thumbnails.default.url
    const videoTitle = video.snippet.title 
    return (
        <li onClick={ ()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                    <h6>{videoTitle}</h6>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;