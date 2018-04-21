var oldPosX;

var oldPosY;



var isClicked = false;





window.onload = function(){

	initialization();

};







function initialization(){

	move();

	document.getElementById("carre").onmousedown = function(){

		oldPosX = window.event.clientX;

		oldPosY = window.event.clientY;

		isClicked = true;

		

	};

	document.getElementById("carre").onmouseup = function(){

		isClicked = false;

	};

	document.getElementById("carre").onmousemove = function(event){

		if(isClicked){

			console.log("x: " + event.clientX + " y : "+ event.clientY);

			var deltaX = oldPosX - event.clientX;

			var deltaY = oldPosY - event.clientY;

			move(deltaX,deltaY);

			oldPosX = event.clientX;

			oldPosY = event.clientY;

		}		

	};	

}

function move(x,y){

	

	if(x === undefined && y === undefined){

	

		

	}else{

		var offsetX = document.getElementById("carre").offsetLeft;

		var offsetY = document.getElementById("carre").offsetTop;

		document.getElementById("carre").style.left  =  (offsetX - x) + "px" ;

		document.getElementById("carre").style.top  =  (offsetY - y) + "px" ;

	}

		

	

}





