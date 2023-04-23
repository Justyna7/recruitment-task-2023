import * as React from 'react';
import './style.css';
import {ImageTile, TextTile, HorizontalSplitter, VerticalSplitter, ButtonTile} from './model.ts'
import CreateTile from './CreateTile.tsx';

export default function VerticalSplitterTileComponent(tile: VerticalSplitter) {
  return (
    <div className={tile.tile.type} key={tile.tile.elementKey} id={tile.tile.elementKey}>
        <CreateTile tile={tile.tile.elements[0]}></CreateTile>
        <CreateTile tile={tile.tile.elements[1]}></CreateTile>
    </div>
  );
}