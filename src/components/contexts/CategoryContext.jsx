import { createContext, useEffect, useState } from 'react';
import { fetchCategories } from '../../utils/db/db-category.utils';

export const CategoryContext = createContext({
	categories: [],
	setCategories: () => {},
});

export const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const fetchCategoriesList = async () => {
			const { data } = await fetchCategories();
			setCategories(data.data);
		};
		fetchCategoriesList();
	}, []);
	const value = { categories };

	return (
		<CategoryContext.Provider value={value}>
			{children}
		</CategoryContext.Provider>
	);
};
