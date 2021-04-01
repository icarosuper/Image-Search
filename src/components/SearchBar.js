import {Component} from 'react';

class SearchBar extends Component {
	state = {term: ''};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render(){
		return (
			<div className='ui segment' style={{backgroundColor:'aliceblue'}}>
				<form className='ui form' onSubmit={this.handleSubmit}>
					<div className='field'>
						<label>Image search</label>
						<input type='text' placeholder='Search for an image' onChange={e => this.setState({term: e.target.value})}/>
					</div>
					<div className='field'>
						<h1>Procurando {this.state.term}</h1>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;
