import { Fragment } from 'react';
import SignUp from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	return (
		<Fragment>
			<h1>Sign In Page</h1>
			<div>
				<button>Sign in with goole</button>
			</div>
			<SignUp />
		</Fragment>
	);
};

export default SignIn;
