import React from "react";
import Meta from "../../@components/Meta/Meta";

function Head() {
	const meta = {
		title: "About us",
		description: "About us Description",
	};
	return <Meta meta={meta} />;
}

export default Head;
