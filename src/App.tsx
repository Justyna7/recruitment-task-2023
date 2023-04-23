import * as React from 'react';
import './style.css';
import TextTile from './TextTileComponent.tsx';
import  ImageTile  from './ImageTileComponent.tsx';
import HorizontalSplitterTile from './HorizontalSplitterComponent.tsx';
import HorizontalSplitterTileComponent from './HorizontalSplitterComponent.tsx';

export default function App() {
  // load definition here
  const horTile = {
    "type": "horizontalSplitter",
    "elementKey": "55fa75b4-d48a-11ed-afa1-0242ac120002",
    "elements": [{
        "type": "imageTile",
        "elementKey": "1e07a55e-c594-46f7-a1eb-cbec3295e092",
        "source": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Kitty"
      },
      {
        "type": "textTile",
        "elementKey": "641962fe-f92a-4993-ba75-22882eff59d5",
        "title": "Who is my kotecek?",
        "text": "Having a kotecek as a pet can be an incredibly rewarding experience. They are affectionate animals that provide companionship and entertainment. Koteceks are known for their playful nature and can provide hours of entertainment with their antics.",
        "color": "mid"
      }
    ]
  }

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{'Place you components here 👇'}</h1>
      <div className="content">
        <HorizontalSplitterTileComponent tile={horTile}/>
      </div>
    </div>
  );
}
