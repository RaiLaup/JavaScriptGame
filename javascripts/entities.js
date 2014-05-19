function creep (team){
	this.team = null;
	this.id = create_id();
	this.position = new position(0,0);
	this.walk = false;
	this.vel = 1;
 	this.team = team;
	this.focus = new position(0,0);
	this.selected_group = false;


	creep_list.push(this);

}
creep.prototype.move_to = function(coordinates){
	this.focus = coordinates;
	this.walk = true;
};

function building (){
	this.id = create_id();
	this.x = Mouse.x;
	this.y = Mouse.y;
	this.type = current_building;

	building_list.push(this);
}

function create_id(){
	var repeated = false;
	var new_id = Math.random();
	if(id_list.length !== 0){
		for(var i = 0; i < id_list.length ; i++ ){
			if( id_list[i] === new_id ){
				repeated = true;
			}
		}
	}else{
		id_list.push(new_id);
	}
	
	if(repeated){
		return create_id();
	}else{
		return new_id;
	}
}
