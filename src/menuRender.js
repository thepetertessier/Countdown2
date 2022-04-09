import React from "react";
import ItemsRender from "./ItemsRender";

const MenuRender = (props) => {
    const meals = Object.keys(props.menu);
    // could not figure out how to loop the return
    return (
        <>
        <p className="mealName"> Breakfast </p>
        <ItemsRender index={0} meal={'Breakfast'}/>
        <p className="mealName"> Lunch </p>
        <ItemsRender index={1} meal={'Lunch'}/>
        <p className="mealName"> Dinner </p>
        <ItemsRender index={2} meal={'Dinner'}/>
        </>
    )
}
export default MenuRender;