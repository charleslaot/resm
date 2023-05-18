import Homepage from "../../Homepage/Homepage";
import Dashboard from "../../Dashboard/Dashboard";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import About from "../../About/About";
import { Route, Switch } from "wouter";

const routes = () => {
	return (
		<Switch>
			<Route path="/" component={Homepage} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
			<Route path="/about" component={About} />
		</Switch>
	);
};

export default routes;
