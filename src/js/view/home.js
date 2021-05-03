import React, { useState, useEffect } from "react";

import { Login } from "../component/login.js";
import { Match } from "../component/match.js";

export function Home() {
	const [gameStatus, setGameStatus] = useState("");

	useEffect(() => {
		setGameStatus(<Login onStartGame={startGame} />);
	}, []);

	function startGame(currentPlayer) {
		setGameStatus(
			<Match currentPlayer={currentPlayer} startOver={startOver} />
		);
	}

	function startOver() {
		setGameStatus(<Login onStartGame={startGame} />);
	}

	return <div className="text-center mt-5">{gameStatus}</div>;
}
