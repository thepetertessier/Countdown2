import React from "react";

const ItemsRender = (props) => {
    const itemsArray = props.items.slice();
    const itemsFiltered = [];
    for (let i = 0; i < itemsArray.length; i++) {
        if (!props.isVeg || itemsArray[i].vegetarian) {
            itemsFiltered.push(itemsArray[i])
        }
    };
    return (
        // <p className="item"> {itemsFiltered.map((item) => item.food, item.price)} </p>
        // How do I loop the code below? It also doesn't scale to longer lists
        <>
        <p className="item"> {itemsFiltered[0] ? itemsFiltered[0].food : ''} (${itemsFiltered[0] ? itemsFiltered[0].price : ''}) </p>
        <p className="item"> {itemsFiltered[1] ? itemsFiltered[1].food : ''} (${itemsFiltered[1] ? itemsFiltered[1].price : ''}) </p>
        <p className="item"> {itemsFiltered[2] ? itemsFiltered[2].food : ''} (${itemsFiltered[2] ? itemsFiltered[2].price : ''}) </p>
        </>
    )
};

export default ItemsRender;