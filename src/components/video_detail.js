import React from 'react';

const VideoDetail = ({video}) => {

if(!video) {
    return <div>Loading video!</div>;
}

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`
const desc = video.snippet.desc;

    return (
        <div>
            <iframe src={url}></iframe>
            <section>{desc}</section>
        </div>    
    )
}

export default VideoDetail;