import * as React from 'react';
import './style.css';
import { VerticalSplitter } from './model.ts'
import CreateTile from './CreateTile.tsx';

export default function VerticalSplitterTileComponent(tile: VerticalSplitter) {

  return (
    <div className={tile.tile.type} key={tile.tile.elementKey} id={tile.tile.elementKey}>
      {tile.tile.elements.map((t, index) => {
           return(<CreateTile key={index} tile={t}></CreateTile>) 
      })} 
    </div>
  );
}