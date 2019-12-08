import React, {Component, Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
	continue = e => {
		e.preventDefault();
		//Process
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title="Success" />
					<h1>Thank you for your submission</h1>
					<p>You will get a confirmation email.</p>
				</Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
