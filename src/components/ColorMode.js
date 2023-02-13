import React from 'react'

class ColorMode extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	makeAlertMessage()
	{
		alert("yoyoyo");
	}

	render()
	{
		return (
			<button onClick={this.makeAlertMessage}>yoyoyo</button>
		);
	}
}

export default ColorMode;

/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let dots = [];

function init() {
	for (let i = 0; i < 100; i++)
	{
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let size = Math.random() * 3 + 1;
		let xSpeed = (Math.random() - 0.5) * 3;
		let ySpeed = (Math.random() - 0.5) * 3;
		let opacity = Math.random();
		let opacitySpeed = (Math.random() - 0.5) * 0.1;
		dots.push({ x, y, size, xSpeed, ySpeed, opacity, opacitySpeed });
	}
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < dots.length; i++)
	{
		let dot = dots[i];
		ctx.beginPath();
		ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
		ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
		ctx.fill();
		dot.x += dot.xSpeed;
		dot.y += dot.ySpeed;
		dot.opacity += dot.opacitySpeed;

		if (dot.x > canvas.width || dot.x < 0)
		{
			dot.xSpeed = -dot.xSpeed;
		}
		if (dot.y > canvas.height || dot.y < 0)
		{
			dot.ySpeed = -dot.ySpeed;
		}
		if (dot.opacity <= 0)
		{
			dots.splice(i, 1);
			i--;
			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let size = Math.random() * 3 + 1;
			let xSpeed = (Math.random() - 0.5) * 3;
			let ySpeed = (Math.random() - 0.5) * 3;
			let opacity = 0;
			let opacitySpeed = (Math.random() + 0.5) * 0.05;
			dots.push({ x, y, size, xSpeed, ySpeed, opacity, opacitySpeed });
			continue;
		}
		if (dot.opacity >= 1)
		{
			dot.opacitySpeed = -dot.opacitySpeed;
		}
	}
}
*/