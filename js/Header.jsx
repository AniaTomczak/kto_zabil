import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div></div>
                <div className="container">
                    <button onClick={this.props.login} type="button" className="btn">Zaloguj</button>
                </div>
            </header>
        )
    }

}

export default Header