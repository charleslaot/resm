import Dashboard from "../Dashboard";
import Menus from "../Menus/Menus";
import { Route, Switch } from "wouter";

const routes = () => {
	return (
		<Switch>
			<Route path="/" component={Dashboard} />
			<Route path="/menus" component={Menus} />
		</Switch>
	);
};

export default routes;
