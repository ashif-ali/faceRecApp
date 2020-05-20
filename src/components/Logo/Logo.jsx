import React from 'react';
import brain from './brain.png';
import './Logo.css';
import Tilt from 'react-tilt';
const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
				<div className="Tilt-inner pointer pa3">
					{' '}
					<img style={{ paddingTop: '5px' }} alt="logo" src={brain} />{' '}
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
