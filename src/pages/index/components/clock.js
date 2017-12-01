import React, { Component } from 'react';

export default class Clock extends Component {
	render() {
		return (
			<div>
				<canvas ref="canvas" width="500" height="500"></canvas>
			</div>
		)
	}

	componentDidMount() {
		this.showclock();
	}

	showclock() {
		this.canvas = this.refs.canvas;
		this.ctx = this.canvas.getContext("2d");
		this.init();
	}

	init() {
		setInterval(()=>{
			this.ctx.clearRect(0,0,500,500);
			this.drawClock();
		}, 1000);
	}

	drawClock() {
		this.drawTable();
		this.drawCenterPoint();
		this.drawMinutesPoint();
		this.drawHoursPoint();
		this.drawMinutesNum();
		this.drawTimes();
	}

	drawTable() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.arc(0, 0, 150, 0, Math.PI*2);
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawCenterPoint() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.arc(0, 0, 5, 0, Math.PI*2 );
		this.ctx.fillStyle = "red";
		this.ctx.fill();
		this.ctx.restore();
	}

	drawMinutesPoint() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i=0; i<60; i++) {
			this.ctx.moveTo(0, -146);
			this.ctx.lineTo(0, -144);
			this.ctx.rotate(Math.PI /30);
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawHoursPoint() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		for(var i=0; i<12; i++) {
			this.ctx.moveTo(0, -144);
			this.ctx.lineTo(0, -140);
			this.ctx.rotate(Math.PI / 6);
		}
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawMinutesNum() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		for(var i=1; i<=12; i++) {
			this.ctx.font = "20px Arial";
			this.ctx.textAlign = "center";
			this.ctx.textBaseline = "middle";
			this.ctx.fillText(i, Math.sin(Math.PI*i/6)*120, -Math.cos(Math.PI*i/6)*120);
		}

		this.ctx.stroke();
		this.ctx.restore();
	}

	drawTimes() {
		var date = new Date(),
			seconds = date.getSeconds(),
			minutes = date.getMinutes(),
			hours = ( date.getHours() % 12 ) + ( minutes / 60 ),
			arr = ["吴","娟","!","大","傻","子"];

		this.drawSeconds(seconds);
		this.drawMinutes(minutes);
		this.drawHours(hours);
		this.drawFont(arr);

	}

	drawSeconds(seconds) {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * seconds /30);
		this.ctx.moveTo(0, -95);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawMinutes(minutes) {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * minutes /30);
		this.ctx.moveTo(0, -80);
		this.ctx.lineTo(0, 5);
		this.ctx.strokeStyle = "#333";
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawHours(hours) {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI * hours /6);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 5);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	}

	drawFont(arr) {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		for(var i=0; i<arr.length; i++) {
			this.ctx.font = "12px Arial";
			this.ctx.textAlign = "center";
			this.ctx.textBaseline = "middle";
			this.ctx.fillStyle = "green";
			this.ctx.fillText(arr[i], Math.sin(Math.PI*i/3)*100, -Math.cos(Math.PI*i/3)*100);
		}
		this.ctx.stroke();
		this.ctx.restore();
	}

}