import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Match = props => {
	const [gameBoard, setGameBoard] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const [currentPlayer, setCurrentPlayer] = useState("");
	const [matchSequence, setMatchSequence] = useState("");

	useEffect(() => {
		setCurrentPlayer(props.currentPlayer);
	}, []);

	useEffect(() => {
		setMatchSequence(<div className="h5">It is {currentPlayer} turn</div>);
	}, [currentPlayer]);

	function updateBoard(selectedCell) {
		let gameBoardTemp = [...gameBoard];
		gameBoardTemp[selectedCell] = currentPlayer;
		setGameBoard(gameBoardTemp);
		let isThereWinner = checkIfThereAreWinner(gameBoardTemp);
		if (isThereWinner == true) {
			setMatchSequence(
				<div className="h5 text-success">
					Player {currentPlayer} Wins!
				</div>
			);
		} else {
			if (currentPlayer == "x") {
				setCurrentPlayer("o");
			} else {
				setCurrentPlayer("x");
			}
		}
	}

	function checkIfThereAreWinner(gameBoardTemp) {
		let isThereWinner = false;

		let topRow = gameBoardTemp[0] + gameBoardTemp[1] + gameBoardTemp[2];
		if (topRow.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let middleRow = gameBoardTemp[3] + gameBoardTemp[4] + gameBoardTemp[5];
		if (middleRow.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let bottomRow = gameBoardTemp[6] + gameBoardTemp[7] + gameBoardTemp[8];
		if (bottomRow.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let leftCol = gameBoardTemp[0] + gameBoardTemp[3] + gameBoardTemp[6];
		if (leftCol.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let middleCol = gameBoardTemp[1] + gameBoardTemp[4] + gameBoardTemp[7];
		if (middleCol.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let rightCol = gameBoardTemp[2] + gameBoardTemp[5] + gameBoardTemp[8];
		if (rightCol.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let leftDiagonal =
			gameBoardTemp[0] + gameBoardTemp[4] + gameBoardTemp[8];
		if (leftDiagonal.match(/xxx|ooo/)) {
			isThereWinner = true;
		}
		let rightDiagonal =
			gameBoardTemp[2] + gameBoardTemp[4] + gameBoardTemp[6];
		if (rightDiagonal.match(/xxx|ooo/)) {
			isThereWinner = true;
		}

		return isThereWinner;
	}

	function startOver() {
		props.startOver();
	}

	return (
		<Fragment>
			<div className="container">
				<div className="">{matchSequence}</div>

				<div className="">
					<button value="x" onClick={() => startOver()}>
						Start Over
					</button>
				</div>
				<div className="board">
					<div className="row">
						<button
							className="col-4 cell"
							onClick={() => updateBoard(0)}>
							{gameBoard[0]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(1)}>
							{gameBoard[1]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(2)}>
							{gameBoard[2]}
						</button>
					</div>
					<div className="row">
						<button
							className="col-4 cell"
							onClick={() => updateBoard(3)}>
							{gameBoard[3]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(4)}>
							{gameBoard[4]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(5)}>
							{gameBoard[5]}
						</button>
					</div>
					<div className="row">
						<button
							className="col-4 cell"
							onClick={() => updateBoard(6)}>
							{gameBoard[6]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(7)}>
							{gameBoard[7]}
						</button>
						<button
							className="col-4 cell"
							onClick={() => updateBoard(8)}>
							{gameBoard[8]}
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Match.propTypes = {
	currentPlayer: PropTypes.string,
	startOver: PropTypes.func
};
