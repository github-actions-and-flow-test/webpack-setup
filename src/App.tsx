import * as React from "react";
import { useState } from "react";


export const App = () => {
    const [clicks, setClicks] = useState(0)

    const increment = () => setClicks(() => clicks + 1)
    const decrement = () => setClicks(() => clicks - 1)

    return (
        <div className="container">
            <h1> Let`s learn webpack! </h1>
            <hr/>
            <div className="logo"></div>

            <div id="header">
                <h1>
                    Good luck...
                </h1>
            </div>

            <div>
                Your clicks: {clicks}
                <br/>
                <button onClick={increment}> More clicks!</button>
                <br/>
                <button onClick={decrement}> Less clicks!  </button>
            </div>

        </div>
    )
}

