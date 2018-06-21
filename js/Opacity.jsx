import React from "react";

class Opacity extends React.Component{
    render(){
        return(
                <div>
                    <div className="opacity" onClick={this.props.hideComponent}>
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img src={this.props.url} className="front_item" />

                                </div>
                                <div className="back">
                                    <div className="back_item">
                                        <p>{this.props.killer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default Opacity