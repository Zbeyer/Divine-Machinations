import {Meteor} from 'meteor/meteor';
import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
	preload() {
		this.load.image('gem', '/assets/alchemy/5.png'); // Load the image here
	}

	create() {
		this.scene.start('Preloader');
		this.scene.stop('Boot');
	}
}

class Preloader extends Phaser.Scene {
	create() {
		this.scene.stop('Boot');
		this.add.image(400, 300, 'gem');
	}
}

const makeGame = function () {
	const config = {
		title: "Alchemy",
		parent: "alchemy-container",
		type: Phaser.WEBGL,
		backgroundColor: "#102030",
		render: {
			antialiasGL: false,
			pixelArt: true,
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.NONE,
			width: 640,
			height: 640,
		},
		callbacks: {
			postBoot: () => {
				console.log("Phaser initialized in the correct container.");
			},
		},
		canvasStyle: `display: block; width: 100%; height: 100%;`,
		autoFocus: true,
		audio: {
			disableWebAudio: false,
		},
	};

	let game = new Phaser.Game(config);
	game.scene.add('Boot', BootScene);
	game.scene.add('Preloader', Preloader);
	game.scene.start('Boot');
};

Template.alchemy.rendered = function () {
	makeGame();
}
