import { useContext, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-styles.scss';
import { UserContext } from '../contexts/UserContext';
import { signIn } from '../../utils/db/db-auth.utils';

const SignInForm = () => {
	const defaultFormMessage = {
		message: '',
		classMessage: '',
	};
	const [formMessage, setFormMessage] = useState(defaultFormMessage);

	const defaultFormFields = {
		email: '',
		password: '',
	};
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signIn(formFields);
			setFormMessage({
				message: 'you logged in successfully',
				classMessage: 'success',
			});
		} catch (error) {
			const { response } = error;
			setFormMessage({
				message: response.data.message,
				classMessage: 'error',
			});
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account</h2>
			{!formMessage.message.length ? (
				<span>Sign in with email and password</span>
			) : (
				<span className={formMessage.classMessage}>
					{formMessage.message}
				</span>
			)}
			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
					required
				/>
				<FormInput
					label="password"
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
					// required
				/>
				<div className="buttons-container">
					<Button type="submit">sign in</Button>
					<Button buttonType="google" onClick={() => {}}>
						google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
