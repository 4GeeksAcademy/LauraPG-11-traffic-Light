import React, { useState } from "react";
import Button from "./Button.jsx"



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ButtonRainbow from "./Button.jsx";

//create your first component



const Home = () => {

	const [light, setLight] = useState("")
	

	return (
		<div>
			<div className="mainContainer">

				<div id="trafficTop"></div>

				<div id="container">
					<div
						// si hacemos click el valor de light sera igual a lo indicado, y el formato llamado active se incorpora. 
						//RECORDATORIO ESTO ES LA CONDICION (light === "redLight") EL IF, SI SE CUMPLE, ES LA INTERROGACION  ? Y EL ELSE, SI NO SE CUMPLE CONDICION, SON LOS :
						//red no lleva comillas por un formato estatico
						//$ señala el comienzo de codigo javascript
						// active lleva comillas porque es una parte de la expresión de JavaScript, y se usa para representar una clase CSS que se aplicará condicionalmente.
						className={`red ${light === "redLight" ? "active" : ""}`}
						//Al hacer click alteramos el valor de light que inicialmente era "" y le decimos que su nuevo valor es "redLight"
						onClick={() => setLight("redLight")}
					></div>

					<div
						className={`yellow ${light === "yellowLight" ? "active" : ""}`}
						onClick={() => setLight("yellowLight")}
					></div>

					<div
						className={`green ${light === "greenLight" ? "active" : ""}`}
						onClick={() => setLight("greenLight")}
					></div>
					
					<ButtonRainbow/>
		
				</div>

			</div>
		</div>
	);
};

export default Home;
