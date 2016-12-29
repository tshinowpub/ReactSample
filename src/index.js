import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar.js';
import VideoDetail from './components/VideoDetail.js';
import VideoList from './components/VideoList.js';

const API_KEY = 'AIzaSyA38kGHQbfmXWTCgLfhBTzCj6LbeECyHEk';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('surfboard');
    }

    videoSearch(term)
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
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};
//<div>{console.log(this.state.videos)}</div>
ReactDOM.render(<App />, document.getElementById('app'));
