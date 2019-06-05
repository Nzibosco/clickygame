import React from "react";

const styles = {
    imageStyle: {
        width: 250,
        height: 250
    },
    mainStyle: {
        float: "left"
    }
};

function Main (props) {
    return (
        <div className = "image" style = {styles.mainStyle}>
           <a href = "no link"><img className = "my-images" src = {props.src} alt = {props.id} style = {styles.imageStyle}></img></a>
        </div>
    )
} ;

export default Main;