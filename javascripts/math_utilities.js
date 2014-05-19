function position(x,y){
	this.x = x;
	this.y = y;
}
function vector(origin,end){
	this.origin = origin;
	this.end = end;
	this.angle = Math.atan((end.y-origin.y)/(end.x-origin.x));
}

