import React from "react";
import ReactDOM, { createRoot } from "react-dom/client"

const heading1 =<h2> This is written in JSX 🌎  </h2>

const ComponentComposition =() => (<h2>Component composition is 
    nothing but component in another component</h2>);


const FunctionalComponentExample= () =>{
  return (<div id="test">
    
                    {ComponentComposition()}
                <h1>Hi this is coming from functional component</h1>

           </div>
)};

const root1 =createRoot(document.getElementById("root1"));
const root2 =createRoot(document.getElementById("root2"));
root1.render(heading1);
root2.render(<FunctionalComponentExample/>);

