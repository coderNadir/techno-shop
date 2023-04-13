import { useContext } from 'react';

import './checkout-card.styles.scss';

import { CartContext } from '../contexts/CartContext';

const CheckoutCard = ({ item }) => {
	const { decrementItemQuantity, incrementItemQuantity, deleteItemFromCart } =
		useContext(CartContext);

	const { imageUrl, name, price, quantity } = item;

	const decrement = () => decrementItemQuantity(item);
	const increment = () => incrementItemQuantity(item);
	const remove = () => deleteItemFromCart(item);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decrement}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increment}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={remove}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutCard;
