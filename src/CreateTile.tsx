import * as React from 'react';
import './style.css';
import {ImageTile, TextTile, HorizontalSplitter, VerticalSplitter, ButtonTile, Element} from './model.ts'
import ImageTileComponent from './ImageTileComponent.tsx';
import TextTileComponent from './TextTileComponent.tsx';
import ButtonTileComponent from './ButtonTileComponent.tsx';
import HorizontalSplitterTileComponent from './HorizontalSplitterComponent.tsx';
import VerticalSplitterTileComponent from './VerticalSplitterComponent.tsx';

export default function CreateTile(tile: Element) {
  // load definition here
// console.log(tile, tile.tile.type, tile.tile)
  let components = {
    imageTile: ImageTileComponent,
    textTile:TextTileComponent,
    buttonTile:ButtonTileComponent,
    horizontalSplitter:HorizontalSplitterTileComponent,
    verticalSplitter:VerticalSplitterTileComponent

  }
  // console.log(tile)
  return (
    React.createElement(components[tile.tile.type], tile=tile)
  );
}