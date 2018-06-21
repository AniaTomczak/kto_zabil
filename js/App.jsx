import React from "react";
import Header from "./Header.jsx";
import FrontPage from "./FrontPage.jsx";
import SearchBook from "./SearchBook.jsx";
import Footer from "./Footer.jsx";


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            showCover: false
        }
    }

    onClick = (url, killer) => {
        this.setState({
            showCover: true
        })
        console.log(url);
        console.log(killer);
        console.log("onclick");
    };

    render(){

        return (
            <div>
                {/*{this.state.showCover? <Nowy komponentt/>: null}*/}
                <Header/>
                <FrontPage/>
                <SearchBook onClick={this.onClick}/>
                <Footer/>
        </div>
        )
    }
}

export default App