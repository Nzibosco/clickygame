import React from "react";
import NavBar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Main from "./components/main";
import images from "./images";
import Footer from "./components/footer";

function App() {
    return (
        <div className="container">
            <NavBar />
            <Jumbotron />
            <div className="row">
                <div className="col-ms-12">
                    {images.map(image => (
                        <Main key={image.id} src={image.src} id={image.id} />
                    ))}
                </div>
            </div>
            <br></br>
            <Footer />


        </div>

    );
};
export default App;
