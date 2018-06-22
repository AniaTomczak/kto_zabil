import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login_in">
                    <div className="login_input">
                        <input className="input_login" type="text" placeholder="Login"/>
                        <input className="input_login" type="text" placeholder="Hasło"/>
                    </div>
                    <div className="login_button">
                        <input className="button_login" type="submit" value="Zaloguj"/>
                        <input className="button_login" type="submit" onClick={this.props.close} value="Anuluj"/>
                    </div>
                </div>
             </div>)
    }

}

export default Login;