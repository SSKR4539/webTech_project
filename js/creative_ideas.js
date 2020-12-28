$(document).ready(function(){
    $("#spiral_light").click(function(){
    	$("#spiral_light_div").slideToggle(1000); 
    });
});


$(document).ready(function(){
    $("#light_trail").click(function(){
    	$("#light_trail_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#water_splash").click(function(){
    	$("#water_splash_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#crystal_ball").click(function(){
    	$("#crystal_ball_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#oil_water").click(function(){
    	$("#oil_water_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#shoot_out").click(function(){
    	$("#shoot_out_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#motion_blur").click(function(){
    	$("#motion_blur_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#shooting_through").click(function(){
    	$("#shooting_through_div").slideToggle(1000); 
    });
});

$(document).ready(function(){
    $("#fade1").click(function(){
    	$("#fade1_img").fadeToggle(1000);
        $("#fade1_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade2").click(function(){
    	$("#fade2_img").fadeToggle(1000);
        $("#fade2_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade3").click(function(){
    	$("#fade3_img").fadeToggle(1000);
        $("#fade3_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade4").click(function(){
    	$("#fade4_img").fadeToggle(1000); 
        $("#fade4_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade5").click(function(){
    	$("#fade5_img").fadeToggle(1000);
        $("#fade5_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade6").click(function(){
    	$("#fade6_img").fadeToggle(1000);
        $("#fade6_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade7").click(function(){
    	$("#fade7_img").fadeToggle(1000);
        $("#fade7_img").fadeToggle(500); 
    });
});

$(document).ready(function(){
    $("#fade8").click(function(){
    	$("#fade8_img").fadeToggle(1000);
        $("#fade8_img").fadeToggle(500); 
    });
});

document.addEventListener('DOMContentLoaded',function(){
    var photo = new SmartPhoto(".img-big");
        photo.on('change',function(){
          	console.log('change');
        });
        photo.on('close',function(){
          	console.log('close');
        });
        photo.on('swipestart',function(){
          	console.log('swipestart');
        });
        photo.on('swipeend',function(){
            console.log('swipeend');
        });
        photo.on('loadall',function(){
            console.log('loadall');
        });
        photo.on('zoomin',function(){
            console.log('zoomin');
        });
        photo.on('zoomout',function(){
            console.log('zoomout');
        });
        photo.on('open',function(){
            console.log('open');
        });
    });



window.onload = function() {
        $("#spiral_light_div").slideToggle(1);
        $("#spiral_light_div").slideToggle(2000); 
        
        $("#light_trail_div").slideToggle(1);
        $("#light_trail_div").slideToggle(2000); 
  
        $("#water_splash_div").slideToggle(1);
        $("#water_splash_div").slideToggle(2000); 
  
        $("#crystal_ball_div").slideToggle(1);
        $("#crystal_ball_div").slideToggle(2000); 
  
        $("#oil_water_div").slideToggle(1);
        $("#oil_water_div").slideToggle(2000); 
  
        $("#shoot_out_div").slideToggle(1);
        $("#shoot_out_div").slideToggle(2000); 
  
        $("#motion_blur_div").slideToggle(1);
        $("#motion_blur_div").slideToggle(2000); 
  
        $("#shooting_through_div").slideToggle(1);
        $("#shooting_through_div").slideToggle(2000); 
  
        $("#fade1_img").fadeToggle(100);
        $("#fade1_img").fadeToggle(3000); 
  
        $("#fade2_img").fadeToggle(100); 
        $("#fade2_img").fadeToggle(3000); 
  
        $("#fade3_img").fadeToggle(100);
        $("#fade3_img").fadeToggle(3000); 
  
        $("#fade4_img").fadeToggle(100);
        $("#fade4_img").fadeToggle(3000); 
  
        $("#fade5_img").fadeToggle(100);
        $("#fade5_img").fadeToggle(3000); 
  
        $("#fade6_img").fadeToggle(100);
        $("#fade6_img").fadeToggle(3000); 
  
        $("#fade7_img").fadeToggle(100);
        $("#fade7_img").fadeToggle(3000); 
  
        $("#fade8_img").fadeToggle(100);
        $("#fade8_img").fadeToggle(3000);
}