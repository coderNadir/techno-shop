import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';
import { signUp } from '../../utils/db/database.utils';

const SignUpForm = () => {
	const defaultFormMessage = {
		classMessage: '',
		message: '',
	};
	const [formMessage, setFormMessage] = useState(defaultFormMessage);

	const defaultSignUpForm = {
		display_name: '',
		email: '',
		password: '',
		password_confirm: '',
	};

	const [formFields, setFormFields] = useState(defaultSignUpForm);
	const { display_name, email, password, password_confirm } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signUp(formFields);
			setFormMessage({
				classMessage: 'success',
				message: 'success, account created!',
			});
		} catch (err) {
			console.log('ERROR: ', err);
			const { response } = err;
			setFormMessage({
				classMessage: 'error',
				message: response.data.message,
			});
		}
	};

	return (
		<div className="sign-up-container">
			<h2>I don't have an account</h2>
			{!formMessage.message.length ? (
				<span>Sign up with your email and password</span>
			) : (
				<span className={formMessage.classMessage}>
					{formMessage.message}
				</span>
			)}
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					name="display_name"
					onChange={handleChange}
					value={display_name}
				/>

				<FormInput
					label="Email"
					type="email"
					required
					name="email"
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					name="password"
					onChange={handleChange}
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					name="password_confirm"
					onChange={handleChange}
					value={password_confirm}
				/>

				<Button type="submit">sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
