import React from "react";
import Books from "./Books.jsx";

class SearchBook extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    onKeyPressed = event => {
        if (event.target.value.length < 3) {
            this.setState({
                books: []
            });
            return;
        }
        fetch("http://localhost:8000/api/books?search=" + event.target.value)
            .then(r => r.json())
            .then( data => {
                this.setState({
                    books: data
                });
            });
    };

    onFocus = () => {
        if (!this.state.alreadyFocused) {
            this.setState({
                alreadyFocused: true
            });
            this.el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render(){
        return(
            <section>
                <div className="search_book">
                    <input onFocus={ this.onFocus }  onChange={this.onKeyPressed} type="text" placeholder="Podaj tytuł książki lub autora"/>
                    <Books onClick={this.props.onClick} books={this.state.books}/>
                    <div ref={el => { this.el = el; }} className="search_book_el">
                </div>
                </div>
            </section>
        )
    }

}

export default SearchBook