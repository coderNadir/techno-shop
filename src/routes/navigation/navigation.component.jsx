import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as TechnoShop } from '../../assets/logo/Logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss';
import { CartContext } from '../../components/contexts/CartContext';

const Navigation = () => {
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<div className="nav-container">
				<Link className="logo-container" to="/">
					<TechnoShop className="logo" />
				</Link>
				<div className="nav-links">
					<Link className="nav-link" to="shop">
						SHOP
					</Link>
					<Link className="nav-link" to="sign-in">
						SIGN IN
					</Link>
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
