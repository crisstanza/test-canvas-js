"use strict";

var log = console.log;
// log = function() {};

(function() {

	var form, myCanvas, exibirEixos;

	var btLinha;
	var lx1, ly1, lx2, ly2;

	function desenharEixos() {
		var width = myCanvas.width / 2;
		var height = myCanvas.height / 2;
		var context = myCanvas.getContext('2d');
		context.strokeStyle = '#DDD';
		context.lineWidth = 1;
		context.moveTo(-width, 0);
		context.lineTo(width, 0);
		context.stroke();
		context.moveTo(0, -height);
		context.lineTo(0, height);
		context.stroke();
	}

	function limpar() {
		var context = myCanvas.getContext('2d');
		context.save();
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, myCanvas.width, myCanvas.height);
		context.restore();
	}

	function exibirEixosOnClick(event) {
		var sender = event.srcElement;
		if (sender.checked) {
			desenharEixos();
		} else {
			limpar();
		}
	}

	function btLinhaOnClick(event) {
		var sender = event.srcElement;
		log('botao clicado', sender);
		var context = myCanvas.getContext('2d');
		context.strokeStyle = 'red';
		context.lineWidth = 1;
		context.moveTo(lx1.value, -ly1.value);
		context.lineTo(lx2.value, -ly2.value);
		context.stroke();
	}

	function initButtons() {
		btLinha.addEventListener('click', function(event) { btLinhaOnClick(event); } );
	}

	function initChecks() {
		exibirEixos.addEventListener('click', function(event) { exibirEixosOnClick(event); } );
	}

	function initCanvas() {
		var width = myCanvas.width / 2;
		var height = myCanvas.height / 2;
		var context = myCanvas.getContext('2d');
		context.translate(width, height);
	}

	function initGlobals() {
		form = document.forms[0];
		myCanvas = document.getElementById('myCanvas');
		btLinha = document.getElementById('bt-linha');
		exibirEixos = document.getElementById('exibirEixos');
		lx1 = form.lx1;
		ly1 = form.ly1;
		lx2 = form.lx2;
		ly2 = form.ly2;
	}

	function init() {
		initGlobals();
		initButtons();
		initCanvas();
		initChecks();
	}

	window.addEventListener('load', function() { init(); });

})();
