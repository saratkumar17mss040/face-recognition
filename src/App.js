import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
	apiKey: '40367c8ce6714fdd8962d49b031c1ad8',
});

const particlesOptions = {
	particles: {
		number: {
			value: 100,
		},
		size: {
			value: 3,
		},
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: 'repulse',
			},
		},
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
		};
	}

	onInputChange = (event) => {
		this.setState({
			input: event.target.value,
		});
	};

	onButtonSubmit = () => {
		this.setState({
			imageURL: this.state.input,
		});
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
			function (response) {
				console.log(response);
			},
			function (error) {}
		);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				<FaceRecognition imageURL={this.state.imageURL} />
			</div>
		);
	}
}

export default App;
