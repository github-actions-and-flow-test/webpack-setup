import "./styles/styles.css"
import "./styles/less.less"
import "./babel"
import React from "react";
import ReactDOM from "react-dom/client"
import {App} from "./App";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
                <App/>
        </React.StrictMode>
)


// import json from "./assets/json-format.json"
// import icon from "./assets/icon-square-big.svg"
// import content from "./assets/content.xml"
// import {Person} from "./Person";


//const newPerson  = new Person('Ani', icon)

//console.log(newPerson)
//console.log('JSON:', json)
//console.log('XML:', content)
