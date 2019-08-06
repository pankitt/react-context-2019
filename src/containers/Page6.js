import React, {Component} from "react";

// Plain empty context
const RoomContext = React.createContext();

// A component whose sole job is to manage
// the state of the Room
class RoomStore extends Component {
	state = {
		isLit: true
	};

	toggleLight = () => {
		this.setState(state => ({ isLit: !state.isLit }));
	};

	render() {
		// Pass down the state and the onToggleLight action
		return (
			<RoomContext.Provider
				value={{
					isLit: this.state.isLit,
					onToggleLight: this.toggleLight
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

// Receive the state of the light, and the function to
// toggle the light, from RoomContext
const Room = () => (
	<RoomContext.Consumer>
		{({ isLit, onToggleLight }) => (
			<div className={`room ${isLit ? "lit" : "dark"}`}>
				The room is {isLit ? "lit" : "dark"}.
				<br />
				<button onClick={onToggleLight}>Flip</button>
			</div>
		)}
	</RoomContext.Consumer>
);

const App = () => (
	<RoomStore>
		<div className="app">
			<Room />
		</div>
	</RoomStore>
);

export default App;
