import React from "react";
import { connect } from "react-redux";


// Это функция mapStateToProps, она извлекает один ключ из state (user)
// и передает его как `user` prop.
const mapStateToProps = state => ({
	user: state.user
});

// Подключаем UserAvatar с помощью функции connect(), теперь он получает
//`user` напрямую, без необходимости передавать от родительского компонента.

// вы можете разделить на 2 переменные:
//   const UserAvatarAtom = ({ user, size }) => ( ... )
//   const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);
const UserAvatar = connect(mapStateToProps)(({ user, size }) => (
	<img
		className={`user-avatar ${size || ""}`}
		alt="user avatar"
		src={user.avatar}
	/>
));

// Также подключаем UserStats с помощью функции connect(), теперь он получает
// `user` напрямую.
const UserStats = connect(mapStateToProps)(({ user }) => (
	<div className="user-stats">
		<div>
			<UserAvatar />
			{user.name}
		</div>
		<div className="stats">
			<div>{user.followers} Followers</div>
			<div>Following {user.following}</div>
		</div>
	</div>
));

// Теперь у компонента Nav больше нет необходимости знать о `user`.
const Nav = () => (
	<div className="nav">
		<UserAvatar size="small" />
	</div>
);

const Content = () => (
	<div className="content">main content here</div>
);

// Как и Sidebar.
const Sidebar = () => (
	<div className="sidebar">
		<UserStats />
	</div>
);

// Как и Body.
const Body = () => (
	<div className="body">
		<Sidebar />
		<Content />
	</div>
);

// В App теперь не храниться состояния, он может быть чистой функцией.
const App = () => (
	<div className="app">
		<h3>Page 3:</h3>
		<Nav />
		<Body />
	</div>
);

export default App;
