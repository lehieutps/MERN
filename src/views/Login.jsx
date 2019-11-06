import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange(event) {
    var value = event.target.value;
 
    this.setState({
      email: value
    });
  }

  handlePasswordChange(event) {
    var value = event.target.value;
 
    this.setState({
      password: value
    });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <div className="container">
            <div className="col-md-10">
                <form onSubmit={event => this.handleSubmitForm(event)}>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Mail nè..." value={this.state.email} 
                      onChange={event => this.handleEmailChange(event)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" placeholder="Password nè..." value={this.state.password} 
                      onChange={event => this.handleEmailChange(event)}/>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary col-md-12">Dô nè !</button>
                  </form>
            </div>
        </div>
    );
  }
}
export default Login;
