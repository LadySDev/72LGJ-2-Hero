//import { ManagerScene } from './scenes/ManagerScene.js';

var config = {
	type: Phaser.AUTO,
	width: 960,
	height: 540,
	antialias: false,
	pixelArt: true,
	roundPixels: true,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: {
		preload: preload,
		create: create,
		update: update	
	}
};

var game = new Phaser.Game(config);

function preload(){}

function create(){}

function update(){}