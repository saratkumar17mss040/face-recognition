import React from 'react';

const FaceRecognition = ({ imageURL }) => {
	return (
		<div className="center">
			<img src={imageURL} alt="face-input" />
		</div>
	);
};

export default FaceRecognition;
