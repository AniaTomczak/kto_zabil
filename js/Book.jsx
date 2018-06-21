import React from "react";

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: this.props.url
        }
    }


    render(){
        return(
           <div className="book">
               <img onClick={() => this.props.onClick(this.props.url, this.props.killer)} src={this.state.url}/>
           </div>
        )
    }

}

export default Book