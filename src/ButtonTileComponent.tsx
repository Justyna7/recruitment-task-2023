import * as React from 'react';
import './style.css';
import {ButtonTile, Action} from './model'

export default function ButtonTileComponent(tile: ButtonTile) {
  // load definition here
  const actions = {
    color: changeColor,
    source: changeImage
  }
  
  function update(action: Action) {
    let element = document.getElementById(action.referenceElementKey)
    // check for keys of action.value and iterate over them.
    // For each key get the corresponding function from the "actions" dictionary 
    // and invoke it
    Object.keys(action.value).forEach(e => {actions[e](action, element)
    });
  }
  function changeColor(action:Action, element:Element){
   
    let atr = element.getAttribute("class").split(" ") 
    // atr[0] refers to type of tile
    element.setAttribute("class", atr[0]+" "+ action.value.color)
    
  }
  function changeImage(action:Action, element:Element){
    element.setAttribute("src", action.value.source)
  }

  return (
    <button 
      className={tile.tile.type} 
      id={tile.tile.elementKey} 
      key={tile.tile.elementKey} 
      onClick={e => update(tile.tile.action)}>
        {tile.tile.text}
    </button> 
  );
}