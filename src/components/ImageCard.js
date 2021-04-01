import {createRef, Component} from "react";

class ImageCard extends Component {
	constructor(props){
		super(props);
		this.imageRef = createRef();
		this.state = {spans: 0};
	}

	componentDidMount(){
		this.imageRef.current.addEventListener('load', () => {
			const height = this.imageRef.current.clientHeight;
			const spans = Math.ceil(height / 10 + 1);

			this.setState({spans})
		})
	}

	render() {
		const {urls, alt_description, id} = this.props.image;
		return (
			<div style={{gridRowEnd:`span ${this.state.spans}`}}>
				<img
					ref={this.imageRef}
					src={urls.small}
					alt={alt_description}
					key={id}
				/>
			</div>
		)
	}
}

export default ImageCard;
