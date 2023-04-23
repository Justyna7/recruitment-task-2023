import * as React from 'react';
import './style.css';
import {ImageTile} from './model.ts'

export default function ImageTileComponent(tile: ImageTile) {
  // load definition here
  console.log(tile)
  return (
    <div className={tile.tile.type} key={tile.tile.elementKey}>
        <img src={tile.tile.source} alt={tile.tile.title}/> 
    </div>
  );
}
