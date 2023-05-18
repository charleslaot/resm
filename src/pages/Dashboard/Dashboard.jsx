import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Routes from "./Sidebar/routes";

const Dashboard = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<Routes />
		</div>
	);
};

export default Dashboard;
