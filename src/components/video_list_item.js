import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const desc = video.snippet.title;
    return (
        <li onClick={()=> onVideoSelect(video)}>
            <img src={imageUrl} />
            <span>{desc}</span>
        </li>
    )
}

export default VideoListItem;