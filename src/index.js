import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDdrRuUps7fUrAXmMZ1CmvQ_-RzY4dGOQE'

// Create a new component. This component should produce 
// some HTML
const App = function() {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


// take this component's genreated HTML and put it
// on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));