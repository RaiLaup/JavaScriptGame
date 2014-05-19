var canvas = document.getElementById("canvas_game");
var ctx = canvas.getContext('2d');

function draw_map(){
	
}
function draw_creeps(){
	ctx.beginPath();
	ctx.fillStyle = "Black";
	for(var i = 0; i < creep_list.length ; i++){
		ctx.fillRect(creep_list[i].position.x,creep_list[i].position.y,20,5);
	}
	ctx.closePath();
}
function draw_entities(){

}
function draw_selection(){
	
}

