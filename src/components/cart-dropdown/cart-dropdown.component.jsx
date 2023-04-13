import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../cart-item/cart-item.component';
import { Link, useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = () => navigate('checkout');

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((cartItem) => {
					return <CartItem key={cartItem.id} cartItem={cartItem} />;
				})}
			</div>
			<Button onClick={goToCheckout}>checkout</Button>
		</div>
	);
};

export default CartDropdown;
