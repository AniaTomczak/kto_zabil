import React from "react";

import Book from './Book.jsx'

class Books extends React.Component{
    render(){
        return(
            <div className="books">
                <Book/>
                <Book/>
                <Book/><Book/>
                <Book/>
                <Book/><Book/>
                <Book/>
                <Book/><Book/>
                <Book/>
                <Book/><Book/>
                <Book/>
                <Book/>
            </div>
        )
    }

}

export default Books