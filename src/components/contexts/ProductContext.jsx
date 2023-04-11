import { createContext, useState } from 'react';
import PRODUCTS_DATA from '../../shop-data';

export const ProductContext = createContext({
	products: [],
});

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS_DATA);
	const value = { products };

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
