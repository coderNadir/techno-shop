import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { ReactComponent as TechnoShop } from '../../assets/logo/crown.svg';
import { ReactComponent as TechnoShop } from '../../assets/logo/Logo-removebg-preview.svg';

import './navigation.styles.scss';

const Navigation = () => {
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
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
