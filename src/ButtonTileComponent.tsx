import * as React from 'react';
import './style.css';
import {ButtonTile, Action} from './model'

export default function ButtonTileComponent(tile: ButtonTile) {
  // load definition here
  // console.log(tile)

  function update(action: Action) {
    let element = document.getElementById(action.referenceElementKey)
    // console.log(element, action.referenceElementKey, typeof(action.referenceElementKey), action)
    if (!!action.value.color){
      changeColor(action, element)
    }
    if(!!action.value.source){
      changeImage(action, element)
    }

  }
  function changeColor(action:Action, element:Element){
   
    let atr = element.getAttribute("class").split(" ") 
    console.log("changeColor", action.value.color, element, atr)
    element.setAttribute("class", atr[0]+" "+ action.value.color)
    
  }
  function changeImage(action:Action, element:Element){
    console.log("changeImage", action.value.source, element)
    element.setAttribute("src", action.value.source)
  }


  return (
    // <div className={tile.tile.type} key={tile.tile.elementKey}>
        <button className={tile.tile.type} id={tile.tile.elementKey} key={tile.tile.elementKey} onClick={e => update(tile.tile.action)}>{tile.tile.text}</button> 
    // </div>
  );
}