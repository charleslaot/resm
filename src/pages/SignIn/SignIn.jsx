import { useState } from "react";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/signin`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				console.log("Signed in");
				// window.location.href = "/dashboard";
			} else {
				console.error("Sign-in failed:", response);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h2 style={{ color: "black" }}>Sign In</h2>
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Sign In</button>
			</form>
		</main>
	);
}
