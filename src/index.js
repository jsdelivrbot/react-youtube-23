import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyATMNiQnQFqnWnpW7BcJp7wU2jZ9biouVk';

class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            videos : [],
            selectedVideo: null
        }
        this.handleSearch('surfboards');
        
    }

    handleSearch(term) {
        YTSearch({
            key : API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const handleSearch = _.debounce((term) => {this.handleSearch(term)}, 300);

        return (
            <div>
                <SearchBar handleSearch={handleSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>  
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));