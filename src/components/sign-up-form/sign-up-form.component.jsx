import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const SignUp = () => {
	const defaultSignUpForm = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultSignUpForm);
	const { displayName, email, password, confirmPassword } = formFields;

	console.log({ formFields });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// handle submit
	};

	return (
		<div className="sign-up-container">
			<h2>I don't have an account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					name="displayName"
					onChange={handleChange}
					value={displayName}
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
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
				/>

				<Button type="submit">sign up</Button>
			</form>
		</div>
	);
};

export default SignUp;
