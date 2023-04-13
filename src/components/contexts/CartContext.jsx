import { createContext, useEffect, useState } from 'react';

// ** helper methods
const addCartItem = (cartItems, productToAdd) => {
	const existingItem = cartItems.find((item) => item.id === productToAdd.id);
	if (existingItem) {
		return cartItems.map((item) =>
			item.id === productToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementQuantity = (cartItems, productToIncrementQuantity) => {
	return cartItems.map((item) => {
		if (item.id === productToIncrementQuantity.id) {
			if (item.quantity === 1) return item;
			item.quantity = item.quantity - 1;
			return item;
		}
		return item;
	});
};

const deleteItem = (cartItems, productToDelete) => {
	// const itemIndex = cartItems.findIndex(
	// 	(item) => item.id === productToDelete.id
	// );
	// if (`${itemIndex}`.startsWith('-')) return cartItems;
	// let newCarItems = [...cartItems];
	// newCarItems.splice(itemIndex, 1);
	// return newCarItems;
	return cartItems.filter((item) => item.id !== productToDelete.id);
};

// ** Context

export const CartContext = createContext({
	isCartoepn: false,
	setCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	setCartCount: () => {},
	decrementItemQuantity: () => {},
	incrementItemQuantity: () => {},
	cartTotal: 0,
	deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, currItem) => total + currItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		// loop through cartItems
		const newTotal = cartItems.reduce((total, currItem) => {
			// in each loop: total = total = (price * quantity)
			return (total = total + currItem.price * currItem.quantity);
		}, 0);
		// set total
		setCartTotal(newTotal);
	}, [cartItems]);

	const addItemToCart = (productToAdd) =>
		setCartItems(addCartItem(cartItems, productToAdd));

	const decrementItemQuantity = (productToDecrement) =>
		setCartItems(decrementQuantity(cartItems, productToDecrement));

	const incrementItemQuantity = (productToDecrement) =>
		setCartItems(addCartItem(cartItems, productToDecrement));

	const deleteItemFromCart = (productToDelete) =>
		setCartItems(deleteItem(cartItems, productToDelete));

	const value = {
		isCartOpen,
		setCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		decrementItemQuantity,
		incrementItemQuantity,
		cartTotal,
		deleteItemFromCart,
	};

	return (
		<CartContext.Provider value={value}> {children} </CartContext.Provider>
	);
};
