import * as React from 'react';
import './style.css';
import CreateTile from './CreateTile.tsx'
import axios from 'axios';
import Layout from './model'

export default function LayoutTile(tile: Layout) {
  // load definition here
console.log(tile)
   return (
    <div className="main">
      <h1>{tile.tile.title}</h1>
      <div className="content" key={tile.tile.rootElement.elementKey} id={tile.tile.rootElement.elementKey}>
        <CreateTile tile={tile.tile.rootElement}/>
      </div>
    </div>
  );
}
