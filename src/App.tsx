import * as React from 'react';
import './style.css';
import TextTile from './TextTileComponent.tsx';

export default function App() {
  // load definition here
  const tile = {
    "type": "textTile",
    "elementKey": "641962fe-f92a-4993-ba75-22882eff59d5",
    "title": "Who is my kotecek?",
    "text": "Having a kotecek as a pet can be an incredibly rewarding experience. They are affectionate animals that provide companionship and entertainment. Koteceks are known for their playful nature and can provide hours of entertainment with their antics.",
    "color": "mid"
  }

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{'Place you components here 👇'}</h1>
      <div className="content">
        <TextTile tile = {tile}></TextTile>
      </div>
    </div>
  );
}
