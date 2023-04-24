import * as React from 'react';
import './style.css';
import CreateTile from './CreateTile.tsx'
import axios from 'axios';

export default function App() {
  // load definition here
  
  let url = "http://localhost:8080/definition"
  const [data, setData] = React.useState("")

  React.useEffect(()=>{
    axios.get(url, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      }
    }).then(response => {
        console.log(response.data)
        setData(response.data)
    }).catch(err =>{ console.log(err) })
  },[])

if (!!data){
   return (
    <div className="main">
      {
      /* 
      TODO remove title usage from template 

      -> Is this comment from the developers creating this task to attend to themselves, or for me to do? ;) 
      is it refering to the title in the example.json file "Kotecki 🐱🐱🐱" ? 
      It causes an issue with json-server as json-server requires its json input files to contain only key - object 
      or key - array of objects pairs in the root layer.
      I've fixed it by creating a root key "definition" and placing the rest of the document as its value.
      */
      }
      
      <h1>{data?.title}</h1>
      <div className="content" key={data?.rootElement?.elementKey} id={data?.rootElement?.elementKey}>
        <CreateTile tile={data?.rootElement}/>
      </div>
    </div>
  );
}
else{
  return (
    <div className="main">
      <h1>{'Place you components here 👇'}</h1>
      <div className="content">
      </div>
    </div>
  );
}
 
}
