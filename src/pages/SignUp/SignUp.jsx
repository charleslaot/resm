import { useState } from "react";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}
		try {
			const response = await fetch("http://localhost:8080/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				const data = await response.json();
				console.log("Signed up:", data);
			} else {
				console.error("Sign-up failed:", response);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h2 style={{ color: "black" }}>Sign Up</h2>
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
				/>
				<button type="submit">Sign Up</button>
			</form>
		</main>
	);
}
