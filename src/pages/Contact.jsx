import React from "react";

class Contact extends React.Component{
	render(){
		return(
			<section>
				<div className="container-fluid">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2>Contact</h2>
								<hr/>
							</div>
						</div>

						<div className="container">
						  <form>
						  	<div className="formContainer col-md-8">

							    <div className="form-group row">
							      <label className="col-md-12">First Name</label>
							      <div className="col-md-12">
							        <input type="text" className="form-control" id="fName" placeholder="First Name" />
							      </div>
						      	</div>

						      	<div className="form-group row">
							      <label className="col-md-12 col-form-label">Last Name</label>
							      <div className="col-md-12">
							        <input type="text" className="form-control" id="lName" placeholder="Last Name" />
							      </div>
							    </div>

							    <div className="form-group row">
							      <label className="col-md-12 col-form-label">Email</label>
							      <div className="col-md-12">
							        <input type="email" className="form-control" id="email" placeholder="Email Address" />
							      </div>
							    </div>

							    <div className="form-group row">
							      <label className="col-md-12 col-form-label">Telephone</label>
							      <div className="col-md-12">
							        <input type="phone" className="form-control" id="phone" placeholder="Telephone Number" />
							      </div>
							    </div>

							    <div className="form-group row">
							      <label className="col-md-12 col-form-label">Comments</label>
							      <div className="col-md-12">
							        <textarea rows="4" className="form-control" id="comments"></textarea>
							      </div>
							    </div>

							    <button type="submit" className="btn btn-primary"><i className="fa fa-envelope" aria-hidden="true"></i> Submit Form</button>
						    </div>
						    
						  </form>
						</div>

					</div>
				</div>
			</section>
		)
	}
}

export default Contact