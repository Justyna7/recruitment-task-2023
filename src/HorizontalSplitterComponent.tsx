import * as React from 'react';
import './style.css';
import {ImageTile, TextTile, HorizontalSplitter, VerticalSplitter, ButtonTile} from './model.ts'
import CreateTile from './CreateTile.tsx';

export default function HorizontalSplitterTileComponent(tile: HorizontalSplitter) {
  return (
    <div className={tile.tile.type} key={tile.tile.elementKey} id={tile.tile.elementKey}>
       {tile.tile.elements.map(t => {
           return(<CreateTile tile={t}></CreateTile>) 
        })}
        
        {/* <CreateTile tile={tile.tile.elements[1]}></CreateTile> */}
    </div>
  );
}