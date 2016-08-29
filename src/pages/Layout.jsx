import React from "react";
import Navbar from "../components/elements/Navbar.jsx";
import Footer from "../components/elements/Footer.jsx";

class Layout extends React.Component{

	render(){
		return(
			<section>
				<Navbar />
				{this.props.children}
				<Footer />
			</section>
		)
	}
}

export default Layout