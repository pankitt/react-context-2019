import React, {Component} from 'react';

const UserContext = React.createContext();

function withUser(Component) {
	return function ConnectedComponent(props) {
		return (
			<UserContext.Consumer>
				{user => <Component {...props} user={user} />}
			</UserContext.Consumer>
		);
	};
}

class UserStore extends Component {
	state = {
		user: {
			avatar:
				"https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
			name: "Dave",
			followers: 1234,
			following: 123
		}
	};

	render() {
		return (
			<UserContext.Provider value={this.state.user}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserAvatar = withUser(({ user, size }) => (
	<img
		className={`user-avatar ${size || ""}`}
		alt="user avatar"
		src={user.avatar}
	/>
));

const UserStats = () => (
	<UserContext.Consumer>
		{user => (
			<div className="user-stats">
				<div>
					<UserAvatar user={user} />
					{user.name}
				</div>
				<div className="stats">
					<div>{user.followers} Followers</div>
					<div>Following {user.following}</div>
				</div>
			</div>
		)}
	</UserContext.Consumer>
);

const Nav = () => (
	<div className="nav">
		<UserAvatar size="small" />
	</div>
);

const Content = () => <div className="content">main content here</div>;

const Sidebar = () => (
	<div className="sidebar">
		<UserStats />
	</div>
);

const Body = () => (
	<div className="body">
		<Sidebar />
		<Content />
	</div>
);

const App = () => (
	<UserStore>
		<div className="app">
			<h3>Page 5:</h3>
			<Nav />
			<Body />
		</div>
	</UserStore>
);

export default App;
