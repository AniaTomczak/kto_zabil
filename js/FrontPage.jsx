import React from "react";

class FrontPage extends React.Component{

    constructor (props) {
        super(props);

        this.state = {
            text: "Czy na pewno chcesz wiedzieć....",
            style: {
                color: "white",
                textAlign: "center",
                fontSize: "5em",
                fontFamily: "'Josefin Sans', sans-serif"
            }
        }
    }

    componentDidMount() {
        this.id = setTimeout(() => {
            this.setState({
                text: 'Kto zabił?',
                style: {
                    color: "white",
                    textAlign: "center",
                    fontSize: "10em",
                    fontFamily: "'Josefin Sans', sans-serif"
                }
            })
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.id);
    }

    render(){
        return(
            <section className="front_page">
                <div className="title">
                    <div className="images">
                        <p style={this.state.style}>{ this.state.text }</p>
                    </div>
                </div>
            </section>
        )
    }

}

export default FrontPage

