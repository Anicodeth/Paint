// Get the canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the default brush size, color, and mode
let brushSize = 5;
let brushColor = 'red';
let isErasing = false;

// Add event listeners to the color buttons
document.getElementById('red').addEventListener('click', () => {
	brushColor = 'red';
	isErasing = false;
});
document.getElementById('blue').addEventListener('click', () => {
	brushColor = 'blue';
	isErasing = false;
});
document.getElementById('green').addEventListener('click', () => {
	brushColor = 'green';
	isErasing = false;
});
document.getElementById('eraser').addEventListener('click', () => {
	isErasing = true;
});

// Add event listeners to the brush size buttons
document.getElementById('small').addEventListener('click', () => {
	brushSize = 5;
});
document.getElementById('medium').addEventListener('click', () => {
	brushSize = 10;
});
document.getElementById('large').addEventListener('click', () => {
	brushSize = 20;
});

// Add event listeners to the canvas for drawing and erasing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
});
canvas.addEventListener('mousemove', (e) => {
	if (isDrawing) {
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		if (isErasing) {
			ctx.globalCompositeOperation = 'destination-out';
			ctx.strokeStyle = 'white';
		} else {
			ctx.globalCompositeOperation = 'source-over';
			ctx.strokeStyle = brushColor;
		}
		ctx.lineWidth = brushSize;
		ctx.stroke();
		lastX = e.offsetX;
		lastY = e.offsetY;
	}
});
canvas.addEventListener('mouseup', () => {
	isDrawing = false;
});