import React from "react";
import Meta from "../@components/Meta/Meta";

function Head() {
	const meta = {
		title: "Title",
		description: "Description",
	};
	return <Meta meta={meta} />;
}

export default Head;
