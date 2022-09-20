/** 
*   DOCU:
*   Last updated at: September 20, 2022
*   @author Silver
*/

$(document).ready(function(){
    
    $("body")
        .on("click",".value_rectangle", function(){
            // let button = $(this);
            let clicked_value_rectangle = $(this);
            // let gauge = $("#gauge_savings_container");
            let gauge_savings_container = $("#gauge_savings_container");
            // let gauge_bar = gauge.find("#gauge_savings_bar");
            let gauge_savings_bar = $("#gauge_savings_bar");
            // let sum = 0;
            let total_potential_savings = 0;
            
            // if(clicked_value_rectangle.attr('data-active')==='true'){
            //     clicked_value_rectangle.nextAll().removeClass("active");
            //     clicked_value_rectangle.nextAll().attr('data-active','false');
            // }
            // else{
            //     clicked_value_rectangle.addClass("active");
            //     clicked_value_rectangle.prevAll().addClass("active");
            //     clicked_value_rectangle.attr('data-active','true');
            //     clicked_value_rectangle.prevAll().attr('data-active','true');
            // }

            /**
             * [] Remove .active class from .value_rectangle
             * [] Add .active class to clicked_value_rectangle
             * [] Add .active class to all .value_rectangle before clicked_value_rectangle
             */

            $(".value_rectangle").removeClass("active");
            clicked_value_rectangle.addClass("active");
            clicked_value_rectangle.prevAll().addClass("active");
            
            // $(".value_rectangle[data-active!='false']").each(function(){
            $(".value_rectangle.active").each(function(){
                let values = $(this).attr('data-value');
                // sum += parseFloat(values);
                total_potential_savings += parseFloat(values);
            });

            /** TODO: Use .addClass() instead of .css(); Update the LESS file accordingly */
            // if(gauge_savings_container.find("#250").attr('data-active')==='true'){
            //     gauge_savings_bar.css('left','270px');
            // }

            // if(gauge_savings_container.find("#100").attr('data-active')==='true'){
            //     gauge_savings_bar.css('left','405px');
            // }

            // if(gauge_savings_container.find("#1_1500").attr('data-active')==='true'){
            //     gauge_savings_bar.css('left','538px');
            // }

            // if(gauge_savings_container.find("#1500").attr('data-active')==='true'){
            //     gauge_savings_bar.css('left','670px');
            // }

            $("#total_potential_savings").text('$'+ total_potential_savings);

        })
        .on("click","#footer_scroll", function(){
            $('html,body').scrollTop(0);
        });
});