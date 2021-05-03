import React, { useState, useEffect } from "react";

import { Login } from "../component/login.js";
import { Match } from "../component/match.js";

export function Home() {
	const [gameStatus, setGameStatus] = useState("");

	function startGame() {
		setGameStatus(<Match />);
	}

	useEffect(() => {
		setGameStatus(<Login onStartGame={startGame} />);
	}, []);

	return <div className="text-center mt-5">{gameStatus}</div>;
}
