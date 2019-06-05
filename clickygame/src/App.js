import React, {Component} from "react";
import NavBar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Main from "./components/main";
import images from "./images";
import Footer from "./components/footer";

class App extends Component {
    // set the counter when an image is clicked
    state= {
        score: 0
    };

    increaseScore = () => {
        this.setState({score: this.state.score +1});
    }
    
    render () {
    return (
        <div className="container">
            <NavBar score = {this.state.score}/>
            <Jumbotron />
            <div className="row">
                <div className="col-ms-12">
                    {images.map(image => (
                        <Main key={image.id} src={image.src} id={image.id} increaseScore = {this.increaseScore}/>
                    ))}
                </div>
            </div>
            <br></br>
            <Footer />


        </div>

    );
}
};
export default App;
