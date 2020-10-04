import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma3 mt10">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 75 }} style={{ height: 150 , width: 150}}>
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '5px'}} src={brain} alt="brain-logo"></img>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
