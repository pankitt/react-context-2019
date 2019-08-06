import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header>
				<ul>
					<li><Link to="/page1">Page 1</Link></li>
					<li><Link to="/page2">Page 2</Link></li>
					<li><Link to="/page3">Page 3 (redux)</Link></li>
					<li><Link to="/page4">Page 4 (context)</Link></li>
					<li><Link to="/page5">Page 5 (context)</Link></li>
					<li><Link to="/page6">Page 6 (context)</Link></li>
				</ul>
				<hr/>
			</header>
		)
	}
}

export default Header;
