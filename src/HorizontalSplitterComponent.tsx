import * as React from 'react';
import './style.css';
import {ImageTile, TextTile, HorizontalSplitter, VerticalSplitter, ButtonTile} from './model.ts'
import CreateTile from './CreateTile.tsx';

export default function HorizontalSplitterTileComponent(tile: HorizontalSplitter) {
  return (
    <div className={tile.tile.type} id={tile.tile.elementKey} key={tile.tile.elementKey} id={tile.tile.elementKey}>
       {tile.tile.elements.map((t, index) => {
           return(<CreateTile key={index} tile={t}></CreateTile>) 
        })}
        
        {/* <CreateTile tile={tile.tile.elements[1]}></CreateTile> */}
    </div>
  );
}