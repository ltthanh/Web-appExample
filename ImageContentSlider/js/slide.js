// slide
var count = 5;
var slideint = 1;
var newSlide = 1;
var slideNext = 1;

function prev(){	
	newSlide = slideint - 1;
	showSlideP(newSlide);
}

function next(){	
	newSlide = slideint + 1;
	showSlideN(newSlide);
}

function showSlideN(id){
	if(id > count){
		id = 1;
	}else if(id < 1) {
		id = count;
	}
	var old = id - 1;
	$("#ics-" + old).hide();	
	$("#ics-" + id).show();
	slideint = id;
	slideNext = id + 1;
}

function showSlideP(id){
	if(id > count){
		id = 1;
	}else if(id < 1) {
		id = count;
	}
	var old = count - id + 1;
	$("#ics-" + old).hide();	
	$("#ics-" + id).show();
	slideint = id;
	slideNext = id - 1;
}