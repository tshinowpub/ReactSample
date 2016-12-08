import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA38kGHQbfmXWTCgLfhBTzCj6LbeECyHEk';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.searchVideos('music');
    }

    searchVideos(term)
    {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        return (
            <div>{console.log(this.state.videos)}</div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
