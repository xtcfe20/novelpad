$(function() {

  // day night mode
    $('input[value="day"]:radio').change(
    function(){
         $("body").css("background","#333333");
         $("input[type=text]").css("color","EEEEEE");
        $(".remote").css("color","#EEEEEE");
        $(".content").css("background","#333333");
        $(".row").css({
          background:'#EEEEEE',
          color:'#333333'
        });   
    });    
    $('input[value="night"]:radio').change(
    function(){
        $("body").css("background","#AAAAAA");
        $("input[type=text]").css("color","333333");
        $(".remote").css("color","#333333");
        $(".content").css("background","#AAAAAA");
        $(".row").css({
          background:'#333333',
          color:'#AAAAAA'
        });
        
    });    

    // fontsize
    $( "#fontslider" ).slider({
      value:20,
      min: 14,
      max: 28,
      step: 2,
      slide: function( event, ui ) {
        $( "#fontsize" ).val(ui.value +"px");
        $(".row").css("font-size",ui.value);
      }
    });
    $( "#fontsize" ).val($( "#fontslider" ).slider( "value" ) +"px" ); 

    // marginspace
    $( "#spaceslider" ).slider({
      value:20,
      min: 0,
      max: 40,
      step: 20,
      slide: function( event, ui ) {
        $( "#marginspace" ).val(ui.value +"px");
        $(".row").css({
           'padding':ui.value,
           'padding-right':ui.value
       });
      }
    });
    $( "#marginspace" ).val($( "#spaceslider" ).slider( "value" ) +"px" ); 


    // lineheight
    $( "#lineslider" ).slider({
      value: 2,
      min: 1,
      max: 3,
      step: .5,
      slide: function( event, ui ) {
        $( "#lineheight" ).val(ui.value +"px");
        $(".row").css("line-height",ui.value);
      }
    });
    $( "#lineheight" ).val($( "#lineslider" ).slider( "value" ) +"px" ); 



  });