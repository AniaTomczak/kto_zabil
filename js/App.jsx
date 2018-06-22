import React from "react";
import Header from "./Header.jsx";
import FrontPage from "./FrontPage.jsx";
import SearchBook from "./SearchBook.jsx";
import Footer from "./Footer.jsx";
import Opacity from "./Opacity.jsx"
import Login from "./Login.jsx"


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            showCover: false
        }
    }

    onClick = (url, killer) => {
        this.setState({
            showCover: true,
            killer: killer,
            url: url

        });
    };

    login = () => {
        this.setState({
            showLogin: true
        });
    };

    closeLogin = () => {
        this.setState({
            showLogin: false
        });
    };

    hideComponent = () => {
        this.setState({
            showCover: false,
            killer: null,
            url: null
        })
    };

    render(){

        return (
            <div>
                {this.state.showCover? <Opacity hideComponent={this.hideComponent} url={this.state.url} killer={this.state.killer}/>: null}
                {this.state.showLogin? <Login close={this.closeLogin} />: null}
                <Header login={this.login}/>
                <FrontPage/>
                <SearchBook onClick={this.onClick}/>
                <Footer/>
             </div>
        )
    }
}

export default App