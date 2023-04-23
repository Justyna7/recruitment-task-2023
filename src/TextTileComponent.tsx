import * as React from 'react';
import './style.css';
import {TextTile} from './model'

export default function TextTileComponent(tile: TextTile) {
  // load definition here
  
  return (
    <div className={"textTile "+tile.tile.color} key={tile.tile.elementKey}>
      <h1>{tile.tile.title}</h1>
      <div className="content">{tile.tile.text}</div>
    </div>
  );
}
