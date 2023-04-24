import * as React from 'react';
import './style.css';
import {ButtonTile} from './model'

export default function ButtonTileComponent(tile: ButtonTile) {
  // load definition here
  console.log(tile)
  return (
    // <div className={tile.tile.type} key={tile.tile.elementKey}>
        <button className={tile.tile.type} key={tile.tile.elementKey}>{tile.tile.text}</button> 
    // </div>
  );
}