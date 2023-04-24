import * as React from 'react';
import './style.css';
import HorizontalSplitterTileComponent from './HorizontalSplitterComponent.tsx';
import VerticalSplitterTileComponent from './VerticalSplitterComponent.tsx';

export default function App() {
  // load definition here
  const tile = {
    "type": "verticalSplitter",
    "elementKey": "0bc98fac-fc1f-4f47-9bab-19a3cf60b65d",
    "elements": [{
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
      },
      {
        "type": "verticalSplitter",
        "elementKey": "e1c3b7fe-d48a-11ed-afa1-0242ac120002",
        "elements": [{
            "type": "textTile",
            "elementKey": "09e76596-d48b-11ed-afa1-0242ac120002",
            "color": "dark"
          },
          {
            "type": "horizontalSplitter",
            "elementKey": "231b7060-77c9-486c-81d7-d555792139db",
            "elements": [{
                "type": "buttonTile",
                "elementKey": "3b8b9c74-d48c-11ed-afa1-0242ac120002",
                "text": "Perry",
                "action": {
                  "type": "update",
                  "referenceElementKey": "1e07a55e-c594-46f7-a1eb-cbec3295e092",
                  "value": {
                    "source": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                }
              },
              {
                "type": "buttonTile",
                "elementKey": "280f3e9e-12d9-4684-abaf-6f05ef345175",
                "text": "Todd",
                "action": {
                  "type": "update",
                  "referenceElementKey": "1e07a55e-c594-46f7-a1eb-cbec3295e092",
                  "value": {
                    "source": "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                }
              },
              {
                "type": "buttonTile",
                "elementKey": "41ae047a-d48c-11ed-afa1-0242ac120002",
                "text": "Gorfald",
                "action": {
                  "type": "update",
                  "referenceElementKey": "1e07a55e-c594-46f7-a1eb-cbec3295e092",
                  "value": {
                    "source": "https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                }
              },
              {
                "type": "buttonTile",
                "elementKey": "4a97d4e4-d48c-11ed-afa1-0242ac120002",
                "text": "Don't break",
                "action": {
                  "type": "update",
                  "referenceElementKey": "09e76596-d48b-11ed-afa1-0242ac120002",
                  "value": {
                    "color": "light"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }

  return (
    <div className="main">
      {/* TODO remove title usage from template */}
      <h1>{'Place you components here 👇'}</h1>
      <div className="content">
        <VerticalSplitterTileComponent tile={tile}/>
      </div>
    </div>
  );
}
