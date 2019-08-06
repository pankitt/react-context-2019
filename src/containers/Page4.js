import React, {Component} from 'react';

// Для начала создаем новый context
// Это объект с 2 свойствами: { Provider, Consumer }
// Заметим, что они именованы, используя UpperCase, не camelCase
// Это важно, так как мы будем использовать из как компоненты в дальнейшем,
// а имена компонентов должны начинаться с большой буквы.
const UserContext = React.createContext();

// Компоненты, которым необходимы данные из context,
// используют свойство Consumer.
// Consumer использует паттерн "render props".
const UserAvatar = ({ size }) => (
	<UserContext.Consumer>
		{user => (
			<img
				className={`user-avatar ${size || ""}`}
				alt="user avatar"
				src={user.avatar}
			/>
		)}
	</UserContext.Consumer>
);

// Подчеркну, что нам больше не нужен "user prop",
// так как Consumer получает его из context.
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

// ... здесь остальные компоненты ...
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
// ... (им больше не нужно беспокоиться о `user`).

// Внутри App мы передаем context вниз, используя Provider.
class App extends Component {
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
			<div className="app">
				<UserContext.Provider value={this.state.user}>
					<h3>Page 4:</h3>
					<Nav />
					<Body />
				</UserContext.Provider>
			</div>
		);
	}
}

export default App;
