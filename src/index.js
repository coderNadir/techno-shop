import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';

import { UserProvider } from './components/contexts/UserContext';
import { ProductProvider } from './components/contexts/ProductContext';
import { CartProvider } from './components/contexts/CartContext';
import { CategoryProvider } from './components/contexts/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CategoryProvider>
				<UserProvider>
					<ProductProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</ProductProvider>
				</UserProvider>
			</CategoryProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
