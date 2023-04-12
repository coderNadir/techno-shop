import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/logo/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartIcon = () => {
	const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);

	const toggleDrowdown = () => {
		setCartOpen(!isCartOpen);
	};

	return (
		<div className="cart-icon-container" onClick={toggleDrowdown}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
