import React from "react";

class SearchAuthor extends React.Component{
    render(){
        return(
            <section>
                <div className="search_autor">
                    <input type="text" placeholder="Podaj autora"/>
                        <div className="autor_books"></div>
                </div>
            </section>
        )
    }

}

export default SearchAuthor