import { Meta } from "layouts/Meta";
import { Main } from "templates/Main";
const Home = () => {
	return (
		<Main
			className="home-page-sec"
			meta={<Meta title="Home Page" description="Home Page" />}
		>
			<h1>I'm Home page</h1>
		</Main>
	);
};

export default Home;
