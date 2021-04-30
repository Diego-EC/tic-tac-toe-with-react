import React, { useState, useEffect } from "react";

import { Login } from "./view/login.js";
import { Game } from "./view/game.js";

export function Home() {
	const [isGameStarted, setIsGameStarted] = useState(false);

	let componentToShowHTML = <Login onStartGame={startGame} />;

	useEffect(() => {
		console.log("useEffect");
		if (isGameStarted == true) {
			console.log("true");
			//componentToShowHTML = <Login />;
		} else {
			console.log("false");
			//componentToShowHTML = <Game />;
		}
	}, [isGameStarted]);

	function changeVisibility() {}

	function startGame() {
		//setIsGameStarted(true);
		console.log("startGame");
	}

	return <div className="text-center mt-5">{componentToShowHTML}</div>;
}
