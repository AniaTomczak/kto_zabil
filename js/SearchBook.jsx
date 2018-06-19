import React from "react";
import Books from "./Books.jsx";

class SearchBook extends React.Component{
    render(){
        return(
            <section>
                <div className="search_book">
                    <input type="text" placeholder="Podaj tytuł książki"/>
                    <Books/>
                        <div className="search_book_el">
                            <p>Ofiara została zamordowana przez:</p>
            </div>
                </div>
            </section>
        )
    }

}

export default SearchBook