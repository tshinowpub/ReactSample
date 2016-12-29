import React from 'react';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <dl>
                <dt>{video.snippet.title}</dt>
                <dd>
                    <img src={video.snippet.thumbnails.medium.url} />
                </dd>
            </dl>
        );
    });

    return (
        <div>{videoItems}</div>
    );

};

export default VideoList;
