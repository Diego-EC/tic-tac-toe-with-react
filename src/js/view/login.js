import React, { Fragment } from "react";

export const Login = () => {
	return (
		<Fragment>
			<div className="container bg-secondary text-white">
				<div className="h4">Tic Tac Toe in React.js</div>
				<div className="h5">Pick a weapon</div>

				<div className="chooseWeapon bg-dark mt-5">
					<div>
						<p className="h5">choose your Weapon</p>
						<input type="text" placeholder="Player 1 name"></input>
						<input type="text" placeholder="Player 2 name"></input>
					</div>
					<div>
						<button className="btn btn-primary">Button</button>
						<button className="btn btn-primary">Button</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
