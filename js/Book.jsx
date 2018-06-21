import React from "react";

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
           <div className="book">
               <img onClick={() => this.props.onClick(this.props.url, this.props.killer)} src={this.props.url}/>
           </div>
        )
    }

}

export default Book