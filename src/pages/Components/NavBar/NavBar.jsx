import styles from "./navBar.module.css";
import { Link } from "wouter";

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<Link href="/">Homepage</Link>
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/signin">Sign In</Link>
			<Link href="/signup">Sign Up</Link>
			<Link href="/about">About</Link>
		</nav>
	);
}
