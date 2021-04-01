import {Component} from 'react';
import SearchBar from "./SearchBar";
import ImageBoard from "./ImageBoard";
import {searchPictures} from "../api/unsplash";

class App extends Component {
	state = {pictures: []};

	handleSubmit = async term => {
		const res = await searchPictures(term);
		this.setState({pictures: res.data.results});
	}

	render() {
		return (
			<div className='ui container mt-3'>
				<SearchBar onSubmit={this.handleSubmit}/>
				<ImageBoard pictures={this.state.pictures}/>
			</div>
		)
	}
}

export default App;
