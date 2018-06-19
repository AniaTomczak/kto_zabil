import React from "react";
import Header from "./Header.jsx";
import FrontPage from "./FrontPage.jsx";
import SearchBook from "./SearchBook.jsx";
import SearchAuthor from "./SearchAuthor.jsx";
import Footer from "./Footer.jsx";


class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <FrontPage/>
                <SearchBook/>
                <SearchAuthor/>
                <Footer/>
        </div>
        )
    }
}

export default App