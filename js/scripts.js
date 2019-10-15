// Singleton Line Comment

/*
Comment Multiple Lines 
hello wordl
*/

$(document).ready(function(){

    /*Single CSS Definintion on an element or tag*/
//    $('.header-logo img').css('width','200px');

    /*Multiple CSS Define*/

    // $('.header-logo img').css({
    //     "width" : "200px",
    //     "border" : "1px solid #f00",
    //     "opacity": "0.7"
    // });

    // $('.header-nav li a').hover(function(){
    //     $(this).css({"color":"#f00"});    
    // }, function(){
    //     $(this).css({"color":"#fff"});
    // });

//     var flag = 1;
// //    console.log("The value of flag is: " + flag);

//     var a = 1;
//     var b=2;

//     function sum(a, b){
//         console.log(a+b);
//     }

//     sum(1,2);

// $('.header-nav li:nth-child(1) a').click(function(){

//     $('.main-banner h1 span').css({
//         "font-size":"25px"
//     });

//     return false;
// });

// $('.header-nav li:nth-child(2) a').click(function(){

//     $('.main-banner h1 span').css({
//         "font-size":"35px"
//     });

//     return false;
// });

    if($('#slider').length){
       
        /*Total Items Calculation*/

        var tot_Count = $('#slider > ul > li').length;

        /*Calculating total width of list items*/

        var list_width = $('#slider > ul > li').width();
        var tot_width  = list_width  * tot_Count;

        $('#slide-content').css({
            "width": tot_width
        });

        /*making pagination list items*/
        for(var i=1; i<=tot_Count; i++){
            $('#slider ul.pagination').append('<li><a href="#"></a></li>');
            $('#slider ul.pagination li:first-child a').addClass('active');
        }


        /*Next Button*/
        var inc = 1;
        var margin_calc;
        
        if(inc == 1){
            $('#slider ul.pagination li:first-child').addClass('active');
        }
        
        $('#slider .btn-next').click(function(){

            if(inc == tot_Count){
                inc = 0;
                margin_calc = parseInt(list_width) * -1*(inc);
            }else{
                margin_calc = parseInt(list_width) * -1*(inc);
            }
            
            $('#slide-content').css({
                "margin-left": margin_calc
            });
            
            inc++;

            $('#slider ul.pagination li').removeClass('active');
            $('#slider ul.pagination li:nth-child('+inc+')').addClass('active');

            
            return false;
        });

    }
    

});

/*
OR

$(function(){


});



$(window).load(function(){


});
*/