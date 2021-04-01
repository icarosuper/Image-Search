import './styles/ImageBoard.css';
import ImageCard from "./ImageCard";

const ImageBoard = (props) => {
	return (
		<>
			<h2>{props.pictures.length} resultados</h2>
			<div className='image-list'>
				{props.pictures.map(image =>
					<ImageCard key={image.id} image={image}/>
				)}
			</div>
		</>
	)
}

export default ImageBoard;
