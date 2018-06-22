import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container_footer">
                    <a target="_blank" href="https://www.linkedin.com/in/anna-tomczak-1b0991166/"><img src="./../images/in.png" alt="linkedin" /></a>
                    <a target="_blank" href="https://github.com/AniaTomczak"><img src="./../images/github.png" alt="Github" /></a>
                    <a target="_blank" href="https://www.facebook.com/abartlewicz"><img src="./../images/fb.png" alt="Facebook" /></a>
                    <a target="_blank" href="https://twitter.com/Nusiolek"><img src="./../images/twitter.png" alt="Twitter" /></a>
                    <a target="_blank" href="https://www.instagram.com/nusiolek/"><img src="./../images/insta.png" alt="Instagram" /></a>
                </div>
            </footer>
        )
    }
}

export default Footer