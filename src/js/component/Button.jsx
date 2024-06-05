
import React, { useState } from "react";



    const ButtonRainbow = () => {
        const [showElement, setShowElement] = useState(false);


    
        return (
            <div>
                <div className="mainContainer">

                    {showElement && (
                        <div id="colorExtra">
                            <div className="rainbow"></div>
                        </div>
                    )}
                </div>
                <div className="positionButton">
                    {/* Cambiar el estado para mostrar u ocultar el elemento adicional al hacer clic en el botón */}
                    <button onClick={() => setShowElement(!showElement)}>
                        {showElement ? "Hide Amazing Thing" : "Show Amazing Thing"}
                    </button>
                </div>
            </div>
        );
    };
    
    export default ButtonRainbow;



