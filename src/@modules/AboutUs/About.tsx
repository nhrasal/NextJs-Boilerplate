import { Meta } from "layouts/Meta";
import { Main } from "templates/Main";

const About = () => {
	return (
		<Main
			className="aboutus-page-sec"
			meta={<Meta title="About us" description="All about us" />}
		>
			<h1>I'm About Page</h1>
		</Main>
	);
};

export default About;
