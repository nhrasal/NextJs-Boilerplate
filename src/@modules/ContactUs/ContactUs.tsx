import { Meta } from "layouts/Meta";
import { Main } from "templates/Main";

const ContactUs = () => {
	return (
		<Main
			className="contact-page-sec"
			meta={
				<Meta
					title="Contact us | WebX"
					description="Contact with us - WebX Global Ltd."
				/>
			}
		>
			<h1>I'm Contact Page</h1>
		</Main>
	);
};

export default ContactUs;
