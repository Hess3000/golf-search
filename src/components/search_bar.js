import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(prop) {
		super(prop);
			
		this.state = { term: 'search'};
	}

	render() {
		return (
			<div>
				<input value={this.state.term}
					onChange={event => this.setState({ term: event.target.value})} />
				
			</div>
			);
	}
}

export default SearchBar;