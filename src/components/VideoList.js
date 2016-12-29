import React from 'react';

const VideoList = (props) => {
    const {videos, onVideoSelect} = props;
    const videoItems = videos.map((video, index) => {
        return (
            <dl key={index}>
                <dt>{video.snippet.title}</dt>
                <dd>
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        onClick={() => onVideoSelect(video)} />
                </dd>
            </dl>
        );
    });

    return (
        <div className='col-md-4'>{videoItems}</div>
    );

};

export default VideoList;
