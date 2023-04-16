import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
	const { imageURL, name } = category;

	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageURL})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{name}</h2>
				<p>shop now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
