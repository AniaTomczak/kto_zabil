import React from "react";

class FrontPage extends React.Component{

    constructor (props) {
        super(props);

        this.state = {
            text: "Czy na pewno chcesz wiedzieć...."
        }
    }

    componentDidMount() {
        this.id = setTimeout(() => {
            this.setState({
                text: 'Kto zabił?'
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
                        <p>{ this.state.text }</p>
                    </div>
                </div>
            </section>
        )
    }

}

export default FrontPage

