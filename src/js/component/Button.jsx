
import React, { useState } from "react";

const ButtonRainbow = ({ propLight, propsetLight }) => {
    const [showElement, setShowElement] = useState(false);

    return showElement ? (
        <>
            <div className="mainContainer">
                <div id="colorExtra">
                    <div className={`rainbow ${propLight === "rainbowLight" ? "active" : ""}`}
                        onClick={() => propsetLight("rainbowLight")}></div>
                </div>
            </div>
            <div className="positionButton">
                <button onClick={() => setShowElement(false)}>
                    Hide Amazing Thing
                </button>
            </div>
        </>
    ) : (
        <>
            <div className="mainContainer">
                <div className="positionButton">
                    <button onClick={() => setShowElement(true)}>
                        Show Amazing Thing
                    </button>
                </div>
            </div>
        </>
    );
};

export default ButtonRainbow;



