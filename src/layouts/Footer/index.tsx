import React from "react";

export default function index() {
	return (
		<footer className="bg-light text-center text-lg-start">
			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				&copy; 2020 Copyright:{" "}
				<a className="text-dark" href="#">
					Nextjs Scaffolding
				</a>
			</div>
		</footer>
	);
}
