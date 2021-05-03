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

	return (
		<div className="container wrapper bg-secondary text-white text-center mt-5">
			<div className="h4">Tic Tac Toe in React.js</div>
			<div>{gameStatus}</div>
		</div>
	);
}
