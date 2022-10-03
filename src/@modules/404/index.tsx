import Link from "next/link";
import React from "react";

function index() {
	return (
		<div className="not-found-page">
			<div className="container">
				<div className="row text-center">
					<h2>Opps!</h2>
					<h6>404 - page not found</h6>
					<div className="description">
						<p className="m-auto">
							The page you are looking for might have been removed had its name
							changed or is temporarily unavailable.
						</p>
					</div>
					<div className="go-home-btn">
						<Link href="/">
							<a>Go to homepage</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default index;
