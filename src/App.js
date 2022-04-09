import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import TitleRender from "./TitleRender.js";
import ButtonRender from "./ButtonRender.js";
import MenuRender from "./MenuRender.js";


function App() {
  const [isShowingVeg, setIsShowingVeg] = useState(false);
  const myMenu = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }; 
  return (
    <div className="App">
      <TitleRender/>
      <ButtonRender isVeg={isShowingVeg} setIsVeg={setIsShowingVeg}/>
      <MenuRender isVeg={isShowingVeg} menu={myMenu}/>
    </div>
  );
}

export default App;
