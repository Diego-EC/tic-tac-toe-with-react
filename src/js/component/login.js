import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const Login = props => {
	function onStartGame(currentPlayer) {
		props.onStartGame(currentPlayer);
	}

	return (
		<Fragment>
			<div className="container">
				<div className="justify-content-center align-items-center">
					<div className="h5">Pick a weapon</div>

					<div className="bg-dark pt-5">
						<div>
							<p className="h5">choose your Weapon</p>
							<input
								type="text"
								placeholder="Player 1 name"></input>
							<input
								type="text"
								placeholder="Player 2 name"></input>
						</div>
						<div className="py-5">
							<button
								className="btn btn-light btn-xl"
								onClick={() => onStartGame("x")}>
								<i className="fas fa-times text-warning fa-3x"></i>
							</button>
							<button
								className="btn btn-light btn-xl ml-5"
								onClick={() => onStartGame("o")}>
								<i className="far fa-circle text-info fa-3x"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	onStartGame: PropTypes.func
};
