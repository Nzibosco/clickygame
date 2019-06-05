import React from "react";

// our jumbotron for game info

function Jumbotron () {
      return (
          <div className = "jumbotron text-center">
              <h1 className = "display-4">Clicky Game</h1>
              <p className= "lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
      )
};

export default Jumbotron;