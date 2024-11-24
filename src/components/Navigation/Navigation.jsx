import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
	const [isMobile, setIsMobile] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobile(!isMobile);
	};

	return (
		<nav className='navbar'>
			{/* <div className='navbar-logo'>
				<a href='#'>NetRunner</a>
			</div> */}
			<ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
				<li>
					<a href='#'>{'>HOME'}</a>
				</li>
				<li>
					<a href='#'>{'>ABOUT'}</a>
				</li>
				<li>
					<a href='#'>{'>PROJECTS'}</a>
				</li>
				<li>
					<a href='#'>{'>CONTACT'}</a>
				</li>
			</ul>
			<div className='navbar-toggle' onClick={toggleMobileMenu}>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</div>
		</nav>
	);
};

export default Navigation;
