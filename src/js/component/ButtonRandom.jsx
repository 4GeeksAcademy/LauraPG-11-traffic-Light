import React, { useState } from "react";

const ButtonRandom = ({ propsetLight }) => {
    const getRandomColor = () => {
        const colors = ["redLight", "yellowLight", "greenLight", "rainbowLight"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <>
            <div className="positionButton">
                <button onClick={() => propsetLight(getRandomColor())}>
                    Random Color
                </button>
            </div>
        </>

    )
}
export default ButtonRandom;