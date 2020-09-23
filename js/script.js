//SCROLL TO TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('.fa-chevron-up').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('.fa-chevron-up').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
    $('.fa-chevron-up').click(function(){
        $('html').animate({scrollTop:0}, 500);
    });

});


//PRODUCT CATEGORY SLIDER
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

//COUNTDOWN TIMER
var endDate = new Date ("Dec 31, 2020 20:00:00").getTime();
var timer = setInterval(function() {
    let time_now = new Date().getTime();
    let time_remaining = endDate - time_now;
        if(time_remaining>=0) {
            let days = Math.floor(time_remaining / (1000*60*60*24));
            let hours = Math.floor((time_remaining % (1000*60*60*24)) / (1000*60*60));
            let minutes = Math.floor ((time_remaining % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((time_remaining % (1000*60)) / (1000));

            document.getElementById('days').innerHTML = days + "<span class='label'>DAY(S)</span>";
            document.getElementById('hours').innerHTML= ("0"+ hours).slice(-2) + "<span class='label'>HR(S)</span>";
            document.getElementById('minutes').innerHTML = ("0"+minutes).slice(-2) + "<span class='label'>MIN(S)</span>";
            document.getElementById('seconds').innerHTML = ("0"+seconds).slice(-2) + "<span class='label'>SEC(S)</span>";
        }else{
            document.getElementById('timer').innerHTML = ""
        }

}, 1000)

// $(document).ready(function() {
//     $('#myCarousel').carousel({
// 	    interval: 5000
// 	})
// });


//IMAGE ROLLOVER
$(function(){
    $(".xzoom, .xzoom-gallery").xzoom({
        zoomWidth: 400,
        tint: "#333",
        Xoffset:15,

    });
});

//PRODUCT QUANTITY INCREMENT//
$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });


//ACCORDION TOGGLE
let mapOne = document.getElementById('map1');
let mapTwo = document.getElementById('map2');

if(mapOne===true){
    mapTwo.innerHTML
}