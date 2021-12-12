import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      username: "",
      password: "",
      error:""
    }

    handleOnChange = (e) => {
      let name = e.target.name;
      this.setState({
        [name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.username.length > 0 && this.state.password.length > 0) {
        this.setState({
            error: ""
        })
        this.props.handleLogin({username: this.state.username, passoword: this.state.password})
      }else{
        this.setState({
          error: "You need to fill in username and password"
        })
      }
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
              Password
              <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label> 
        </div>
        <div>
          {this.state.error}
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        </form>
      )
    };
  }
}

export default LoginForm;
