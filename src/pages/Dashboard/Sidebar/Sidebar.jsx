import styles from "./sidebar.module.css";
import { Link } from "wouter";

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h2>Dashboard</h2>
			<Link href="/dashboard/">
				<button>Home</button>
			</Link>
			<Link href="/dashboard/menus">
				<button>Menus</button>
			</Link>
			<Link href="/dashboard/analytics">
				<button>Analytics</button>
			</Link>
			<Link href="/dashboard/settings">
				<button>Settings</button>
			</Link>
			<Link href="/dashboard/profile">
				<button>Profile</button>
			</Link>
		</div>
	);
};

export default Sidebar;
