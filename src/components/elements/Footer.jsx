import React from "react";
import {Link} from "react-router";

class Footer extends React.Component{
	render(){
		return(
					<footer className="footer">
						<div className="container">
							<div className="row">
								<div className="col-md-12 m-x-auto">
									<h4 className="footer-brand">B<sup>4</sup>R</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">
									<ul className="nav nav-pills nav-stacked">
									  <li className="nav-item">
									    <Link className="nav-item nav-link active" to="/"> Home</Link>
									  </li>
									  <li className="nav-item">
									    <Link className="nav-item nav-link" to="about"> About</Link>
									  </li>
									  <li className="nav-item">
									    <Link className="nav-item nav-link" to="/"> Features</Link>
									  </li>
									  <li className="nav-item">
									    <Link className="nav-item nav-link" to="/"> Link</Link>
									  </li>
									  <li className="nav-item">
									    <Link className="nav-item nav-link" to="contact"> Contact</Link>
									  </li>
									</ul>
								</div>
								<div className="col-md-4">
									<h4><i className="fa fa-facebook-square" aria-hidden="true"></i></h4>
									<h4><i className="fa fa-twitter-square" aria-hidden="true"></i></h4>
									<h4><i className="fa fa-snapchat-square" aria-hidden="true"></i></h4>
									<h4><i className="fa fa-linkedin-square" aria-hidden="true"></i></h4>
									<h4><i className="fa fa-reddit-square" aria-hidden="true"></i></h4>								
								</div>
								<div className="col-md-4">
									<address>
									  <strong>shahcreative.com</strong><br/>
									  1234 Anywhere Street, Suite 100<br/>
									  New York, NY 94103<br/>
									  <abbr title="Phone">P:</abbr> (123) 456-7890
									</address>

									<address>
									  <strong>B4R</strong><br/>
									  <a href="mailto:#">name@mail.com</a>
									</address>
								</div>
							</div>
						</div>
					</footer>
		)
	}
}

export default Footer