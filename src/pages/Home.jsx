import React from "react";

class Home extends React.Component{
	render(){
		return(
			<section>
				<div className="jumbotron jumbotron-fluid dark">
					  <div className="container">
					    <h1 className="display-1">Bootstrap 4 + React!</h1>
					    <h4 className="lead">A simple, customizable SPA (single page application) template</h4>
					    <h4>Available now on GitHub</h4>
					  	<h4><a href="#" className="btn btn-outline-primary"><i className="fa fa-github" aria-hidden="true"></i> Download Template</a></h4>
					  </div>
				</div>

				<div className="container-fluid light">
					<div className="container content">
						<div className="col-md-4">
							<div className="card card-override card-block">
								<h2 className="icon-holder"><i className="fa fa-desktop" aria-hidden="true"></i></h2>
								<h4 className="card-title"> Clean Design</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="btn btn-outline-primary card-link"><i className="fa fa-desktop" aria-hidden="true"></i> Learn More</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-override card-block">
								<h2 className="icon-holder"><i className="fa fa-users" aria-hidden="true"></i></h2>
								<h4 className="card-title"> Easy to use</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="btn btn-outline-primary card-link"><i className="fa fa-users" aria-hidden="true"></i> Learn More</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-override card-block">
								<h2 className="icon-holder"><i className="fa fa-github" aria-hidden="true"></i></h2>
								<h4 className="card-title"> Free on Github</h4>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								<a href="#" className="btn btn-outline-primary card-link"><i className="fa fa-github" aria-hidden="true"></i> Learn More</a>
							</div>
						</div>
					</div>	
				</div>

				<div className="container-fluid dark">
					<div className="container content">
						<div className="row">
							<div className="col-md-6">
								<div className="card card-outline-primary text-xs-center">
								  <div className="card-block">
								    <blockquote className="card-blockquote">
					    			<div className="img-holder"></div>
								      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								      <footer>Some Other Developer <cite title="Source Title">-World Wide Web</cite></footer>
								    </blockquote>
								  </div>
								</div>
							</div>
							<div className="col-md-6">
							  	<blockquote className="blockquote-reverse">
								  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
								   	totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
						    		sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						     		consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."</p>
								  <footer>Some Developer <cite>-Internet</cite></footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid light">
					<div className="container content">
						<div className="row">
							<div className="col-md-12">
								<div className="card-deck-wrapper">
								  <div className="card-deck">
								    <div className="card card-outline-primary">
								      <div className="card-block">
								        <h4 className="card-title">ES2015 Syntax</h4>
								        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								        Integer posuere erat a ante. Duis aute irure dolor in reprehenderit in voluptate 
								        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
								        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
								      </div>
								    </div>
								    <div className="card card-outline-primary">
								      <div className="card-block">
								        <h4 className="card-title">WebPack Powered</h4>
								        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								        Integer posuere erat a ante. Duis aute irure dolor in reprehenderit in voluptate 
								        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
								        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
								      </div>
								    </div>
								    <div className="card card-outline-primary">
								      <div className="card-block">
								        <h4 className="card-title">React Router</h4>
								        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								        Integer posuere erat a ante. Duis aute irure dolor in reprehenderit in voluptate 
								        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
								        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
								      </div>
								    </div>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		)
	}
}

export default Home