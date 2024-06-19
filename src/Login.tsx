import React from "react";
import './Login.css'; // Assuming you create a CSS file named Login.css

interface loginState {
    email: string;
    password: string;
}

class Login extends React.Component<{}, loginState>{
    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
    }

    handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(this.state)
        const { email, password } = this.state || {};
        console.log(email, password);
    }

    handleEmailChange = (event: any) => {
        this.setState({ email: event.target.value });
    }

    handlePwdChange = (event: any) => {
        this.setState({ password: event.target.value });
    }
    
    render(): React.ReactNode {
        return (  
            <>
            <div className="login-container">
            <h1 className="login-title">Login Form</h1>
                <label htmlFor="email" className="login-label"> Email </label>
                <input type="email" name="email" onChange={this.handleEmailChange} className="login-input" /> <br />
                <label htmlFor="password" className="login-label"> Password </label>
                <input type="password" name="password" id="" onChange={this.handlePwdChange} className="login-input" /> <br />
                <input type="submit" value="Login" onClick={this.handleSubmit} className="login-button" />
            </div>
        </>
        )
    }

}

export default Login;