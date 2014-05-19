

for(var i = 0; i < 20; i++){
	creep_list.push(new creep());
	creep_list[creep_list.length - 1].position.x = Math.random() * 100;
	creep_list[creep_list.length - 1].position.y = Math.random() * 100;
}

var interval = setInterval(function(){ loop();},20);

function loop(){
	move_creeps();
	draw_map();
}