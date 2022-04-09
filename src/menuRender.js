import React from "react";
import ItemsRender from "./ItemsRender";

const MenuRender = (props) => {
    const meals = Object.keys(props.menu);
    // could not figure out how to loop the return
    return (
        <>
        <p className="mealName"> Breakfast </p>
        <ItemsRender key={0} meal={'Breakfast'} items={props.menu.breakfast} isVeg={props.isVeg}/>
        <p className="mealName"> Lunch </p>
        <ItemsRender key={1} meal={'Lunch'} items={props.menu.lunch} isVeg={props.isVeg}/>
        <p className="mealName"> Dinner </p>
        <ItemsRender key={2} meal={'Dinner'} items={props.menu.dinner} isVeg={props.isVeg}/>
        </>
    )
}
export default MenuRender;