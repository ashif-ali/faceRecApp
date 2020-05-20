import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
// import logo from './logo.svg';
import './App.css';
import 'tachyons';

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
		input: ''
	};

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log('clicked');
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particleOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
			</div>
		);
	}
}

export default App;
