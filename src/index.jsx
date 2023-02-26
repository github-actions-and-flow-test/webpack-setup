import "./styles/styles.css"
import "./styles/less.less"
import "./babel"
import React from "react";
import ReactDOM from 'react-dom/client'

const App = () => (
    <div className="container">
        <h1> Let`s learn webpack! </h1>
        <hr/>
        <div className="logo"></div>

        <div id="header">
            <h1>
                Good luck...
            </h1>
        </div>

    </div>
)


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
                <App/>
        </React.StrictMode>
)


import json from "./assets/json-format.json"
import icon from "./assets/icon-square-big.svg"
import content from "./assets/content.xml"
import {Person} from "./Person";


//const newPerson  = new Person('Ani', icon)

//console.log(newPerson)
//console.log('JSON:', json)
//console.log('XML:', content)
