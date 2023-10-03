import Navbar from "./Navbar";
import Footer from "./Footer";

const Template = (props) => {
	return (
		<div>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Template;