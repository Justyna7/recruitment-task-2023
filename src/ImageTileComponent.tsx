import * as React from 'react';
import './style.css';
import {ImageTile} from './model.ts'

export default function ImageTileComponent(tile: ImageTile) {
  // load definition here
  return (
    <img className={tile.tile.type} key={tile.tile.elementKey} id={tile.tile.elementKey} src={tile.tile.source} alt={tile.tile.title}/> 
  );
}
