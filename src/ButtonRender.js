import React from "react";

const ButtonRender = (props) => {
    return (
        <button onClick={() => props.setIsVeg(!props.isVeg)}> {(props.isVeg ? "Show all" : "Show only Vegetarian")} </button>
    )
};

export default ButtonRender;