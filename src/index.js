import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'YOUR_API_KEY'

// api call
YTSearch({key: API_KEY, term: 'amg golf'}, function(data) {
	console.log();
});

// Create a new component. This component should produce 
// some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('amg golf');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term},(videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
	
}


// take this component's genreated HTML and put it
// on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));
