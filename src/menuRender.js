import React from "react";
const MenuRender = (props) => {
    const meals = Object.keys(props.menu);
    return (
        <>
        <p>{meals[0]}</p>
        <p>{meals[1]}</p>
        <p>{meals[2]}</p>
        </>
    )
}
export default MenuRender;