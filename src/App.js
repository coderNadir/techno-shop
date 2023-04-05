import './categories.styles.scss';
import CategoriesMenu from './components/categories-menu/categories-menu.component';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'laptops',
			imageURL: 'https://i.ibb.co/2SNC3JM/laptops.png',
		},
		{
			id: 2,
			title: 'montiors',
			imageURL: 'https://i.ibb.co/yYjMJBQ/monitors.png',
		},
		{
			id: 3,
			title: 'keyboards',
			imageURL: 'https://i.ibb.co/YfNbcJP/keyboards.png',
		},
		{
			id: 4,
			title: 'desks',
			imageURL: 'https://i.ibb.co/GFX5hBJ/desks.png',
		},
		{
			id: 5,
			title: 'accessories',
			imageURL: 'https://i.ibb.co/KFtV8vZ/accessories.png',
		},
	];

	return <CategoriesMenu categories={categories} />;
};

export default App;
