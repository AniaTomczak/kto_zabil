import React from "react";

import Book from './Book.jsx'

class Books extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const listItems = this.props.books.map((d) => <Book onClick={this.props.onClick} url={d.url} killer={d.killer} />);
        return(
            <div className="books">
                {listItems}
            </div>
        )
    }

}

export default Books