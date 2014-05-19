//Building button pressed at this moment

var current_building = "none";

//Lists

var id_list = new Array();
var creep_list = new Array();
var building_list = new Array();

//Portion of code to get the last click coordinates

var mouse_x = 0;
var mouse_y = 0;
var mouse_selecting = false;

var start_of_selection = new position(0,0);
var end_of_selection = new position(0,0);

canvas.oncontextmenu = function (event) {  
    
        mouse_x = event.pageX - this.offsetLeft;
        mouse_y = event.pageY - this.offsetTop;
    
    for(var i = 0; i < creep_list.length ; i++){
    	if(creep_list[i].selected_group == true){
    		creep_list[i].move_to(new position(mouse_x,mouse_y));
    	}
    }
};

canvas.onmousedown = function(event){

		mouse_x = event.pageX - this.offsetLeft;
        mouse_y = event.pageY - this.offsetTop;

        if(current_building == "none"){

        start_of_selection = new position(mouse_x,mouse_y);

    }else{
    	//Building
    }
};

canvas.onmouseup = function(event){


		if(current_building == "none"){

			mouse_x = event.pageX - this.offsetLeft;
        	mouse_y = event.pageY - this.offsetTop;

        end_of_selection = new position(mouse_x,mouse_y);

	var selection_vector = new vector(start_of_selection,end_of_selection);
    var a = selection_vector.angle;
	
	var first_square = a < (Math.PI / 2);
	var second_square = !first_square && (a < Math.PI);
	var third_square = !second_square && (a < (3*Math.Pi/2));
	var fourth_square = !third_square && (a < (2*Math.pi));
	
	
		
		if(fourth_square){
			for(var i = 0; i < creep_list.length; i++){
				if(creep_list[i].position.x > selection_vector.origin.x && creep_list[i].position.y > selection_vector.origin.y && creep_list[i].position.x < selection_vector.end.x && creep_list[i].position.y < selection_vector.end.y){
					creep_list[i].selected_group = true;
				}else{
					creep_list[i].selected_group = false;
					}
				} // end of for
				
			}else if(third_square){
					
				for(var i = 0; i < creep_list.length; i++){
					if(creep_list[i].position.x < selection_vector.origin.x && creep_list[i].position.y > selection_vector.origin.y && creep_list[i].position.x > selection_vector.end.x && creep_list[i].position.y < selection_vector.end.y){
						creep_list[i].selected_group = true;
					}else{
						creep_list[i].selected_group = false;
						}
					}//end of for
				
			}else if(second_square){
				
				for(var i = 0; i < creep_list.length; i++){
					if(creep_list[i].position.x < selection_vector.origin.x && creep_list[i].position.y < selection_vector.origin.y && creep_list[i].position.x > selection_vector.end.x && creep_list[i].position.y > selection_vector.end.y){
						creep_list[i].selected_group = true;
					}else{
						creep_list[i].selected_group = false;
						}
					}//end of for
			}else{
				for(var i = 0; i < creep_list.length; i++){
					if(creep_list[i].position.x > selection_vector.origin.x && creep_list[i].position.y < selection_vector.origin.y && creep_list[i].position.x < selection_vector.end.x && creep_list[i].position.y > selection_vector.end.y){
						creep_list[i].selected_group = true;
					}else{
						creep_list[i].selected_group = false;
					}
				}//end of for
			}// end of big if		
  }
};



function move_creeps (){
	for(var i = 0; i < creep_list.length ; i++){
		if(creep_list[i].walk == true && creep_list[i].focus == creep_list[i].position){
			creep_list[i].walk == false;
		}else{

			var next_position = new position(0,0);
			var vector_to_focus = new vector(creep_list[i].position,creep_list[i].focus);
			
			next_position.x = creep_list[i].vel*Math.cos(vector_to_focus.angle);
			next_position.y = creep_list[i].vel*Math.sin(vector_to_focus.angle);

			creep_list[i].position = next_position;
		}
	}
}
