import React, {Component} from 'react';
const axios = require('axios');

class Login extends Component 
{

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    axios.post('http://127.0.0.1:8000/auth/jwt/create/', {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    })
    .then(data => localStorage.setItem("JWTToken", data.data.access)
    ).catch(error => console.log(error))
  }

    register = event => {
    axios.post('http://127.0.0.1:8000/auth/users/', {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    })
    .then(data => console.log(data.token))
    .catch(error => console.log(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;     
    this.setState({credentials: cred});
  } 

  render()
  {
    return (
      <div>
        <h1>Login User Form</h1>

        <label>
          Username:
          <input type="text" name="username" 
          value={this.state.credentials.username} 
          onChange={this.inputChanged} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" 
          value={this.state.credentials.password} 
          onChange={this.inputChanged} />
        </label>
        <br/>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Login;
