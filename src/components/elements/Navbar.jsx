import React from "react";
import {Link} from "react-router";

class Navbar extends React.Component{
	render(){
		return(
				<nav className="navbar navbar-fixed-top navbar-dark bg-primary">
					<div className="container">
						<Link className="navbar-brand" to="/">B<sup>4</sup>R</Link>
						<div className="collapse navbar-toggleable-xs pull-right" id="exCollapsingNavbar">
							<ul className="nav navbar-nav">
								<li className="nav-item"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
								<li className="nav-item"><Link className="nav-link" to="about"> About</Link></li>
								<li className="nav-item"><Link className="nav-link" to="contact"> Contact</Link></li>
							</ul>
						</div>
						<button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">&#9776;</button>
					</div>
				</nav>

		)
	}
}

export default Navbar
