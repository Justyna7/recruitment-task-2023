import * as React from 'react';
import './style.css';
import {ImageTile, TextTile, HorizontalSplitter, VerticalSplitter, ButtonTile, Element} from './model.ts'
import ImageTileComponent from './ImageTileComponent.tsx';
import TextTileComponent from './TextTileComponent.tsx';

export default function CreateTile(tile: Element) {
  // load definition here
console.log(tile, tile.tile.type, tile.tile)
  let components = {
    imageTile: ImageTileComponent,
    textTile:TextTileComponent

  }
  
  return (
    React.createElement(components[tile.tile.type], tile=tile)
  );
}