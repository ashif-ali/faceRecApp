import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
// import logo from './logo.svg';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
	apiKey: 'c0b41ac233624751ba8a3a00ad2925e9'
});

const particleOptions = {
	particles: {
		number: {
			value: 7,
			density: {
				enable: true,
				value_area: 80
			}
		}
	}
};
class App extends Component {
	state = {
		input: '',
		imageUrl: ''
	};

	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		console.log(width, height);
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		console.log('clicked');
		this.setState({ imageUrl: this.state.input });

		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) => this.calculateFaceLocation(response))
			// function(response) {
			// 	console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
			// },
			// function(error) {
			// 	//error
			// }
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
